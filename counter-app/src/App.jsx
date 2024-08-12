import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div></div>
      <h1>Counter App</h1>
      <div className="card">
        <p>Count: {count}</p>
        <div className="button-container">
          <button onClick={() => setCount((count) => count + 1)}>
            Increment
          </button>
          <button onClick={() => setCount((count) => count - 1)}>
            Decrement
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
