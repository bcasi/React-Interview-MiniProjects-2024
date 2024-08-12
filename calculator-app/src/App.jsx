import { useState } from "react";

import "./App.css";
import Button from "./Button";

const elements = [7, 8, 9, "+", 4, 5, 6, "-", 1, 2, 3, "*", "C", 0, "=", "/"];

function App() {
  const [inputData, setInputData] = useState("");
  const [result, setResult] = useState(null);

  const clickCorEquals = (val) => /[C=]/.test(val);

  function bodmas(string) {
    let strArr = [];
    let j = 0;

    while (j < string.length) {
      let isNumber = Number(string[j]);
      if (isNaN(isNumber)) {
        strArr.push(string[j]);
      } else {
        let numOnly = "";
        for (let i = j; i < string.length; i++) {
          let isNum = Number(string[i]);
          if (!isNaN(isNum)) {
            numOnly += string[i];
            j = i;
          } else {
            break;
          }
        }
        strArr.push(numOnly);
      }
      j++;
    }

    while (strArr.length > 1) {
      for (let i = 0; i < strArr.length; i++) {
        if (strArr[i] === "/") {
          let div = Number(strArr[i - 1] / strArr[i + 1]);
          strArr.splice(i - 1, 3, div);
        }
      }

      for (let i = 0; i < strArr.length; i++) {
        if (strArr[i] === "*") {
          let multipli = Number(strArr[i - 1] * strArr[i + 1]);
          strArr.splice(i - 1, 3, multipli);
        }
      }

      for (let i = 0; i < strArr.length; i++) {
        if (strArr[i] === "+") {
          let add = Number(strArr[i - 1]) + Number(strArr[i + 1]);
          strArr.splice(i - 1, 3, add);
        }
      }

      for (let i = 0; i < strArr.length; i++) {
        if (strArr[i] === "-") {
          let minus = Number(strArr[i - 1] - strArr[i + 1]);
          strArr.splice(i - 1, 3, minus);
        }
      }
    }

    return strArr[0];
  }

  function handleNum(value) {
    const val = value;

    if (clickCorEquals(val)) {
      if (value === "C") {
        setInputData("");
        setResult(null);
      }
      if (value === "=") {
        if (inputData !== "") {
          let calc = bodmas(inputData);
          setResult(calc);
        } else {
          setResult("Error");
        }
      }
    } else {
      setInputData((prev) => prev + val);
    }
  }

  return (
    <div className="container">
      <h1 className="title">React Calculator </h1>
      <input type="text" value={inputData} readOnly />
      <div className="result-demo">{result}</div>
      <div className="button-container">
        {elements.map((ele) => {
          return (
            <Button onClick={handleNum} val={ele} key={ele}>
              {ele}
            </Button>
          );
        })}
      </div>
    </div>
  );
}

export default App;
