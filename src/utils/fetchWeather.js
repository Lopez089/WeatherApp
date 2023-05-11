export const fetchWeather = (urlBase, apiKey, location) => {
    const URI = `${urlBase}${location}&appid=${apiKey}`
    fetch(URI)
        .then(res => res.json())
        .then(data => console.log(data))
}