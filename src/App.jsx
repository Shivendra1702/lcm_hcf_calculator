import "./App.css";
import LCM from "../src/components/LCM/LCM";
import HCF from "../src/components/HCF/HCF";
import { Routes, Route, useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={
            <div className="home_wrapper">
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
