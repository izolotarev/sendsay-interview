import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useAppDispatch } from '../../hooks/hooks';
import { calculateAction } from '../../store/actions/actions';
import { getAppMode } from '../../store/reducers/boards/boards-selectors';
import { AppMode } from '../../types/types';

function EqualButton(): JSX.Element {
  const dispatch = useAppDispatch();
  const appMode = useSelector(getAppMode);

  const handleClick = () => {
    if (appMode !== AppMode.Runtime) {
      toast.info("The application is in Constructor mode! Please switch to Runtime");
      return;
    }
    dispatch(calculateAction());
  }

  return (
    <button className="calculator__button" onClick={handleClick}>
      =
    </button>
  );
}

export default EqualButton;