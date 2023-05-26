export const fetchWeather = (urlBase, apiKey, location, coord) => {

    const city = location === undefined ? undefined : location.city
    const unit = location===  undefined? null: location.unit === 'celsius'? 'metric' : 'imperial'
    const lat = coord ? coord.lat : undefined
    const long = coord ?  coord.long : undefined 

    const URLCoord= `${urlBase}lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`
    const URLLocation = `${urlBase}${city}&appid=${apiKey}&units=${unit}`

    const URL = location ?  URLLocation :URLCoord 
    return fetch(URL)
        .then(res => res.json())
        .then(data => {
            return {
                temp: Math.floor(data.main.temp),
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