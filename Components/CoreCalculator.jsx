import React, { useState } from 'react'
import DisplayScreen from './DisplayScreen'
import Numpad from './Numpad'
import { evaluate } from 'mathjs';
function CoreCalculator() {
    const [equation, setEquation] = useState("0")
    const [fakeEquation, setFakeEquation] = useState("0")
    if(equation === "NaN") {
      setEquation("Error")
      setFakeEquation("Error")
    } 
    const allClear = () => {
      setEquation("0");
      setFakeEquation("0");
    };
    const backspace = () => {
      const size = equation.length;
      const fakeSize = fakeEquation.length;
      if(size == 1) allClear();
      else {
        setEquation(equation.slice(0, size - 1));
        if(fakeEquation[fakeSize-1] !== ' ') setFakeEquation(fakeEquation.slice(0, fakeSize-1))
        else setFakeEquation(fakeEquation.slice(0, fakeSize-3))
      } 
    };
    const compute = () => {
      try {
        const raw = evaluate(equation); // type NUMBER
        const data = raw.toString(); // type STRING
        setEquation(data);
        setFakeEquation(data);
      } catch {
        (err) => {
          setEquation("Error");
          console.error(err);
        };
      }
    };
    const addOperator = (op) => {
      let fakeOp;
      fakeOp = op; 
      
      if(op === '*') fakeOp = '×'
      else if(op === '/') fakeOp = '÷'
      const size = equation.length
      const fakeSize = equation.length
      if(equation[size-1] === '+' || equation[size-1] === '-' || equation[size-1] === '*' || equation[size-1] === '/' || equation[size-1] === '%') {
        setEquation(equation.slice(0, size-1) + op)
        setFakeEquation(fakeEquation.slice(0, fakeSize-1) + ' ' + fakeOp + ' ')
      } else {
        setEquation(equation + op)
        setFakeEquation(fakeEquation + ' ' + fakeOp + ' ')
      }
    }
    const addOperant = (op) => {
      //  const op = e.target.innerText;
        if(equation === '0') {
          setEquation(op);
          setFakeEquation(op);
        } 
        else {
          setEquation(equation + op)
          setFakeEquation(fakeEquation + op)
        } 
    }
    const addDecimal = () => {
      const size = equation.length
      for(let i=size-1; i>=0; i--) {
        if(equation[i] === '.') return;
        else if(equation[i] === '+' || equation[i] === '-' || equation[i] === '*' || equation[i] === '/' || equation[i] === '%') {
          setEquation(equation + '.')
          setFakeEquation(fakeEquation + '.')
          return 
        }
      }
      setEquation(equation + '.')
      setFakeEquation(fakeEquation + '.')
    }
  return (
    <div className=" h-[80%] md:bg-gradient-to-t from-yellow-400 via-green-400 to-pink-400 lg:w-[30%] lg:h-[80%] lg:border-2 lg:shadow-lg lg:border-black relative rounded-[1.5rem]">
        <DisplayScreen  fakeEquation={fakeEquation} compute={compute} backspace={backspace} addOperator={addOperator} addOperant={addOperant} addDecimal={addDecimal} />
        <Numpad  compute={compute} backspace={backspace} allClear={allClear} addOperator={addOperator} addOperant={addOperant} addDecimal={addDecimal}/>
    </div>
  )
}

export default CoreCalculator
