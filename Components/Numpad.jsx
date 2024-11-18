import React from "react";
function Numpad({
   compute,
  backspace,
  allClear,
  addOperant,
  addOperator,
  addDecimal,
}) {
 
  return (
    <div
      className="h-[75%] w-full 
        text-white px-8 py-4 grid grid-cols-4 grid-rows-5 place-items-center"
    >
      <button
        onClick={allClear}
        className="h-[65%] w-[80%] 
          
          bg-orange-200 rounded-full  text-black font-bold text-2xl hover:bg-purple-500 hover:text-white"
      >
        AC
      </button>
      <button
        onClick={backspace}
        className="h-[65%] w-[80%] bg-orange-200 rounded-full  text-black font-bold text-2xl hover:bg-purple-500 hover:text-white"
      >
        DEL
      </button>
      <button
        onClick={() => addOperator("%")}
        className="h-[65%] w-[80%] bg-orange-200 rounded-full  text-black font-bold text-2xl hover:bg-purple-500 hover:text-white"
      >
        %
      </button>
      <button
        onClick={() => addOperator("/")}
        className="h-[65%] w-[80%] bg-orange-400 rounded-full  font-bold text-4xl hover:bg-purple-500"
      >
        ÷
      </button>
      <button
        onClick={() => addOperant("7")}
        className="h-[65%] w-[80%] bg-white rounded-full  text-black font-bold text-2xl hover:bg-purple-500 hover:text-white"
      >
        7
      </button>
      <button
        onClick={() => addOperant("8")}
        className="h-[65%] w-[80%] bg-white rounded-full  text-black font-bold text-2xl hover:bg-purple-500 hover:text-white"
      >
        8
      </button>
      <button
        onClick={() => addOperant("9")}
        className="h-[65%] w-[80%] bg-white rounded-full  text-black font-bold text-2xl hover:bg-purple-500 hover:text-white"
      >
        9
      </button>
      <button
        onClick={() => addOperator("*")}
        className="h-[65%] w-[80%] bg-orange-400 rounded-full font-bold text-4xl hover:bg-purple-500 hover:text-white"
      >
        ×
      </button>
      <button
        onClick={() => addOperant("4")}
        className="h-[65%] w-[80%] bg-white rounded-full  text-black font-bold text-2xl hover:bg-purple-500 hover:text-white"
      >
        4
      </button>
      <button
        onClick={() => addOperant("5")}
        className="h-[65%] w-[80%] bg-white rounded-full  text-black font-bold text-2xl hover:bg-purple-500 hover:text-white"
      >
        5
      </button>
      <button
        onClick={() => addOperant("6")}
        className="h-[65%] w-[80%] bg-white rounded-full  text-black font-bold text-2xl hover:bg-purple-500 hover:text-white"
      >
        6
      </button>
      <button
        onClick={() => addOperator("-")}
        className="h-[65%] w-[80%] bg-orange-400 rounded-full   font-bold text-4xl hover:bg-purple-500 hover:text-white"
      >
        -
      </button>
      <button
        onClick={() => addOperant("1")}
        className="h-[65%] w-[80%] bg-white rounded-full  text-black font-bold text-2xl hover:bg-purple-500 hover:text-white"
      >
        1
      </button>
      <button
        onClick={() => addOperant("2")}
        className="h-[65%] w-[80%] bg-white rounded-full  text-black font-bold text-2xl hover:bg-purple-500 hover:text-white"
      >
        2
      </button>
      <button
        onClick={() => addOperant("3")}
        className="h-[65%] w-[80%] bg-white rounded-full  text-black font-bold text-2xl hover:bg-purple-500 hover:text-white"
      >
        3
      </button>
      <button
        onClick={() => addOperator("+")}
        className="h-[65%] w-[80%] bg-orange-400 rounded-full   font-bold text-4xl hover:bg-purple-500 hover:text-white"
      >
        +
      </button>
      <button
        onClick={() => addOperant("0")}
        className="h-[65%] w-[80%] bg-white rounded-full ] text-black font-bold text-2xl col-span-2 hover:bg-purple-500 hover:text-white"
      >
        0
      </button>
      <button
        onClick={addDecimal}
        className="h-[65%] w-[80%] bg-white rounded-full  text-black font-bold text-2xl hover:bg-purple-500 hover:text-white"
      >
        .
      </button>
      <button
        onClick={compute}
        className="h-[65%] w-[80%] bg-orange-400 rounded-full font-bold text-4xl hover:bg-green-700 hover:text-white"
      >
        =
      </button>
    </div>
  );
}

export default Numpad;
