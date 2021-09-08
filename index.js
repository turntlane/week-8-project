const ApiKey = config.myAPIKey
const timeKey = config.timeAPIKey
const weatherDegrees = document.getElementById('degrees')
const button = document.getElementById('submit-button')
const cityInput = document.getElementById('city-input')
const cityName = document.getElementById('city-name')
const skys = document.getElementById('skys')
const time = document.getElementById('time')
const icon = document.getElementById('icon')
const getWeather = document.getElementById('get-weather')
const newContainer = document.getElementById('new-container')


button.addEventListener('submit', (e) => {
    e.preventDefault()
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=${ApiKey}&units=imperial`)
.then(res => {
    let newWeather = res.data.weather[0].description
    newContainer.classList.add('new-container')
    cityInput.classList.remove('city-input')
    cityInput.classList.add('new-input')
    getWeather.style.display = 'none'
    icon.src = `https://openweathermap.org/img/wn/${res.data.weather[0].icon}.png`
    cityName.innerText = res.data.name
    skys.innerText = res.data.weather[0].description
    weatherDegrees.innerText = Math.round(res.data.main.temp) + `°F`
    document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + cityInput.value + " city')"
    cityInput.value = ''
})
axios.get('https://timezone.abstractapi.com/v1/current_time/?api_key=' + timeKey + '&location=' + cityInput.value)
.then(res => {
    let data = res.data.datetime.split('').slice(11).join(' ')

    time.innerText = `Local Time: \n ${data}`
})
})