import React, { useState } from "react";

import "./SearchBar.css";

const SearchBar = (props) => {
  const [city, setCity] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (city === "") {
      alert("City can not be empty");
    } else {
      props.searchCity(city);
    }
    setCity("");
  };

  const onChange = (e) => setCity(e.target.value);

  return (
    <div className="searchBar">
      <div className="searchBarChilds">
        <h5 className="text-white">Search city to know the weather</h5>
        <form onSubmit={onSubmit} className="formSearchCity">
          <input
            type="text"
            value={city}
            id="inputSearchCity"
            onChange={onChange}
            placeholder="Search City..."
          />
          <button type="submit" className="btn btn-outline-info text-white">
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
