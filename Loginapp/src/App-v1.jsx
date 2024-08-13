import { useState } from "react";

import "./App.css";

const App = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
  const [invalidUser, setInvalidUser] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (username === "user" && password === "password") {
      setUser("Welcome, user!");
      setInvalidUser("");
    } else {
      setUser("");
      setInvalidUser("Invalid username or password");
    }
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
              value={username}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="text"
              placeholder="password"
              required
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
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
