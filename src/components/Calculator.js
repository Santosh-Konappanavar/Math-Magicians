import React from 'react';
import { NumberBtns, operatorBtns } from './buttons';

function Calculator() {
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
