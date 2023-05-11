import PropTypes from 'prop-types'

const ErrorMessage = ({ errorMessage }) => {
    return (
        <p>{errorMessage}</p>
    )
}

export const WeatherData = ({ weather, windSpeed, humidity, error }) => {
    if (error.error) {
        return (<ErrorMessage errorMessage={error.errorMessage} />)
    }
    return (
        <div>
            <p>{weather}</p>
            <p>{windSpeed}</p>
            <p>{humidity}</p>
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
    error: PropTypes.shape({
        error: PropTypes.bool.isRequired,
        errorMessage: PropTypes.string.isRequired
    })
}