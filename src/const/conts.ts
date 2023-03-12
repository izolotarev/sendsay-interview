export enum ActionType {
  SetCurrentElement = 'BOARDS/SET_CURRENT_ELEMENT',
  SetCurrentBoard = 'BOARDS/SET_CURRENT_BOARD',
  MoveElementToAnotherBoard = 'BOARDS/MOVE_ELEMENT_TO_ANOTHER_BOARD',
  MoveElementInsideTheBoard = 'BOARDS/MOVE_ELEMENT_INSIDE_THE_BOARD',
  RemoveElement = 'BOARDS/REMOVE_ELEMENT',
  RedirectToRoute = 'USER/REDIRECT',
}

export const APIRoute = {
}

export const AppRoute = {
  ROOT: '/',
  NOT_FOUND: '/not-found',
}