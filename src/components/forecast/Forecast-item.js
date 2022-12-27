const ForecastItem = ({ weekday, forecastDay }) => {
  return (
    <section className="forecast">
      <div className="forecast_weekday">
        <span>{weekday}</span>
        <span>{forecastDay.weather[0].description}</span>
      </div>
      <img
        className="forecast_icon"
        src={require(`../../../public/icons/${forecastDay.weather[0].icon}.png`)}
        alt="weather icon"
      ></img>
      <div className="forecast_details">
        <div>
          <span className="forecast_parameter-label">Min</span>
          <span className="forecast_parameter-value">
            {Math.round(forecastDay.main.temp_min)}°C
          </span>
        </div>

        <div>
          <span className="forecast_parameter-label">Max</span>
          <span className="forecast_parameter-value">
            {Math.round(forecastDay.main.temp_max)}°C
          </span>
        </div>

        <div>
          <span className="forecast_parameter-label">Wind</span>
          <span className="forecast_parameter-value">
            {forecastDay.wind.speed}m/s
          </span>
        </div>

        <div>
          <span className="forecast_parameter-label">Humidity</span>
          <span className="forecast_parameter-value">
            {forecastDay.main.humidity}%
          </span>
        </div>
      </div>
    </section>
  );
};

export default ForecastItem;
