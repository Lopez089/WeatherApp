import PropTypes from 'prop-types'

const ErrorMessage = ({ errorMessage }) => {
    return (
        <p>{errorMessage}</p>
    )
}

export const WeatherData = ({ weather, windSpeed, humidity, error, city, temp }) => {
    if (error.error) {
        return (<ErrorMessage errorMessage={error.errorMessage} />)
    }
    return (
        <div>
            <p>City: {city}</p>
            <p>Weather: {weather}</p>
            <p>Wind Speed: {windSpeed}</p>
            <p>Humedity: {humidity}</p>
            <p>Temp: {temp}</p>
        </div>
    )
}

ErrorMessage.propTypes = {
    errorMessage: PropTypes.string.isRequired
};

WeatherData.propTypes = {
    weather: PropTypes.number.isRequired,
    windSpeed: PropTypes.number.isRequired,
    humidity: PropTypes.number.isRequired,
    city: PropTypes.string.isRequired,
    temp: PropTypes.number.isRequired,
    error: PropTypes.shape({
        error: PropTypes.bool.isRequired,
        errorMessage: PropTypes.string.isRequired,
    }),

}