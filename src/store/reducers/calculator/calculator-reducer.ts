import { createReducer } from '@reduxjs/toolkit';
import { CalculatorState } from '../../../types/types';
import { calculate } from '../../../utils/utils';
import { addDigitAction, calculateAction, chooseOperationAction } from '../../actions/actions';


export const initialState: CalculatorState = {
  previousOperand: undefined,
  currentOperand: undefined,
  operation: undefined,
}

export const calculatorsData = createReducer(initialState, (builder) => {
  builder
    .addCase(addDigitAction, (state, action) => {
      if (action.payload.digit === "0" && state.currentOperand === "0") return state;
      if (action.payload.digit === "," && state.currentOperand?.includes(",")) return state;

      state.currentOperand = `${state.currentOperand || ""}${action.payload.digit}`;
    })
    .addCase(chooseOperationAction, (state, action) => {
      if (!state.currentOperand && !state.previousOperand) {
        return state;
      }

      if (!state.currentOperand) {
        state.operation = action.payload.operation;
        return state;
      }

      if (!state.previousOperand) {
        state.operation = action.payload.operation;
        state.previousOperand = state.currentOperand;
        state.currentOperand = undefined;
        return state;
      }
      state.previousOperand = calculate(state);
      state.operation = action.payload.operation;
      state.currentOperand = undefined;
      return state;
    })
    .addCase(calculateAction, (state, action) => {
      if (
        !state.operation ||
        !state.currentOperand ||
        !state.previousOperand
      ) {
        return state;
      }

      state.currentOperand = calculate(state);
      state.operation = undefined;
      state.previousOperand = undefined;
    });
})