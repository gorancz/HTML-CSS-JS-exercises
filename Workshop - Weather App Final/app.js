(function() {
    const baseURL = 'https://api.openweathermap.org/data/2.5';
    const API_KEY = 'c123127c9ea6ab5471624c98aebb8669';
    const navBtns = document.querySelectorAll('.nav-item');
    const pages = document.querySelectorAll('.page');
    const btnSearch = document.getElementById("citySearchBtn");

    const fetchWeatherData = async (city) => {
        try {
            const response = await fetch(`${baseURL}/forecast?q=${city}&units=metric&APPID=${API_KEY}`);
            const data = await response.json();
            displayWeatherStatistics(data);
            displayHourlyData(data);
        } catch (error) {
            console.log('API error', error)
        }
    }

    const displayPage = (index) => {
        pages.forEach(page => {
            page.style.display = 'none';
        });

        pages[index].style.display = 'block';
    };

    const attachClickListener = () => {
        for (let i = 0; i < navBtns.length; i++) {
            const button = navBtns[i];

            button.addEventListener("click", () => {
                displayPage(i);
            });
        }
    }

    btnSearch.addEventListener ("click", () => {
        const cityInput = document.getElementById("citySearchInput");
        const city = cityInput.value;

        event.preventDefault();
        console.log(fetchWeatherData(city));
    });

    attachClickListener();
    fetchWeatherData('Prague');
})();

const displayWeatherStatistics = (weatherData) => {
    const warmAndColdResult = document.getElementById('statisticsResult');
    warmAndColdResult.innerHTML = '';

    const displayStatsResult = document.querySelector('.tiny-text');
    displayStatsResult.innerHTML = '';

    const cityName = document.createElement('h2');
    cityName.classList.add('my-h2');
    cityName.textContent = `Weather statistics for ${weatherData.city.name}`;
    warmAndColdResult.appendChild(cityName);

    const stats = calculateStatistics(weatherData);
    displayStats(stats, displayStatsResult);
    displayWarmestAndColdestTimes(weatherData, warmAndColdResult);
};

const calculateStatistics = (weatherData) => {
    let maxTemp = -Infinity;
    let minTemp = Infinity;
    let maxHumd = -Infinity;
    let minHumd = Infinity;
    let totalTemp = 0;
    let totalHumd = 0;

    weatherData.list.forEach((period) => {
        const temp = period.main.temp;
        const humidity = period.main.humidity;

        maxTemp = Math.max(maxTemp, temp);
        minTemp = Math.min(minTemp, temp);
        maxHumd = Math.max(maxHumd, humidity);
        minHumd = Math.min(minHumd, humidity);
        totalTemp += temp;
        totalHumd += humidity;
    });

    const avgTemp = (totalTemp / weatherData.list.length).toFixed(2);
    const avgHumd = (totalHumd / weatherData.list.length).toFixed(2);

    return { maxTemp, avgTemp, minTemp, maxHumd, avgHumd, minHumd};
};

const displayStats = (stats, displayStatsResult) => {
    const statsNames = ['maxTemp', 'maxHumd','avgTemp', 'avgHumd','minTemp', 'minHumd'];
    const labels = ['MAX TEMP', 'MAX HUMD','AVG TEMP', 'AVG HUMD','LOW TEMP', 'LOW HUMD'];

    statsNames.forEach((name, index) => {
        const element = document.createElement('h6');
        const value = index % 2 === 0 ? `${stats[name]}°C` : `${stats[name]}%`;
        element.textContent = `${labels[index]}: ${value}`;
        displayStatsResult.appendChild(element);
    });
};

const displayWarmestAndColdestTimes = (weatherData, warmAndColdResult) => {
    let warmestTemp = -Infinity;
    let coldestTemp = Infinity;
    let warmestTime, coldestTime;

    weatherData.list.forEach((period) => {
        const tempMax = period.main.temp_max;
        const tempMin = period.main.temp_min;
        const date = new Date(period.dt * 1000);

        if (tempMax > warmestTemp) {
            warmestTemp = tempMax;
            warmestTime = date.toDateString();
        }

        if (tempMin < coldestTemp) {
            coldestTemp = tempMin;
            coldestTime = date.toDateString();
        }
    });

    displayTimeElement('Warmest time of the following period', warmestTime, warmAndColdResult);
    displayTimeElement('Coldest time of the following period', coldestTime, warmAndColdResult);
};

const displayTimeElement = (text, time, warmAndColdResult) => {
    const timeElement = document.createElement('h2');
    timeElement.textContent = `${text}: ${time}`;
    warmAndColdResult.appendChild(timeElement);
};

const displayHourlyData = (weatherData) => {
    const tableResult = document.getElementById('tableResult');
    tableResult.innerHTML = '';

    const table = document.createElement('table');
    table.classList.add('table');

    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    const headers = ['Icon', 'Description', 'Date & Time', 'Temperature', 'Humidity', 'Wind Speed'];
    headers.forEach(header => {
        const th = document.createElement('th');
        th.textContent = header;
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    const tbody = document.createElement('tbody');
    weatherData.list.forEach(period => {
        const row = document.createElement('tr');

        const iconCell = document.createElement('td');
        const icon = document.createElement('img');
        icon.src = `http://openweathermap.org/img/w/${period.weather[0].icon}.png`;
        iconCell.appendChild(icon);
        row.appendChild(iconCell);

        const descCell = document.createElement('td');
        descCell.textContent = period.weather[0].description;
        row.appendChild(descCell);

        const dateCell = document.createElement('td');
        const date = new Date(period.dt * 1000);
        dateCell.textContent = date.toLocaleString();
        row.appendChild(dateCell);

        const tempCell = document.createElement('td');
        tempCell.textContent = `${period.main.temp}°C`;
        row.appendChild(tempCell);

        const humdCell = document.createElement('td');
        humdCell.textContent = `${period.main.humidity}%`;
        row.appendChild(humdCell);

        const windCell = document.createElement('td');
        windCell.textContent = `${period.wind.speed} m/s`;
        row.appendChild(windCell);

        tbody.appendChild(row);
    });
    table.appendChild(tbody);

    tableResult.appendChild(table);
};







