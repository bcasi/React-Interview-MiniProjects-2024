import { useEffect, useState } from "react";

import "./App.css";

const App = () => {
  const [country, setCountry] = useState({
    countries: [],
    isCountrySelected: "",
  });
  const [state, setState] = useState({
    states: [],
    isStateSelected: "",
  });
  const [city, setCity] = useState({
    cities: [],
    isCitySelected: "",
  });

  useEffect(() => {
    async function getCountries() {
      try {
        const res = await fetch(
          "https://crio-location-selector.onrender.com/countries"
        );
        const jsonData = await res.json();
        return jsonData;
      } catch (e) {
        console.error(e);
      }
    }

    getCountries()
      .then((res) => {
        setCountry({ ...country, countries: res });
      })
      .catch((e) => {
        console.error;
      });
  }, []);

  async function getStates(country) {
    try {
      const res = await fetch(
        `https://crio-location-selector.onrender.com/country=${country}/states`
      );
      const statesJson = res.json();
      return statesJson;
    } catch (e) {
      console.error(e);
    }
  }

  async function getCities(countryName, stateName) {
    try {
      const res = await fetch(
        `https://crio-location-selector.onrender.com/country=${countryName}/state=${stateName}/cities`
      );
      const cityJson = res.json();
      return cityJson;
    } catch (e) {
      console.error(e);
    }
  }

  const handleCountry = (e) => {
    e.preventDefault();
    const countryName = e.target.value;

    setCountry({ ...country, isCountrySelected: countryName });
    getStates(countryName)
      .then((res) => {
        console.log(res);
        setState({ ...state, states: res });
      })
      .catch((e) => console.error);
  };

  const handleStates = (e) => {
    e.preventDefault();
    const statesName = e.target.value;

    setState({ ...state, isStateSelected: statesName });
    getCities(country.isCountrySelected, statesName)
      .then((res) => {
        console.log(res);
        setCity({ ...city, cities: res });
      })
      .catch((e) => console.error);
  };

  const handleCity = (e) => {
    e.preventDefault();
    const cityName = e.target.value;
    setCity({ ...city, isCitySelected: cityName });
  };

  console.log(city);

  return (
    <div className="container">
      <h1>Select Location</h1>
      <div className="input-container">
        <select onChange={handleCountry} value={country.isCountrySelected}>
          <option disabled value="">
            Select Country
          </option>
          {country.countries?.length > 0 &&
            country.countries?.map((countryItem) => (
              <option key={countryItem} value={countryItem}>
                {countryItem}
              </option>
            ))}
        </select>
        <select
          disabled={state.states.length < 1}
          onChange={handleStates}
          value={state.isStateSelected}
        >
          <option disabled value="">
            Select State
          </option>
          {state.states.length > 0 &&
            state.states.map((stateItem) => (
              <option key={stateItem} value={stateItem}>
                {stateItem}
              </option>
            ))}
        </select>
        <select
          disabled={city.cities.length < 1}
          onChange={handleCity}
          value={city.isCitySelected}
        >
          <option disabled value="">
            Select City
          </option>
          {city.cities.length > 0 &&
            city.cities.map((cityItem) => (
              <option key={cityItem} value={cityItem}>
                {cityItem}
              </option>
            ))}
        </select>
      </div>
      {city.isCitySelected !== "" && (
        <div>{`You selected ${city.isCitySelected}, ${state.isStateSelected}, ${country.isCountrySelected}`}</div>
      )}
    </div>
  );
};

export default App;
