const getSec = document.querySelector('.info')
const sectionForecast = document.querySelector('.forecast')

const form = document.querySelector('form')
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const nameCity = event.target.name.value
    getCity(nameCity)
});

const getCity = (city) => {
    const link = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c7066112f3c0c4bcc840e793ecb4a740`
    getObj(link);
}
const getObj = async (l) => {
    try {
        const res = await fetch(l)
        const data = await res.json();
        paintWeather(data)
    } catch (error) {
        console.log('error');
    }


}

const paintWeather = (element) => {
    getSec.innerHTML = ''
    sectionForecast.innerHTML = ''
    const div = document.createElement('div')
    div.innerHTML = `<h3>${element.name}</h3>
                     <img src="https://openweathermap.org/img/wn/${element.weather[0].icon}@2x.png" alt="">
                     <p>Temperature: ${Math.round(element.main.temp - 273.15)}º</p>
                     <p>Wind speed: ${element.wind.speed}m/s</p>
                     <button class="btn" onclick="paintMore('${element.name}')">Forecast</button>                
    `
    getSec.append(div)

}
const paintMore = async (city) => {
    const link = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=c7066112f3c0c4bcc840e793ecb4a740`
    const res = await fetch(link)
    const data = await res.json();
    getUrlHistory(data[0].lat, data[0].lon)
}
const getUrlHistory = async (lat, lon) => {
    const link = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=c7066112f3c0c4bcc840e793ecb4a740`
    const res = await fetch(link)
    const data = await res.json()
    paintForecast(data);
}

const paintForecast = (element) => {
    sectionForecast.innerHTML = ''
    var daysWeek = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const day = new Date(element.list[2].dt_txt.slice(0, 11))
    const dayOne = new Date(element.list[10].dt_txt.slice(0, 11))
    const dayTwo = new Date(element.list[18].dt_txt.slice(0, 11))
    const div = document.createElement('div')
    div.innerHTML = `<div class='cards'>
                       <h3>${daysWeek[day.getDay()]}</h3>
                      <div>    
                        <article>
                         <p>${element.list[2].dt_txt.slice(10, 16)}</p>
                         <img src="https://openweathermap.org/img/wn/${element.list[2].weather[0].icon}@2x.png" alt="">
                         <p>Temperature: ${Math.round(element.list[2].main.temp - 273.15)}º</p>
                         <h4>${element.list[2].weather[0].description}</h4>
                        </article>
                        <article>
                        <p>${element.list[5].dt_txt.slice(10, 16)}</p>
                        <img src="https://openweathermap.org/img/wn/${element.list[5].weather[0].icon}@2x.png" alt="">
                        <p>Temperature: ${Math.round(element.list[5].main.temp - 273.15)}º</p>
                        <h4>${element.list[5].weather[0].description}</h4>
                       </article>
                       <article>
                       <p>${element.list[8].dt_txt.slice(10, 16)}</p>
                       <img src="https://openweathermap.org/img/wn/${element.list[8].weather[0].icon}@2x.png" alt="">
                       <p>Temperature: ${Math.round(element.list[8].main.temp - 273.15)}º</p>
                       <h4>${element.list[8].weather[0].description}</h4>
                      </article>   
                      </div>    
                     </div>
                     <div class='cards'>
                       <h3>${daysWeek[dayOne.getDay()]}</h3>
                      <div>    
                        <article>
                         <p>${element.list[10].dt_txt.slice(10, 16)}</p>
                         <img src="https://openweathermap.org/img/wn/${element.list[10].weather[0].icon}@2x.png" alt="">
                         <p>Temperature: ${Math.round(element.list[10].main.temp - 273.15)}º</p>
                         <h4>${element.list[10].weather[0].description}</h4>
                        </article>
                        <article>
                        <p>${element.list[13].dt_txt.slice(10, 16)}</p>
                        <img src="https://openweathermap.org/img/wn/${element.list[13].weather[0].icon}@2x.png" alt="">
                        <p>Temperature: ${Math.round(element.list[13].main.temp - 273.15)}º</p>
                        <h4>${element.list[13].weather[0].description}</h4>
                       </article>
                       <article>
                       <p>${element.list[16].dt_txt.slice(10, 16)}</p>
                       <img src="https://openweathermap.org/img/wn/${element.list[16].weather[0].icon}@2x.png" alt="">
                       <p>Temperature: ${Math.round(element.list[16].main.temp - 273.15)}º</p>
                       <h4>${element.list[16].weather[0].description}</h4>
                      </article>   
                      </div>    
                     </div>
                     <div class='cards'>
                       <h3>${daysWeek[dayTwo.getDay()]}</h3>
                      <div>    
                        <article>
                         <p>${element.list[18].dt_txt.slice(10, 16)}</p>
                         <img src="https://openweathermap.org/img/wn/${element.list[18].weather[0].icon}@2x.png" alt="">
                         <p>Temperature: ${Math.round(element.list[18].main.temp - 273.15)}º</p>
                         <h4>${element.list[18].weather[0].description}</h4>
                        </article>
                        <article>
                        <p>${element.list[21].dt_txt.slice(10, 16)}</p>
                        <img src="https://openweathermap.org/img/wn/${element.list[21].weather[0].icon}@2x.png" alt="">
                        <p>Temperature: ${Math.round(element.list[21].main.temp - 273.15)}º</p>
                        <h4>${element.list[21].weather[0].description}</h4>
                       </article>
                       <article>
                       <p>${element.list[24].dt_txt.slice(10, 16)}</p>
                       <img src="https://openweathermap.org/img/wn/${element.list[24].weather[0].icon}@2x.png" alt="">
                       <p>Temperature: ${Math.round(element.list[24].main.temp - 273.15)}º</p>
                       <h4>${element.list[24].weather[0].description}</h4>
                      </article>   
                      </div>    
                     </div>            
    `  ;
    sectionForecast.append(div)
} 