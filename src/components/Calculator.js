import React from 'react';

function Calculator() {
  const numbers = ['AC', '+/-', '%', 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, '.'];

  const MathOperators = ['÷', 'x', '-', '+', '='];

  const NumberBtns = numbers.map((number) => (
    <button className="numberbtns" key={number} type="button">{number}</button>
  ));

  const operatorBtns = MathOperators.map((operator) => (
    <button className="numberbtns operatorbtns" key={operator} type="button">{operator}</button>
  ));

  return (
    <div className="calcy-container">
      <div className="calcy-box">
        <div className="displayvalue">0</div>
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
