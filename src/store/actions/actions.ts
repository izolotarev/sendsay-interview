import { createAction } from '@reduxjs/toolkit';
import { ActionType } from '../../const/conts';
import { AppMode, BoardType, CalcElementType } from '../../types/types';


export const setCurrentElementAction = createAction(
  ActionType.SetCurrentElement,
  (curElement: CalcElementType) => ({
    payload: {
      curElement
    }
  })
);

export const setCurrentBoardAction = createAction(
  ActionType.SetCurrentBoard,
  (curBoard: BoardType) => ({
    payload: {
      curBoard
    }
  })
);

export const moveElementToAnotherBoardAction = createAction(
  ActionType.MoveElementToAnotherBoard,
  (elem: CalcElementType, indexTo) => ({
    payload: {
      elem,
      indexTo
    }
  })
)

export const moveElementInsideTheBoardAction = createAction(
  ActionType.MoveElementInsideTheBoard,
  (elem: CalcElementType, indexFrom: number, indexTo: number, removeFromSource: boolean) => ({
    payload: {
      elem,
      indexFrom,
      indexTo,
      removeFromSource,
    }
  })
)

export const removeElementAction = createAction(
  ActionType.RemoveElement,
  (index: number) => ({
    payload: {
      index,
    }
  })
)

export const addDigitAction = createAction(
  ActionType.AddDigit,
  (digit: string) => ({
    payload: {
      digit
    }
  })
)

export const chooseOperationAction = createAction(
  ActionType.ChooseOperation,
  (operation: string) => ({
    payload: {
      operation
    }
  })
)

export const calculateAction = createAction(
  ActionType.Calculate
)

export const changeAppModeAction = createAction(
  ActionType.ChangeAppMode,
  (mode: AppMode) => ({
    payload: {
      mode
    }
  })
)