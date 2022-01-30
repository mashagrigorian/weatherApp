import React, { useState, useEffect } from "react";

import "./App.css";
import weather from "./apis/api";
import WeatherBody from "./components/WeatherBody";
import Loader from "./components/Loader";
import SearchBar from "./components/SearchBar";

const App = () => {
  const [temp, setTemp] = useState([]);
  const [city, setCity] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(false);
  }, []);

  const searchCity = (city) => {
    weather
      .get(
        `http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&cnt=7&appid=50e04cf67719af5691c59a407bb9b0e8`
      )
      .then((res) => {
        setTemp(res.data.list);
        setCity(res.data.city);
        setIsLoaded(false);
      });
  };

  const minTemp = temp.map((el) => {
    return parseInt(el.main.temp_min);
  });
  const maxTemp = temp.map((el) => {
    return parseInt(el.main.temp_max);
  });
  const icon = temp.map((el) => {
    return el.weather[0].icon;
  });
  const description = temp.map((el) => {
    return el.weather[0].description;
  });

  if (isLoaded) {
    return <Loader msg={"Loading..."} />;
  }
  return (
    <div className="App">
      <>
        <SearchBar city={city} searchCity={searchCity} />
      </>
      <div className="weatherContainer pt-3 pb-3">
        <h5 className="cityName">{city?.name}</h5>
        <WeatherBody
          day={"Mon"}
          icon={icon[0]}
          minTemp={minTemp[0]}
          maxTemp={maxTemp[0]}
          description={description[0]}
        />
        <WeatherBody
          day={"Tue"}
          icon={icon[1]}
          minTemp={minTemp[1]}
          maxTemp={maxTemp[1]}
          description={description[1]}
        />
        <WeatherBody
          day={"Wed"}
          icon={icon[2]}
          minTemp={minTemp[2]}
          maxTemp={maxTemp[2]}
          description={description[2]}
        />
        <WeatherBody
          day={"Thu"}
          icon={icon[3]}
          minTemp={minTemp[3]}
          maxTemp={maxTemp[3]}
          description={description[3]}
        />
        <WeatherBody
          day={"Fri"}
          icon={icon[4]}
          minTemp={minTemp[4]}
          maxTemp={maxTemp[4]}
          description={description[4]}
        />
      </div>
    </div>
  );
};

export default App;
