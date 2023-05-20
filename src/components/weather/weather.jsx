import { Search, WeatherData } from '../index'
import { useState, useEffect } from 'react'
import { Nav } from '../index'

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
    const [searchs, setSearchs] = useState(null)

    useEffect(() => {
        const searchs = localStorage.getItem('weather')
        setSearchs(JSON.parse(searchs))
    }, [dataWeather]);

    const handleSetDataWeather = (data) => {
        setDataWeather(data)
    }

    const handleSetError = (err) => {
        setError(err)
    }

    return (
        <section id='app'>
            <Nav searchs={searchs} onSearch={handleSetDataWeather}/>
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
                    icon_code={dataWeather.icon_code}
                />
            }

        </section>
    )
}