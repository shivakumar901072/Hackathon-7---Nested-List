import React from "react";

const Towns = (props) => {
  return props.show
    ? props.city.towns.map((town, index) => {
        return <ul id={`town${index + 1}`}>{town.name}</ul>;
      })
    : null;
};

export default Towns;