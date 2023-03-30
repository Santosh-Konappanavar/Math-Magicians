const number = ['AC', '+/-', '%', 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, '.'];

const MathOperators = ['÷', 'x', '-', '+', '='];

const NumberBtns = number.map((number) => (
  <button className="numberbtns" key={number} type="button">{number}</button>
));

const operatorBtns = MathOperators.map((operator) => (
  <button className="numberbtns operatorbtns" key={operator} type="button">{operator}</button>
));

export { NumberBtns, operatorBtns };
