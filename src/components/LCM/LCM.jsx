// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { AiFillDelete } from "react-icons/ai";

const LCM = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const calculateLcm = () => {
    let nums = input.split(" ");
    nums = nums.map((num) => parseInt(num));
    nums.sort((a, b) => a - b);

    if (nums.length == 1) {
      setOutput("Enter two or more values !!");
      return;
    }

    let ind = nums.length - 1;
    while (isNaN(nums[ind])) {
      nums.pop();
      ind--;
    }

    for (let i = 0; i < nums.length; i++) {
      if (nums[i] == 0) {
        setOutput("LCM of Zero does not exist !! please remove zero . ");
        return;
      }
    }

    let max = nums[nums.length - 1];

    setOutput(max);
  };

  const handleChange = (e) => {
    setOutput("");
    setInput(e.target.value);
  };

  return (
    <div className="main">
      <div className="header">
        <h1>LCM calculator</h1>
      </div>

      <div className="form">
        <input
          type="text"
          value={input}
          onChange={handleChange}
          placeholder="Enter Numbers ..."
        />
        <div className="btns">
          <button
            onClick={calculateLcm}
            disabled={input.length > 0 ? false : true}
          >
            Calculate
          </button>
          <button
            className="clrbtn"
            onClick={() => {
              setInput("");
              setOutput("");
            }}
          >
            <AiFillDelete />
          </button>
        </div>
      </div>
      {
        <div className={`op ${output ? "visible" : "notVisible"}`}>
          <h2>
            <span>LCM</span> : {output}
          </h2>
        </div>
      }
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default LCM;
