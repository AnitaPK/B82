// api_url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=ca018df54353f065aaed7d802825b8be`

function fetchAPI(cityName){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=ca018df54353f065aaed7d802825b8be`)
    .then(res=>res.json())
    .then(data=>renderData(data))
    .catch(err=>console.log(err))
    .finally(()=>console.log('Api called'))
}

function getWeatherDetails(){
   const cityNa =  document.getElementById('city').value 
   fetchAPI(cityNa)
   document.getElementById('city').value  = ''
}

function renderData(data){
    document.getElementById("details").innerHTML = `
    <h3>${data.name} <i>${data.sys.country}</i></h3>
    <p>Temp : <b>${data.main.temp}</b></p>
    <p>${data.weather[0].main} : ${data.weather[0].description}</p>
    `
}    