import React from "react";
function DisplayScreen({
  
  fakeEquation,
  compute,
  backspace,
  addOperant,
  addOperator,
  addDecimal,
}) {
  const isValid = (key) => {
    const validkeys = [ "(", ")", "0", "1", "2", "3","4", "5","6", "7","8", "9", "+", "-","*", "/", "%",".", "=", "Enter", "Backspace"];
    const size = validkeys.length;
    for(let i=0; i<size; i++) {
        if(validkeys[i] === key) {
          if(i >= 0 && i <= 11) return 'digit'
          else if(i >=12 && i<= 16) return 'operator'
          else if(i === 17) return 'decimal'
          else if(i === 18 || i=== 19) return 'calculate'
          else if(i === 20) return 'backspace'
        }
    }
  return 'false';
  }
  const handleKeyPress = (e) => {
    const response = isValid(e.key); 
    if(response === 'digit') addOperant(e.key);
    else if(response === 'operator') addOperator(e.key);
    else if(response === 'decimal') addDecimal();
    else if(response === 'calculate') compute();
    else if(response === 'backspace') backspace();
    else {};
  }

  return (
    <div className="h-[25%] w-full flex items-end justify-end">
      <input
        type="text"
        className="bg-transparent text-white outline-none px-12 text-right text-5xl w-full overflow-scroll"
        value={fakeEquation}
        onKeyDown={handleKeyPress}
      />
    </div>
  );
}

export default DisplayScreen;
