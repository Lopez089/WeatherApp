import { Search, WeatherData } from '../index'
import { useState, useEffect } from 'react'
import { Nav } from '../index'
import { fetchWeather } from '../../utils'
import './weather.css'

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

    useEffect(() => {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    const coord = {
                        lat: position.coords.latitude,
                        long: position.coords.longitude
                    }
                    const urlBase = 'https://api.openweathermap.org/data/2.5/weather?'
                    const apiKey = import.meta.env.VITE_API_KEY

                    fetchWeather(urlBase, apiKey, undefined, coord)
                        .then(data => {
                            if (data.error) {
                                setError(data)
                                setDataWeather(null)
                            }
                            setDataWeather(data)
                        })
                        .catch(err => console.error(err))

                })
        } else {
            console.log('inactivo');
        }
    }, [])

    const handleSetDataWeather = (data) => {
        setDataWeather(data)
    }

    const handleSetError = (err) => {
        setError(err)
    }



    return (
        <section id='app'>
            <Nav searchs={searchs} onSearch={handleSetDataWeather} />
            <div className="container">
                {

                    error.error ? (
                        <div className='container-card'>
                            <div className='card'>
                                <header>
                                    <span
                                        onClick={() => setError(!Error)}
                                        className="material-icons"
                                    >
                                        close
                                    </span>
                                </header>
                                <span className="material-icons">
                                    error
                                </span>
                                <p>{error.errorMessage}</p>
                            </div>
                        </div>
                    ) :
                        (
                            <>
                                <Search
                                    onSearch={handleSetDataWeather}
                                    onError={handleSetError}
                                />
                                {
                                    dataWeather ?
                                        <WeatherData
                                            city={dataWeather.city}
                                            weather={dataWeather.weather}
                                            windSpeed={dataWeather.windSpeed}
                                            humidity={dataWeather.humidity}
                                            error={error}
                                            temp={dataWeather.temp}
                                            icon_code={dataWeather.icon_code}
                                        /> :
                                        <div className='warning'>
                                            <p>Ups, algo salió mal al obtener los datos del clima. Te recomendamos hacer una nueva búsqueda</p>
                                        </div>
                                }
                            </>
                        )
                }
            </div>


        </section >
    )
}