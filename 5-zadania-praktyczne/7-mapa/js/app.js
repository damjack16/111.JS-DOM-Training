const mapDiv = document.querySelector('.map');

// 2
const tooltip = document.createElement('div');
tooltip.classList.add('map-tooltip');
tooltip.style.top = `-9999px`;
tooltip.style.left = `-9999px`;

// 1
cities.forEach(city => {
    const element = document.createElement('a');
    element.classList.add('map-marker');
    element.href = city.href;
    element.dataset.name = city.name;
    element.dataset.population = city.population;
    element.style.left = `${city.map_x}px`;
    element.style.top = `${city.map_y}px`;
    element.innerText = city.name;
    mapDiv.appendChild(element);
})


const markers = mapDiv.querySelectorAll('.map-marker');
markers.forEach(marker => {
    // 3a
    marker.addEventListener('mouseover', (e) => {
        tooltip.innerHTML = `<h2>${marker.dataset.name}</h2>
        <div>Population: <strong>${marker.dataset.population}</strong></div>`;
        tooltip.style.top = parseInt(e.target.style.top, 10) + 30 + 'px';
        tooltip.style.left = parseInt(e.target.style.left, 10) + 30 + 'px';
        mapDiv.appendChild(tooltip)
    })

    // 3b
    marker.addEventListener('mousemove', (e) => {
        const rect = mapDiv.getBoundingClientRect();
        tooltip.style.top = `${e.pageY - (rect.top + window.scrollY) + 20}px`;
        tooltip.style.left = `${e.pageX - (rect.left + window.scrollX) + 20}px`;
    })

    // 3c
    marker.addEventListener('mouseout', (e) => {
        tooltip.style.top = `-9999px`;
        tooltip.style.left = `-9999px`;
        tooltip.innerHTML = '';
    })
})