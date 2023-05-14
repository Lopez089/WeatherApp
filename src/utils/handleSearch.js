import { fetchWeather } from './fetchWeather'

const urlBase = 'https://api.openweathermap.org/data/2.5/weather?q='
const apiKey = import.meta.env.VITE_API_KEY

export const handleSearch = (e, location, onSearch, onError) => {
    e.preventDefault()
    fetchWeather(urlBase, apiKey, location)
        .then(data => onSearch(data))
        .catch(err => onError(err))
}

