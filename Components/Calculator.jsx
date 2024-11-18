import React from "react";
import CoreCalculator from "./CoreCalculator";
import TopHeading from "./TopHeading";
function Calculator() {
  return (
    <div className="w-screen h-screen bg-gradient-to-t  md:from-slate-700 md:via-gray-700 md:to-gray-800 from-yellow-400 via-green-400 to-pink-400 flex flex-col justify-center items-center relative">
      <TopHeading/>
      <CoreCalculator />
    </div>
  );
}

export default Calculator;
