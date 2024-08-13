import React from "react";
import "./Country.css";

const Country = ({ data, render }) => {
  return <div className="countries">{data.map((item) => render(item))}</div>;
};

export default Country;
