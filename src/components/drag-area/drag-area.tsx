import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useAppDispatch } from '../../hooks/hooks';
import { moveElementToAnotherBoardAction } from '../../store/actions/actions';
import { getAppMode, getBoards, getCurElement } from '../../store/reducers/boards/boards-selectors';
import { AppMode, CalcElement } from '../../types/types';


function DragArea(): JSX.Element {

  const curElement = useSelector(getCurElement);
  const dispatch = useAppDispatch();
  const boards = useSelector(getBoards);
  const appMode = useSelector(getAppMode);

  const handleDragOver = (evt: React.DragEvent) => {
    evt.preventDefault();
    if (evt.target instanceof HTMLElement && evt.target.className === 'constructor__drag-area') {
      evt.target.style.backgroundColor = '#F0F9FF';
    }
  }

  const handleDragLeave = (evt: React.DragEvent) => {
    if (evt.target instanceof HTMLElement && evt.target.className === 'constructor__drag-area') {
      evt.target.style.backgroundColor = '#ffffff';
    }
  }
  
  const handleDrop = (evt: React.DragEvent) => {
    evt.preventDefault();
    if (evt.target instanceof HTMLElement && evt.target.className === 'constructor__drag-area') {
      evt.target.style.backgroundColor = '#ffffff';
    }

    if (appMode !== AppMode.Constructor) {
      toast.info("The application is in Runtime mode! Please switch to Constructor");
      return;
    }

    if (!curElement || !curElement.active) { return }
    if (boards[1].items.length === 0 && curElement.type !== CalcElement.Display) { 
      toast.info("Display must be the first element!");
      return; 
    }
    dispatch(moveElementToAnotherBoardAction(curElement, -1));
  }

  return (
    <div 
      className="constructor__drag-area"
      onDragOver={(evt) => handleDragOver(evt)}
      onDragLeave={(evt) => handleDragLeave(evt)}
      onDrop={(evt) => handleDrop(evt)}
    >
      <svg className="constructor__drag-here-img" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.7778 1V5.44444" stroke="black" strokeWidth="2" strokeLinecap="round"/>
        <path d="M21 3.22222L16.5556 3.22222" stroke="black" strokeWidth="2" strokeLinecap="round"/>
        <path d="M12.3889 3.22222H5C2.79086 3.22222 1 5.01309 1 7.22223V16.2778M18.7778 9.61111V17C18.7778 19.2091 16.9869 21 14.7778 21H5C2.79086 21 1 19.2091 1 17V16.2778M1 16.2778L4.83824 12.4395C6.40034 10.8774 8.93298 10.8774 10.4951 12.4395C11.8961 13.8406 13.5664 15.5108 14.8889 16.8333" stroke="black" strokeWidth="2" strokeLinecap="round"/>
        <path d="M18.7778 14.6111L18.2729 14.1062C16.7108 12.5441 14.1781 12.5441 12.616 14.1062L12.3889 14.3333" stroke="black" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="12.1111" cy="7.66667" r="0.555556" fill="black"/>
      </svg>
      <div className="constructor__drag-area-title">Перетащите сюда</div>
      <div className="constructor__drag-area-title-sec">любой элемент <br></br> из левой панели</div>
    </div>
  );
}

export default DragArea;