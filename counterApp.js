import "./App.css";
import { useState } from "react";
import Switch from "react-switch";

function App() {
  const [count, setCount] = useState(0);
  const [checked, setChecked] = useState(false);

  console.log("checked", checked);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };
  return (
    <div
      className="container"
      style={{ backgroundColor: checked ? "black" : "white" }}
    >
      <h1
        className="heading"
        style={{ color: checked ? "white" : "black" }}
      >{`Count: ${count}`}</h1>
      <Switch onChange={handleChange} checked={checked} />
      <div className="button-container">
        <button
          className="button increment"
          onClick={() => setCount((prev) => prev + 1)}
        >
          Increment
        </button>
        <button
          className="button decrement"
          onClick={() => setCount((prev) => prev - 1)}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
