
let nameCity = document.getElementById("name-city");
let catchData = document.getElementById("btn");
let formDisplay = document.getElementById("forecast");
let locationName = "";
function storage() {
    locationName = nameCity.value;

    return locationName;
}
catchData.addEventListener("click", function () {
    storage();
    getWeather(locationName);
});
async function getWeather(locationName) {

    let response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=4d8c7846f41c46b0a3a201129241812&q=${locationName}&days=3`);
    let data = await response.json();

    displayWeather(data);
}

function displayWeather(data) {
    let cartoona = `
        <div class="forecast">
            <div  class="forecast-header d-flex justify-content-between" ">
                <div class="day">${new Date(data.forecast.forecastday[0].date).toLocaleDateString('en-US', { weekday: 'long' })}</div>
                <div class="date">${data.forecast.forecastday[0].date}</div>
            </div>
            <div class="forecast-content" >
                <div class="location">${data.location.name}</div>
                <div class="degree-day">
                    <div class="num">${data.current.temp_c}<sup>o</sup>C</div>
                    <div class="forecast-icon">
                        <img src="${data.current.condition.icon}" alt="icon" width="90">
                    </div>	
                </div>
                <div class="custom ">${data.current.condition.text}</div>
                <span ><img src="./imgs/icon-umberella.png" alt="icon"  >${data.current.humidity}%</span>
                <span ><img src="./imgs/icon-wind.png" alt="icon"  >${data.current.wind_kph}km/h</span>
                <span ><img src="./imgs/icon-compass.png" alt="icon"  >${data.current.wind_dir}</span>
            </div>
        </div>
        
        
        <div class="forecast-middel forecast text-center ">
                <div class="forecast-header forecast-header-middel">
                    <div class="day">${new Date(data.forecast.forecastday[1].date).toLocaleDateString('en-US', { weekday: 'long' })}</div>
                </div>


                <div class="forecast-content">
                    <div class="forecast-icon">
                        <img src="${data.current.condition.icon}" alt="" width="48">
                    </div>
                    <div class="degree">${data.forecast.forecastday[1].day.maxtemp_c}<sup>o</sup>C</div>
                    <small class="small" >${data.forecast.forecastday[1].day.mintemp_c}<sup>o</sup></small>
                    <div class="custom">${data.forecast.forecastday[1].day.condition.text}</div>
                </div>
            </div>




              <div class="forecast text-center ">
                    <div class="forecast-header">
                        <div class="day">${new Date(data.forecast.forecastday[2].date).toLocaleDateString('en-US', { weekday: 'long' })}</div>
                    </div>
                    <div class="forecast-content">
                        <div class="forecast-icon">
                            <img src="${data.current.condition.icon}" alt="icon" width="48">
                        </div>
                        <div class="degree">${data.forecast.forecastday[2].day.maxtemp_c}<sup>o</sup>C</div>
                        <small class="small">${data.forecast.forecastday[2].day.mintemp_c}<sup>o</sup></small>
                        <div class="custom">${data.forecast.forecastday[2].day.condition.text}</div>
                    </div>
                </div> 
   
        `;
    formDisplay.innerHTML = cartoona
}



















































