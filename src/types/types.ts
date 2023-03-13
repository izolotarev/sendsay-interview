import { RootState } from '../store/reducers/root-reducer';
import { Action, ThunkAction } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';

export type State = RootState;

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Action>;

export enum Board {
  Left = 1,
  Right
}

export enum CalcElement {
  Display = 1,
  Operations,
  Digits,
  Equal
}

export enum AppMode {
  Constructor,
  Runtime
}

export enum CalcButton {
  Operation,
  Digit,
  Equal
}

export type CalcElementType = {
  type: CalcElement,
  active: boolean,
}

export type BoardType = {
  type: Board,
  items: CalcElementType[]
}

export type BoardsState = {
  boards: BoardType[],
  currentElement?: CalcElementType,
  currentBoard?: BoardType,
  appMode: AppMode,
}

export type CalculatorState = {
  previousOperand?: string;
  currentOperand?: string;
  operation?: string;
}

