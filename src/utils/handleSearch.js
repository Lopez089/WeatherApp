import { fetchWeather } from './fetchWeather'
import { handleLocalStorage } from './index'
const urlBase = 'https://api.openweathermap.org/data/2.5/weather?q='
const apiKey = import.meta.env.VITE_API_KEY

export const handleSearch = (e, location, onSearch, onError) => {
    e.preventDefault()
    fetchWeather(urlBase, apiKey, location, undefined)
        .then(data => {
            console.log("🚀 ~ file: handleSearch.js:19 ~ handleSearch ~ data:", data)
            if (data.error) {

                return (
                    onError(data),
                    onSearch(null)
                )
            }
            onSearch(data)
            handleLocalStorage(data)
        })
        .catch(err => console.log(err))
}

