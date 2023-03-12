import { combineReducers } from '@reduxjs/toolkit';
import { boardsData } from './boards/boards-reducer';

export enum NameSpace {
  boards = 'BOARDS',
}

export const rootReducer = combineReducers({
  [NameSpace.boards]: boardsData,
});

export type RootState = ReturnType<typeof rootReducer>;