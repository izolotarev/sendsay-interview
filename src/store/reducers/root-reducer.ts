import { combineReducers } from '@reduxjs/toolkit';

export enum NameSpace {
  
}

export const rootReducer = combineReducers({
});

export type RootState = ReturnType<typeof rootReducer>;