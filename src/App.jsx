import React, { useState } from "react";
import "./Theme/styles.scss";

const App = () => {
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    setResult(result.concat(e.target.id));
  };

  const handleClear = () => {
    setResult("");
  };

  const deleteButton = () => {
    setResult(result.slice(0, -1));
  };

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult("Invalid");
    }
  };

  return (
    <>
      <h1>Calculadora</h1>

      <div className="container__calculator">
        <input type="text" value={result} />

        <div className="container__calculator__buttons">
          <button
            className="container__calculator__buttons__operator"
            onClick={handleClear}
          >
            AC
          </button>
          <button
            className="container__calculator__buttons__operator"
            onClick={deleteButton}
          >
            DE
          </button>
          <button
            id="."
            className="container__calculator__buttons__operator"
            onClick={handleClick}
          >
            .
          </button>
          <button
            id="/"
            className="container__calculator__buttons__operator"
            onClick={handleClick}
          >
            ÷
          </button>

          <button
            className="container__calculator__buttons__number"
            onClick={handleClick}
            id="7"
          >
            7
          </button>
          <button
            id="8"
            className="container__calculator__buttons__number"
            onClick={handleClick}
          >
            8
          </button>
          <button
            id="9"
            className="container__calculator__buttons__number"
            onClick={handleClick}
          >
            9
          </button>
          <button
            id="*"
            className="container__calculator__buttons__operator"
            onClick={handleClick}
          >
            *
          </button>

          <button
            id="4"
            className="container__calculator__buttons__number"
            onClick={handleClick}
          >
            4
          </button>
          <button
            id="5"
            className="container__calculator__buttons__number"
            onClick={handleClick}
          >
            5
          </button>
          <button
            id="6"
            className="container__calculator__buttons__number"
            onClick={handleClick}
          >
            6
          </button>
          <button
            id="-"
            className="container__calculator__buttons__operator"
            onClick={handleClick}
          >
            -
          </button>

          <button
            id="1"
            className="container__calculator__buttons__number"
            onClick={handleClick}
          >
            1
          </button>
          <button
            id="2"
            className="container__calculator__buttons__number"
            onClick={handleClick}
          >
            2
          </button>
          <button
            id="3"
            className="container__calculator__buttons__number"
            onClick={handleClick}
          >
            3
          </button>
          <button
            id="+"
            className="container__calculator__buttons__operator"
            onClick={handleClick}
          >
            +
          </button>

          <button
            id="00"
            className="container__calculator__buttons__number"
            onClick={handleClick}
          >
            00
          </button>
          <button
            id="0"
            className="container__calculator__buttons__number"
            onClick={handleClick}
          >
            0
          </button>
          <button
            className="container__calculator__buttons__operator__equal"
            onClick={calculate}
          >
            =
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
