import ForecastItem from "./Forecast-item";
import "./Forecast-item.css";

const Forecast = ({ data }) => {
  const weekdays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const todayIs = new Date();
  const forecast_weekdays = weekdays
    .slice(todayIs.getDay())
    .concat(weekdays.slice(0, todayIs.getDay()));

  return (
    <>
      {data.list.slice(0, 7).map((forecastDay, idx) => (
        <ForecastItem
          weekday={forecast_weekdays[idx]}
          key={idx}
          forecastDay={forecastDay}
        ></ForecastItem>
      ))}
    </>
  );
};

export default Forecast;
