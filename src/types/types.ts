import { RootState } from '../store/reducers/root-reducer';
import { Action, ThunkAction } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';

export type State = RootState;

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Action>;

export enum Board {
  Left = 1,
  Right
}

export enum Element {
  Display = 1,
  Operations,
  Digits,
  Equal,
}
