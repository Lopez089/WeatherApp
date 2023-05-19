import PropTypes from 'prop-types'
import './weatherData.css'

const ErrorMessage = ({ errorMessage }) => {
    return (
        <p>{errorMessage}</p>
    )
}

export const WeatherData = ({ weather, windSpeed, humidity, error, city, temp, icon_code }) => {
    if (error.error) {
        return (<ErrorMessage errorMessage={error.errorMessage} />)
    }
    return (
        <section>
            <h3 className='city'>{city}</h3>
            <div className="container-weather">
                <img src={`http://openweathermap.org/img/wn/${icon_code}.png`} alt="icons" />
                <p className='temp'>{temp}<span>º</span></p>
                <p>{weather}</p>
            </div>
            <div className="container-data">
                <div>
                    <p>Wind</p>
                    <div>
                        <span className="material-icons">
                            air
                        </span>
                        <p> {windSpeed} km/h</p>
                    </div>
                </div>
                <div>
                    <p>Humedity </p>
                    <div>
                        <span className="material-icons">
                            water_drop
                        </span>
                        <p>{humidity}%</p>
                    </div>
                </div>
            </div>
        </section>
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
    icon_code: PropTypes.string.isRequired,
    error: PropTypes.shape({
        error: PropTypes.bool.isRequired,
        errorMessage: PropTypes.string.isRequired,
    }),

}