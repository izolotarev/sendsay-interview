import { combineReducers } from '@reduxjs/toolkit';
import { boardsData } from './boards/boards-reducer';
import { calculatorsData } from './calculator/calculator-reducer';

export enum NameSpace {
  boards = 'BOARDS',
  calculator = 'CALCULATOR'
}

export const rootReducer = combineReducers({
  [NameSpace.boards]: boardsData,
  [NameSpace.calculator]: calculatorsData,
});

export type RootState = ReturnType<typeof rootReducer>;