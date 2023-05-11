import { Search, WeatherData } from '../index'

const error = {
    error: false,
    errorMessage: 'Introduce una ciudad correcta'
}


export const Weather = () => {
    return (
        <>
            <Search />
            <WeatherData weather={90} windSpeed={90} humidity={98} error={error} />
        </>
    )
}