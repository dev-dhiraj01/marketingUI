import React, { useState } from "react";

const Section2 = () => {

  const [num, setNum] = useState(0);

  const changeNum = () => {

    setNum((prev) => {
      console.log(prev + 1);
      return prev + 1;
    });
  };

  return (
    <div className="h-screen w-full bg-gray-950">
      <input
        className="h-10 w-30 bg-white m-10"
        type="text"
        onChange={(e) => console.log(e.target.value)}
        placeholder="Enter Data"
      />

      <div>
        <h1>The Value of Num is {num}</h1>
        <button onClick={changeNum}>click me</button>
        <div className="div1"></div>
        <div className="div2"></div>
        <div className="div3"></div>
      </div>
    </div>
  );
};

export default Section2;
