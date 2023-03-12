import { createAction } from '@reduxjs/toolkit';
import { ActionType } from '../../const/conts';
import { BoardType, CalcElementType } from '../../types/types';


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