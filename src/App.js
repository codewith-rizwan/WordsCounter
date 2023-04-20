import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);
  const [mainString, setMainString] = useState("");
  const [word, setWord] = useState("");

  const checkHandler = (e) => {
    e.preventDefault();
    let splittedArr = mainString.split(" ");
    let counting = 0;
    for (let i = 0; i < splittedArr.length; i++) {
      if (word === splittedArr[i]) {
        counting++;
      }
    }
    setCount(counting);
  };

  return (
    <div className="App">
      <form className="form-sty">
        <label>
          Name:
          <input
            type="text"
            value={mainString}
            className="form-control"
            onChange={(e) => {
              setMainString(e.target.value);
            }}
          />
        </label>
        <br />
        <br />
        <label>
          Word:
          <input
            className="form-control"
            value={word}
            onChange={(e) => setWord(e.target.value)}
          />
        </label>
        <br />
        <br />
        <button className="btn " onClick={(e) => checkHandler(e)}>
          Check
        </button>

        <p>{count}</p>
      </form>
    </div>
  );
}
