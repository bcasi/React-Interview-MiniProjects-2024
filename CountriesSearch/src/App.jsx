import { useEffect, useState } from "react";
import "./App.css";
import Searchbar from "./components/Searchbar";
import Header from "./components/Header";
import FlagCard from "./components/FlagCard";
import Country from "./components/Country";
//countries search
const App = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");

  async function getAllCountries() {
    try {
      const res = await fetch("https://restcountries.com/v3.1/all");
      const countryData = await res.json();
      let data = [];
      countryData.forEach((item, index) => {
        let obj = {
          name: item.name.common,
          index: index,
          flag: item.flags.png,
        };

        data.push(obj);
      });
      if (data.length > 0) setCountries(data);
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    getAllCountries();
  }, []);

  function handleSearch(e) {
    const val = e.target.value;
    setSearch(val);
    if (val.length >= 3) {
      const filteredCountries = countries.filter((item) => {
        return item.name.toLowerCase().includes(val.toLowerCase());
      });
      setCountries(filteredCountries);
    } else {
      getAllCountries();
    }
  }

  return (
    <div className="container">
      <div className="wrapper">
        <Header>
          <Searchbar
            placeholder="Search for countries"
            val={search}
            change={handleSearch}
          />
        </Header>
        <div className="main">
          <Country
            data={countries}
            render={(item) => {
              return <FlagCard key={item.index} item={item} />;
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
