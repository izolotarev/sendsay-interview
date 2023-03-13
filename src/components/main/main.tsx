import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../hooks/hooks';
import { changeAppModeAction } from '../../store/actions/actions';
import { getBoards } from '../../store/reducers/boards/boards-selectors';
import { AppMode } from '../../types/types';
import Calculator from '../calculator/calculator';
import DragArea from '../drag-area/drag-area';

function Main() {
  const boards = useSelector(getBoards);
  const dispatch = useAppDispatch();

  const handleChangeAppMode = (evt: React.SyntheticEvent) => {
    if (evt.target instanceof HTMLInputElement) {
      switch (evt.target.value) {
        case 'runtime':
          dispatch(changeAppModeAction(AppMode.Runtime));
          break;
        case 'constructor':
          dispatch(changeAppModeAction(AppMode.Constructor));
          break;
      }
    }
  }

  return (
    <div className="constructor">
      <div className="wrapper">
        <div className="constructor__toggle">
          <fieldset className="toggle">  
            <input className="toggle__first" type="radio" id="toggle-off" name="toggle" value="runtime"  onChange={handleChangeAppMode} />
            <label htmlFor="toggle-off">
              <div className="toggle__container">
                <svg className="icon-mode" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.7678 11.7678C12.2366 11.2989 12.5 10.663 12.5 10C12.5 9.33696 12.2366 8.70107 11.7678 8.23223C11.2989 7.76339 10.663 7.5 10 7.5C9.33696 7.5 8.70107 7.76339 8.23223 8.23223C7.76339 8.70107 7.5 9.33696 7.5 10C7.5 10.663 7.76339 11.2989 8.23223 11.7678C8.70107 12.2366 9.33696 12.5 10 12.5C10.663 12.5 11.2989 12.2366 11.7678 11.7678Z" stroke="#4D5562" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2.04834 9.99999C3.11001 6.61916 6.26917 4.16666 10 4.16666C13.7317 4.16666 16.89 6.61916 17.9517 9.99999C16.89 13.3808 13.7317 15.8333 10 15.8333C6.26917 15.8333 3.11001 13.3808 2.04834 9.99999Z" stroke="#4D5562" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="toggle__text">Runtime</span>
              </div>
            </label>
            
            <input className="toggle__second" type="radio" id="toggle-on" name="toggle" value="constructor" defaultChecked onChange={handleChangeAppMode}/>
            <label htmlFor="toggle-on">
              <div className="toggle__container">
                <svg className="icon-mode"  width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.5 13.3333L4.16666 10L7.5 6.66668M12.5 6.66668L15.8333 10L12.5 13.3333" stroke="#4D5562" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="toggle__text">Constructor</span>
              </div>
            </label>
          </fieldset> 
        </div>
        <div className="constructor__wrapper">
          {
            boards.map((board) => {
              if (board.items.length > 0) {
                return (
                  <Calculator elements={board.items} board={board} key={board.type}/>
                )
              } else {
                return <DragArea key={`_${board.type}`}/>;
              }              
            })
          }
        </div>
      </div>
    </div>
  );
}

export default Main;
