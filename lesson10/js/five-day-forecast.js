// Weather API Five day forecast

let forecastURL = "https://api.openweathermap.org/data/2.5/forecast?units=imperial&id=";

let cityIdentification = "5604473";

let APIkey = "2fcc76035c8ea35fae12e45da49246aa";

let requestedURL = forecastURL + cityIdentification + "&appid=" + APIkey;

console.log(requestedURL)

const weatherURL = requestedURL;
fetch(weatherURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        let forecast_temps = document.querySelectorAll(".temp")
        let forecast_dow = document.querySelectorAll(".dow")
        let forecast_icon = document.querySelectorAll(".icons")

        let list = jsObject.list;

        for (item of list) {
            if (item.dt_txt.includes('18:00:00')){
                let date = new Date(item.dt * 1000);

                // forecast_temps[0].textContent = list[5].weather[0].description;

            }
        }

        // forecast_temps[0].textContent = Math.round(list[4].main.temp);
        // forecast_temps[1].textContent = Math.round(list[12].main.temp);
        // forecast_temps[2].textContent = Math.round(list[20].main.temp);
        // forecast_temps[3].textContent = Math.round(list[28].main.temp);
        // forecast_temps[4].textContent = Math.round(list[36].main.temp);

        // forecast_dow[0].textContent = list[4].dt;
        // forecast_dow[1].textContent = list[12].dt;
        // forecast_dow[2].textContent = list[20].dt;
        // forecast_dow[3].textContent = list[28].dt;
        // forecast_dow[4].textContent = list[36].dt;

        // const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png'; // note the concatenation
        // const desc = jsObject.weather[0].description; // note how we reference the weather array
        // document.getElementById('imagesrc').textContent = imagesrc; // informational specification only
        // document.getElementById('icon').setAttribute('src', imagesrc); // focus on the setAttribute() method
        // document.getElementById('icon').setAttribute('alt', desc);

     });