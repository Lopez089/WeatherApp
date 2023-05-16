export const fetchWeather = (urlBase, apiKey, location) => {
    const URI = `${urlBase}${location}&appid=${apiKey}&units=metric`

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