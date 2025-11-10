import { useEffect, useState } from "react";
import "./App.css";
function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const [darkMode, setDarkMode] = useState(true);
  const bgColor = darkMode ? "black" : "white";
  const textColor = darkMode ? "white" : "black";

  return (
    <>
      <div
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: bgColor,
          color: textColor,
          fontFamily: "arial",
          transition: "all 0.3s ease",
        }}
      >
        {/* dark mode switch */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          style={{ fontSize: "20px" }}
        >
          Switch to {darkMode ? "Light Mode" : "Dark Mode"}
        </button>

        {/* count viewer */}
        <div style={{ fontSize: "60px" }}>{count}</div>

        {/* step input */}
        <div>
          <input
            type="number"
            value={step}
            onChange={(e) => setStep(Number(e.target.value))}
          />
          <button
            onClick={() => {
              setCount(count - step);
              setStep("");
            }}
          >
            -
          </button>
          <button
            onClick={() => {
              setCount(count + step);
              setStep("");
            }}
          >
            +
          </button>
        </div>

        {/* increment or decrement by 1 */}
        <div style={{ display: "flex", gap: "10px" }}>
          <button
            onClick={() => setCount(count - 1)}
            style={{ fontSize: "20px" }}
          >
            Decrement by 1
          </button>
          <button
            onClick={() => setCount(count + 1)}
            style={{ fontSize: "20px" }}
          >
            Increment by 1
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
