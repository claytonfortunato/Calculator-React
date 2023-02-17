function App() {
  return (
    <>
      <h1>Calculadora</h1>

      <div className="container__calculator">
        <input type="text" />

        <div className="container__calculator__buttons">
          <button className="container__calculator__buttons__operator">
            AC
          </button>
          <button className="container__calculator__buttons__operator">
            DE
          </button>
          <button className="container__calculator__buttons__operator">
            .
          </button>
          <button className="container__calculator__buttons__operator">
            /
          </button>

          <button className="container__calculator__buttons__number">7</button>
          <button className="container__calculator__buttons__number">8</button>
          <button className="container__calculator__buttons__number">9</button>
          <button className="container__calculator__buttons__operator">
            *
          </button>

          <button className="container__calculator__buttons__number">4</button>
          <button className="container__calculator__buttons__number">5</button>
          <button className="container__calculator__buttons__number">6</button>
          <button className="container__calculator__buttons__operator">
            -
          </button>

          <button className="container__calculator__buttons__number">1</button>
          <button className="container__calculator__buttons__number">2</button>
          <button className="container__calculator__buttons__number">3</button>
          <button className="container__calculator__buttons__operator">
            +
          </button>

          <button className="container__calculator__buttons__number">00</button>
          <button className="container__calculator__buttons__number">0</button>
          <button className="container__calculator__buttons__operator">
            =
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
