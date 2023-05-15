import { Search, WeatherData } from '../index'
import { useState } from 'react'
const error = {
    error: false,
    errorMessage: 'Introduce una ciudad correcta'
}



export const Weather = () => {
    const [dataWeather, setDataWeather] = useState(null)
    const [error, setError] = useState({
        error: false,
        errorMessage: ''
    })

    const handleSetDataWeather = (data) => {
        setDataWeather(data)
    }

    const handleSetError = (err) => {
        setError(err)
    }

    return (
        <section id='app'>
            <Search onSearch={handleSetDataWeather} onError={handleSetError} />
            {
                dataWeather &&
                <WeatherData
                    city={dataWeather.city}
                    weather={dataWeather.weather}
                    windSpeed={dataWeather.windSpeed}
                    humidity={dataWeather.humidity}
                    error={error}
                    temp={dataWeather.temp}
                />
            }

        </section>
    )
}