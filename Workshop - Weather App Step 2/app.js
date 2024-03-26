//Step 1
const navBtns = document.querySelectorAll('.nav-item');
const pages = document.querySelectorAll('.page');
const btnSearch = document.getElementById("citySearchBtn");

const displayPage = (index) => {
    console.log("Index of button is", index);
    
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
attachClickListener();

btnSearch.addEventListener ("click", () => {
    const cityInput = document.getElementById("citySearchInput");
    const city = cityInput.value;
    
    event.preventDefault();
    console.log(fetchWeatherData(city));
});


//Step 2
const baseURL = 'https://api.openweathermap.org/data/2.5';
const API_KEY = 'c123127c9ea6ab5471624c98aebb8669'

const fetchWeatherData = async (city) => {
    try {
        const response = await fetch(`${baseURL}/forecast?q=${city}&units=metric&APPID=${API_KEY}`);
        const data = await response.json();
        console.log(data);
        displayWeatherStatistics(data);
    } catch (error) {
        console.log('API error', error)
    }
}

fetchWeatherData('Prague');

const displayWeatherStatistics = (weatherData) => {
    const warmAndColdResult = document.getElementById('statisticsResult');
    warmAndColdResult.innerHTML = '';

    const displayStatsResult = document.querySelector('.tiny-text');
    displayStatsResult.innerHTML = '';

    const cityName = document.createElement('h2');
    cityName.classList.add('my-h2');
    cityName.textContent = `Weather statistics for ${weatherData.city.name}`;
    warmAndColdResult.appendChild(cityName);

    console.log(cityName);
    console.log(calculateStatistics(weatherData));
    console.log(warmAndColdResult);

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








