const table = document.getElementById('planetsTable');
const loadPlanets = document.getElementById('loadPlanets');
const nextPlanets = document.getElementById('next');
const prevPlanets = document.getElementById('prev');

let page = 1;

const fetchPlanets = (url, nextPage) => {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            table.innerHTML = '<tr><th>Planet Name</th><th>Population</th><th>Climate</th><th>Gravity</th></tr>';
            table.style.border = '1px solid black';
            data.results.forEach(planet => {
                table.innerHTML += `<tr><td>${planet.name}</td><td>${planet.population}</td><td>${planet.climate}</td><td>${planet.gravity}</td></tr>`;
            });
            nextPlanets.style.display = nextPage ? 'block' : 'none';
            prevPlanets.style.display = page > 1 ? 'block' : 'none';
        });
}

loadPlanets.addEventListener('click', () => {
    fetchPlanets('https://swapi.dev/api/planets/?page=1', true);
});

nextPlanets.addEventListener('click', () => {
    page++;
    fetchPlanets('https://swapi.dev/api/planets/?page=' + page, page < 2);
});

prevPlanets.addEventListener('click', () => {
    page--;
    fetchPlanets('https://swapi.dev/api/planets/?page=' + page, true);
});