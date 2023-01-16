import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="input">
          <input type="text" maxLength={1} />
          <input type="text" maxLength={1} />
          <input type="text" maxLength={1} />
          <input type="text" maxLength={1} />
          <input type="text" maxLength={1} />
          <input type='text' maxLength={1}/>
        </div>
        <div className="submit">
          <button className="btn">Verify</button>
        </div>
      </div>
    </div>
  );
}

export default App;
