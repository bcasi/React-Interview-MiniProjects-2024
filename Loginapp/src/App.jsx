import { useState } from "react";

import "./App.css";
/**Industry Standard code- v2*/
const App = () => {
  const [obj, setObj] = useState({});
  const [user, setUser] = useState("");
  const [invalidUser, setInvalidUser] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const { username, password } = obj;

    if (username === "user" && password === "password") {
      setUser("Welcome, user!");
      setInvalidUser("");
    } else {
      setUser("");
      setInvalidUser("Invalid username or password");
    }
  }
  function changeHandler(e) {
    e.preventDefault();
    /**Industry Standard code*/
    const { name, value } = e.target;
    const inputData = { ...obj, [name]: value };
    setObj(inputData);
  }

  return (
    <div className="App">
      <h1>Login Page</h1>
      {user === "" ? (
        <form className="form-container" onSubmit={handleSubmit}>
          {invalidUser && <span>{invalidUser}</span>}
          <div>
            <label>Username:</label>
            <input
              type="text"
              placeholder="username"
              required
              name="username" /**Industry Standard code*/
              onChange={changeHandler}
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              placeholder="password"
              required
              name="password" /**Industry Standard code*/
              onChange={changeHandler}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>{user}</div>
      )}
    </div>
  );
};

export default App;
