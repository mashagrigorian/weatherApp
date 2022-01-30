import React from "react";

import "./Icon.css";
import Thermometer from "../../assets/thermometer.png";

const Icon = (props) => {
  if (props.icon) {
    return (
      <img
        alt="img"
        src={`http://openweathermap.org/img/w/${props.icon}.png`}
      />
    );
  } else {
    return (
      <>
        <img className="icon" src={Thermometer} alt={Thermometer} />
        <h5>{props.description}</h5>
      </>
    );
  }
};

export default Icon;
