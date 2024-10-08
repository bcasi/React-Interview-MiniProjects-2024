import React, { useEffect, useState } from "react";
import { fetchCountryList } from "../api/countriesApi";
import CountryList from "./CountryList";
import styles from "./Countries.module.css";

const Countries = () => {
  const [country, setCountry] = useState([]);

  useEffect(() => {
    fetchCountryList().then((res) => {
      setCountry(res);
    });
  }, []);

  return (
    <ul className={styles.wrapper}>
      {country?.length > 0 &&
        country.map((res) => {
          return (
            <div key={res.name.common}>
              <CountryList flags={res.flags.png} name={res.name.common} />
            </div>
          );
        })}
    </ul>
  );
};

export default Countries;
