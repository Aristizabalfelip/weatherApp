const getSec = document.querySelector('.info')

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
    const res = await fetch(l)
    const data = await res.json();
    paintWeather(data)
}

 const paintWeather = (element) => {  
    getSec.innerHTML = ''
    const div = document.createElement('div')
    div.innerHTML = `<h3>${element.name}</h3>
                     <img src="https://openweathermap.org/img/wn/${element.weather[0].icon}@2x.png" alt="">
                     <p>Temperature: ${Math.round(element.main.temp-273.15)}º</p>
                     <p>Wind speed: ${element.wind.speed}</p>
                     <button onclick="paintMore('${element.name}')">Call 3 day</button>                
    `  
    getSec.append(div)
      
 }
const paintMore = async (city) => {
    const link = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=c7066112f3c0c4bcc840e793ecb4a740`
    const res = await fetch(link)
    const data = await res.json();
    getUrlHistory(data[0].lat,data[0].lon)
}
const getUrlHistory = async (lat,lon) => { 
    console.log(lat,lon);
    const link = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=c7066112f3c0c4bcc840e793ecb4a740`
    const res = await fetch(link)
    const data = await res.json()
    console.log(data);
}