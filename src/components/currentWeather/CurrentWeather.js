import "./CurrentWeather.css";

const CurrentWeather = ({ data }) => {
  return (
    <section className="weather">
      <div className="top">
        <div>
          <p className="city">{data.city}</p>
          <p className="weather-description">{data.weather[0].description}</p>
        </div>
        <p className="temperature">{Math.round(data.main.temp)}°C</p>
        <img
          className="weather-icon"
          alt="weather"
          src={`icons/${data.weather[0].icon}.png`}
        ></img>
      </div>
      <div className="bottom">
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label">Min</span>
            <span className="parameter-value">
              {Math.round(data.main.temp_min)}°C
            </span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Max</span>
            <span className="parameter-value">
              {Math.round(data.main.temp_max)}°C
            </span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value">{data.wind.speed}m/s</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">{data.main.humidity}%</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurrentWeather;
