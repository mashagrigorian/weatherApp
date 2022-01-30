import React from "react";

import "./WeatherBody.css";
import Days from "../Days/index";
import Icon from "../Icon/index";
import Temp from "../Temp/index";

const WeatherBody = (props) => {
  return (
    <div className="weatherBody card">
      <Days day={props.day} />
      <Icon icon={props.icon} />
      <Temp
        minTemp={props.minTemp}
        maxTemp={props.maxTemp}
        description={props.description}
      />
    </div>
  );
};

export default WeatherBody;
