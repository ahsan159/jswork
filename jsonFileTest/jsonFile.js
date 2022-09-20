let dataSaved = null;
fetch('./cities.json')
    .then((response) => response.json())
    .then((jsonData) => (dataSaved = jsonData));