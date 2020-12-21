import React, { Component, useState } from "react";
import Towns from "./Towns";

const Cities = (props) => {
  return props.show
    ? props.state.cities.map((city, index) => {
        const [showTwon, setshowTwon] = useState(false);
        const showTwonhandler = (event) => {
          event.stopPropagation();
          setshowTwon(!showTwon);
        };
        return (
          <ul
            onClick={(event) => showTwonhandler(event)}
            id={`city${index + 1}`}
          >
            {city.name}
            <Towns show={showTwon} city={city} />
          </ul>
        );
      })
    : null;
};

export default Cities;