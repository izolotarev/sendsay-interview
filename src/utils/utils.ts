import { CalculatorState } from '../types/types';

export const calculate = ({ currentOperand, previousOperand, operation }: CalculatorState) => {
  if (!previousOperand || !currentOperand) { return ""; }
  const prev = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);

  if (isNaN(prev) || isNaN(current)) return ""

  let result;
  switch (operation) {
    case "+":
      result = prev + current;
      break;
    case "-":
      result = prev - current;
      break;
    case "X":
      result = prev * current;
      break;
    case "/":
      result = prev / current;
      break;
  }

  return result?.toFixed(5).toString();
}