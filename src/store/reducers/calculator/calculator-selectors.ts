import { State } from '../../../types/types';
import { NameSpace } from '../root-reducer';

export const getCurrentOperand = (state: State): string | undefined => state[NameSpace.calculator].currentOperand;