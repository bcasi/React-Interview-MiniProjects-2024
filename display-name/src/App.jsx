import { useState } from "react";
import "./App.css";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");

  // function startsWithLetter(str) {
  //   return /^[a-zA-Z]+$/.test(str);
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName !== "" && lastName !== "") {
      let name = firstName + " " + lastName;
      setFullName(name);
    } else {
      setFullName("");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="form-container">
        <h1 className="title">Full Name Display</h1>
        <div className="input-container">
          <label>First Name :</label>
          <input
            required
            type="text"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
        </div>
        <div className="input-container">
          <label>Last Name :</label>
          <input
            required
            type="text"
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {fullName && <p>Full Name: {fullName}</p>}
    </>
  );
}

export default App;
