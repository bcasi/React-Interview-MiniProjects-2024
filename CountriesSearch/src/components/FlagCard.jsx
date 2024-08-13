import React from "react";

import "./FlagCard.css";

const FlagCard = ({ item }) => {
  return (
    <div className="countryCard">
      <img src={item.flag} alt="country-flag" width={100} height={100} />
      <p>{item.name}</p>
    </div>
  );
};

export default FlagCard;
