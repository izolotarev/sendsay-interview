import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useAppDispatch } from '../../hooks/hooks';
import { chooseOperationAction } from '../../store/actions/actions';
import { getAppMode } from '../../store/reducers/boards/boards-selectors';
import { AppMode } from '../../types/types';

type DigitButtonProps = {
  operation: string
}

function OperationButton({ operation }: DigitButtonProps): JSX.Element {
  const dispatch = useAppDispatch();
  const appMode = useSelector(getAppMode);

  const handleClick = () => {
    if (appMode !== AppMode.Runtime) {
      toast.info("The application is in Constructor mode! Please switch to Runtime");
      return;
    }
    dispatch(chooseOperationAction(operation));
  }

  return (
    <button className="calculator__button" onClick={handleClick}>
      {operation}
    </button>
  );
}

export default OperationButton;