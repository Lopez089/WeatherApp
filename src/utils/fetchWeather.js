export const fetchWeather = (urlBase, apiKey, location) => {

    const unit = location.unit === 'celsius' ? 'metric' : 'imperial'
    console.log("🚀 ~ file: fetchWeather.js:4 ~ fetchWeather ~ unit:", unit)

    const URI = `${urlBase}${location.city}&appid=${apiKey}&units=${unit}`

    return fetch(URI)
        .then(res => res.json())
        .then(data => {
            return {
                temp: data.main.temp,
                weather: data.weather[0].main,
                windSpeed: data.wind.speed,
                humidity: data.main.humidity,
                city: data.name,
                icon_code: data.weather[0].icon
            }
        }
        )
        .catch(err => { return err })


}