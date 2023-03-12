import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useAppDispatch } from '../../hooks/hooks';
import { moveElementInsideTheBoardAction, moveElementToAnotherBoardAction, setCurrentBoardAction, setCurrentElementAction } from '../../store/actions/actions';
import { getCurBoard, getCurElement } from '../../store/reducers/boards/boards-selectors';
import { Board, BoardType, CalcElement, CalcElementType } from '../../types/types';

type CalculatorProps = {
  elements: CalcElementType[],
  board: BoardType
}

function Calculator({ elements, board }: CalculatorProps): JSX.Element {

  const dispatch = useAppDispatch();
  const curElement = useSelector(getCurElement);
  const curBoard = useSelector(getCurBoard);

  const handleDragOver = (evt: React.DragEvent, board: BoardType, elem: CalcElementType) => {
    evt.preventDefault();
  
    if (evt.target instanceof HTMLElement && evt.target.parentElement?.classList.contains('calculator__card')) {
      evt.target.parentElement.classList.add('calculator__card_highlighted');
    }
  }

  const handleDragLeave = (evt: React.DragEvent, board: BoardType, elem: CalcElementType) => {
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
                  onDragOver={(evt) => handleDragOver(evt, board, elem)}
                  onDragLeave={(evt) => handleDragLeave(evt, board, elem)}
                  onDragStart={(evt) => handleDragStart(evt, board, elem)}
                  onDrop={(evt) => handleDrop(evt, board, elem)}
                  key={`${board.type} ${elem.type}`}
                >
                  <div className="calculator__display">0</div>
                </div>
              );
            case CalcElement.Operations:
              return (
                <div 
                  className={`calculator__operation-list calculator__card ${elem.active ? '' : 'calculator__card_not-active'}`}
                  draggable
                  onDragOver={(evt) => handleDragOver(evt, board, elem)}
                  onDragLeave={(evt) => handleDragLeave(evt, board, elem)}
                  onDragStart={(evt) => handleDragStart(evt, board, elem)}
                  onDrop={(evt) => handleDrop(evt, board, elem)}
                  key={`${board.type} ${elem.type}`}
                >
                  <button className="calculator__button">/</button>
                  <button className="calculator__button">X</button>
                  <button className="calculator__button">-</button>
                  <button className="calculator__button">+</button>
                </div>
              );
            case CalcElement.Digits:
              return (
                <div 
                  className={`calculator__digits calculator__card ${elem.active ? '' : 'calculator__card_not-active'}`} 
                  draggable
                  onDragOver={(evt) => handleDragOver(evt, board, elem)}
                  onDragLeave={(evt) => handleDragLeave(evt, board, elem)}
                  onDragStart={(evt) => handleDragStart(evt, board, elem)}
                  onDrop={(evt) => handleDrop(evt, board, elem)}
                  key={`${board.type} ${elem.type}`}
                >
                  <button className="calculator__button">7</button>
                  <button className="calculator__button">8</button>
                  <button className="calculator__button">9</button>
                  <button className="calculator__button">4</button>
                  <button className="calculator__button">5</button>
                  <button className="calculator__button">6</button>
                  <button className="calculator__button">1</button>
                  <button className="calculator__button">2</button>
                  <button className="calculator__button">3</button>
                  <button className="calculator__button">0</button>
                  <button className="calculator__button">,</button>
                </div>
              );
            case CalcElement.Equal:
              return (
                <div 
                  className={`calculator__card calculator__equal ${elem.active ? '' : 'calculator__card_not-active'}`} 
                  draggable
                  onDragOver={(evt) => handleDragOver(evt, board, elem)}
                  onDragLeave={(evt) => handleDragLeave(evt, board, elem)}
                  onDragStart={(evt) => handleDragStart(evt, board, elem)}
                  onDrop={(evt) => handleDrop(evt, board, elem)}
                  key={`${board.type} ${elem.type}`}
                >
                  <button className="calculator__button">=</button>
                </div>
              );
          }
        })
      }
    </div>
  )
}

export default Calculator;