import { Board, BoardsState, CalcElement } from '../../../types/types';
import { createReducer } from '@reduxjs/toolkit';
import { moveElementInsideTheBoardAction, moveElementToAnotherBoardAction, removeElementAction, setCurrentBoardAction, setCurrentElementAction } from '../../actions/actions';

export const initialState: BoardsState = {
  boards: [
    {
      type: Board.Left, 
      items: [
        { type: CalcElement.Display, active: true },
        { type: CalcElement.Operations, active: true },
        { type: CalcElement.Digits, active: true },
        { type: CalcElement.Equal, active: true },
      ]
    },
    {
      type: Board.Right,
      items: []
    }
  ],
  currentElement: undefined,
  currentBoard: undefined,
}

export const boardsData = createReducer(initialState, (builder) => {
  builder
    .addCase(setCurrentElementAction, (state, action) => {
      state.currentElement = action.payload.curElement;
    })
    .addCase(setCurrentBoardAction, (state, action) => {
      state.currentBoard = action.payload.curBoard;
    })
    .addCase(moveElementToAnotherBoardAction, (state, action) => {
      const { elem, indexTo } = action.payload;
      const items = state.boards[1].items;
      items.splice(indexTo + 1, 0, elem);

      //mark element as not active
      state.boards[0].items.forEach((item) => {
        if (item.type === action.payload.elem.type) {
          item.active = false;
        }
      });
    })
    .addCase(moveElementInsideTheBoardAction, (state, action) => {
      const { elem, indexFrom, indexTo } = action.payload;
      const items = state.boards[1].items;
      //remove elem
      items.splice(indexFrom, 1);
      //insert
      if (indexTo > indexFrom) { 
        items.splice(indexTo, 0, elem);
        return;
      }
      items.splice(indexTo + 1, 0, elem);
    })
    .addCase(removeElementAction, (state, action) => {
      state.boards[1].items.splice(action.payload.index, 1);
    });
});