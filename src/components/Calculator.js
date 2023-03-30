import React, { useState } from 'react';
import { number, MathOperators } from './buttons';
import calculate from '../logic/calculate';

function Calculator() {
  const [values, setValues] = useState({
    total: 0,
    next: '',
    operation: '',
  });

  const stateHandler = (e) => {
    setValues(calculate(values, e.target.textContent));
  };

  const NumberBtns = number.map((number) => (
    <button className="numberbtns" key={number} type="button" onClick={stateHandler}>{number}</button>
  ));

  const operatorBtns = MathOperators.map((operator) => (
    <button className="numberbtns operatorbtns" key={operator} type="button" onClick={stateHandler}>{operator}</button>
  ));

  return (
    <div className="calcy-container">
      <h2>Let&apos;s do some math!</h2>
      <div className="calcy-box">
        <div className="displayvalue">
          {values.total}
          {values.operation}
          {values.next}
        </div>
        <div className="Number_container">
          <div className="Number">
            {NumberBtns}
          </div>
          <div className="operators">
            {operatorBtns}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Calculator;
