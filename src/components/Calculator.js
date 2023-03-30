import React from 'react';
import { NumberBtns, operatorBtns } from './buttons';

function Calculator() {
  return (
    <div className="calcy-container">
      <h2>Let&apos;s do some math!</h2>
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
