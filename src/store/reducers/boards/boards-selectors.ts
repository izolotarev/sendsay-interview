import { AppMode, BoardType, CalcElementType, State } from '../../../types/types';
import { NameSpace } from '../root-reducer';

export const getBoards = (state: State): BoardType[] => state[NameSpace.boards].boards;
export const getCurElement = (state: State): CalcElementType | undefined => state[NameSpace.boards].currentElement;
export const getCurBoard = (state: State): BoardType | undefined => state[NameSpace.boards].currentBoard;
export const getAppMode = (state: State): AppMode => state[NameSpace.boards].appMode;