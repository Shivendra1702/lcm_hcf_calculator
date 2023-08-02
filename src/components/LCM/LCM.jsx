// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const LCM = () => {
  useEffect(() => {
    document.title = "LCM Calculator";
  }, []);

  const navigate = useNavigate();
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

    let primeNo = [];
    for (let i = 2; i <= max; i++) {
      let count = 0;
      for (let j = 1; j <= max; j++) if (i % j == 0) count++;

      if (count == 2) primeNo.push(i);
    }

    let ans = [];
    for (let i = 0; i < primeNo.length; ) {
      let temp = [];
      let flag = 0;
      for (let j = 0; j < nums.length; j++) {
        if (nums[j] % primeNo[i] == 0) {
          temp.push(nums[j] / primeNo[i]);
          flag++;
        } else temp.push(nums[j]);
      }

      if (flag > 0) ans.push(primeNo[i]);

      console.log("temp: ", temp);
      let temp_count = 0;
      for (let k = 0; k < temp.length; k++) {
        if (temp[k] == 1) temp_count++;
      }
      if (temp_count == temp.length) break;
      nums = temp;
      if (flag == 0) i++;
    }

    let lcm = 1;

    for (let i = 0; i < ans.length; i++) {
      lcm *= ans[i];
    }
    // console.log(ans);

    setOutput(lcm);
  };

  const handleChange = (e) => {
    if (
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+<>?-=:;,/\\|{}[]`~./'".includes(
        e.target.value[e.target.value.length - 1]
      )
    ) {
      return;
    }
    setOutput("");
    setInput(e.target.value);
  };

  return (
    <div className="main">
      <div className="header">
        <button className="b_b" onClick={() => navigate("/")}>
          <BiArrowBack />
        </button>
        <h1>LCM calculator</h1>
      </div>

      <div className="form">
        <span>Enter Space Separated Numbers </span>
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
