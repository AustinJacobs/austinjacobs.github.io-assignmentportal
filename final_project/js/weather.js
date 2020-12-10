// let URL = "https://api.openweathermap.org/data/2.5/weather?units=imperial&id=";

// let cityID = "5604473";

// let key = "2fcc76035c8ea35fae12e45da49246aa";

// let requestURL = URL + cityID + "&appid=" + key;

// console.log(requestURL);

// const apiURL = requestURL;
// fetch(apiURL)
//     .then((response) => response.json())
//     .then((jsObject) => {
//         console.log(jsObject);

//         document.getElementById('current-temp').textContent = jsObject.main.temp;

//         const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png'; // note the concatenation
//         const desc = jsObject.weather[0].description; // note how we reference the weather array
//         document.getElementById('imagesrc').textContent = imagesrc; // informational specification only
//         document.getElementById('icon').setAttribute('src', imagesrc); // focus on the setAttribute() method
//         document.getElementById('icon').setAttribute('alt', desc);
//     });

// Weather API Weather Summary

let URL = "https://api.openweathermap.org/data/2.5/weather?units=imperial&id=";

let cityID = "3530103";

let key = "2fcc76035c8ea35fae12e45da49246aa";

let requestURL = URL + cityID + "&appid=" + key;

const apiURL = requestURL;
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        document.getElementById('temp').textContent = Math.round(jsObject.main.temp);

        document.getElementById('description').textContent = jsObject.weather[0].description;

        document.getElementById('humidity').textContent = jsObject.main.humidity;

        document.getElementById('wind').textContent = Math.round(jsObject.wind.speed);
    });