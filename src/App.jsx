import "./App.css";
import LCM from "../src/components/LCM/LCM";
import HCF from "../src/components/HCF/HCF";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "HCF_LCM Calculator";
  }, []);
  const navigate = useNavigate();
  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={
            <div className="home_wrapper">
              <div className="header">
                <h1>
                  HCF / LCM  <br />
                  Calculator
                </h1>
              </div>
              <button onClick={() => navigate("/hcf")}>Calculate HCF</button>
              <button onClick={() => navigate("/lcm")}>Calculate LCM</button>
            </div>
          }
        ></Route>
        <Route path="/hcf" element={<HCF />} />
        <Route path="/lcm" element={<LCM />} />
      </Routes>
    </div>
  );
}

export default App;
