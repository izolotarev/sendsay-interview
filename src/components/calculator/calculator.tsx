import { SyntheticEvent } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useAppDispatch } from '../../hooks/hooks';
import { moveElementInsideTheBoardAction, moveElementToAnotherBoardAction, removeElementAction, setCurrentBoardAction, setCurrentElementAction } from '../../store/actions/actions';
import { getCurBoard, getCurElement } from '../../store/reducers/boards/boards-selectors';
import { getCurrentOperand } from '../../store/reducers/calculator/calculator-selectors';
import { Board, BoardType, CalcElement, CalcElementType } from '../../types/types';
import DigitButton from '../digit-button/digit-button';
import EqualButton from '../equal-button/equal-button';
import OperationButton from '../operation-button/operation-button';

type CalculatorProps = {
  elements: CalcElementType[],
  board: BoardType
}

function Calculator({ elements, board }: CalculatorProps): JSX.Element {

  const dispatch = useAppDispatch();
  const curElement = useSelector(getCurElement);
  const curBoard = useSelector(getCurBoard);
  const currentOperand = useSelector(getCurrentOperand);

  const handleDragOver = (evt: React.DragEvent) => {
    evt.preventDefault();
  
    if (evt.target instanceof HTMLElement && evt.target.parentElement?.classList.contains('calculator__card')) {
      evt.target.parentElement.classList.add('calculator__card_highlighted');
    }
  }

  const handleDragLeave = (evt: React.DragEvent) => {
    if (evt.target instanceof HTMLElement && evt.target.parentElement?.classList.contains('calculator__card')) {
      evt.target.parentElement.classList.remove('calculator__card_highlighted');
    }
  }

  const handleDragStart = (evt: React.DragEvent, board: BoardType, elem: CalcElementType) => {    
    dispatch(setCurrentElementAction(elem));
    dispatch(setCurrentBoardAction(board));
  }

  const handleDrop = (evt: React.DragEvent, board: BoardType, elem: CalcElementType) => {
    evt.preventDefault();
    if (evt.target instanceof HTMLElement && evt.target.parentElement?.classList.contains('calculator__card')) {
      evt.target.parentElement.classList.remove('calculator__card_highlighted');
    }

    if (!curElement || !curElement.active) { return; }
    //if put element on itself
    if (elem.type === curElement.type) { return; }

    if (curBoard?.type === Board.Right && curElement?.type === CalcElement.Display) {
      toast.info("Display must be the first element!")
      return;
    }

    //if take elem from the left board and put to the right 
    if (curBoard?.type === Board.Left && board.type === Board.Right) {
      const indexTo = board.items.indexOf(elem);
      dispatch(moveElementToAnotherBoardAction(curElement, indexTo));
    }
    //if take elem from the right board and put to the right 
    if (curBoard?.type === Board.Right && board.type === Board.Right) {
      const indexFrom = curBoard.items.indexOf(curElement);
      const indexTo = curBoard.items.indexOf(elem);
      dispatch(moveElementInsideTheBoardAction(curElement, indexFrom, indexTo, false));
    }
    
  }

  const handleRemove = (evt: SyntheticEvent, elem: CalcElementType, board: BoardType) => {
    const index = board.items.indexOf(elem);
    dispatch(removeElementAction(index));
  }

  return (
    <div className="calculator calculator__wrapper">
      {
        // eslint-disable-next-line array-callback-return
        elements.map((elem) => {
          switch (elem.type) {
            case CalcElement.Display:
              return (
                <div 
                  className={`calculator__display-container calculator__card ${elem.active ? '' : 'calculator__card_not-active'}`}
                  draggable
                  onDragOver={(evt) => handleDragOver(evt)}
                  onDragLeave={(evt) => handleDragLeave(evt)}
                  onDragStart={(evt) => handleDragStart(evt, board, elem)}
                  onDrop={(evt) => handleDrop(evt, board, elem)}
                  onDoubleClick={(evt) => handleRemove(evt, elem, board)}
                  key={`${board.type} ${elem.type}`}
                >
                  <div className="calculator__display">{currentOperand || "0"}</div>
                </div>
              );
            case CalcElement.Operations:
              return (
                <div 
                  className={`calculator__operation-list calculator__card ${elem.active ? '' : 'calculator__card_not-active'}`}
                  draggable
                  onDragOver={(evt) => handleDragOver(evt)}
                  onDragLeave={(evt) => handleDragLeave(evt)}
                  onDragStart={(evt) => handleDragStart(evt, board, elem)}
                  onDrop={(evt) => handleDrop(evt, board, elem)}
                  onDoubleClick={(evt) => handleRemove(evt, elem, board)}
                  key={`${board.type} ${elem.type}`}
                >
                  <OperationButton operation="/"/>
                  <OperationButton operation="X"/>
                  <OperationButton operation="-"/>
                  <OperationButton operation="+"/>
                </div>
              );
            case CalcElement.Digits:
              return (
                <div 
                  className={`calculator__digits calculator__card ${elem.active ? '' : 'calculator__card_not-active'}`} 
                  draggable
                  onDragOver={(evt) => handleDragOver(evt)}
                  onDragLeave={(evt) => handleDragLeave(evt)}
                  onDragStart={(evt) => handleDragStart(evt, board, elem)}
                  onDrop={(evt) => handleDrop(evt, board, elem)}
                  onDoubleClick={(evt) => handleRemove(evt, elem, board)}
                  key={`${board.type} ${elem.type}`}
                >
                  <DigitButton digit="7"/>
                  <DigitButton digit="8"/>
                  <DigitButton digit="9"/>
                  <DigitButton digit="4"/>
                  <DigitButton digit="5"/>
                  <DigitButton digit="6"/>
                  <DigitButton digit="1"/>
                  <DigitButton digit="2"/>
                  <DigitButton digit="3"/>
                  <DigitButton digit="0"/>
                  <DigitButton digit=","/>
                </div>
              );
            case CalcElement.Equal:
              return (
                <div 
                  className={`calculator__card calculator__equal ${elem.active ? '' : 'calculator__card_not-active'}`} 
                  draggable
                  onDragOver={(evt) => handleDragOver(evt)}
                  onDragLeave={(evt) => handleDragLeave(evt)}
                  onDragStart={(evt) => handleDragStart(evt, board, elem)}
                  onDrop={(evt) => handleDrop(evt, board, elem)}
                  onDoubleClick={(evt) => handleRemove(evt, elem, board)}
                  key={`${board.type} ${elem.type}`}
                >
                  <EqualButton />
                </div>
              );
          }
        })
      }
    </div>
  )
}

export default Calculator;