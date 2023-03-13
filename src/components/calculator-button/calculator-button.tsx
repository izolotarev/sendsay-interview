import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useAppDispatch } from '../../hooks/hooks';
import { addDigitAction, calculateAction, chooseOperationAction } from '../../store/actions/actions';
import { getAppMode } from '../../store/reducers/boards/boards-selectors';
import { AppMode, CalcButton } from '../../types/types';

type CalculatorButtonProps = {
  sign: string
  type: CalcButton
}

function CalculatorButton({ sign, type }: CalculatorButtonProps): JSX.Element {
  const dispatch = useAppDispatch();
  const appMode = useSelector(getAppMode);

  const handleClick = () => {
    if (appMode !== AppMode.Runtime) {
      toast.info("The application is in Constructor mode! Please switch to Runtime");
      return;
    }
    switch(type) {
      case CalcButton.Digit:
        dispatch(addDigitAction(sign));
        break;
      case CalcButton.Operation:
        dispatch(chooseOperationAction(sign));
        break;
      case CalcButton.Equal:
        dispatch(calculateAction());
        break;
    }
  }

  return (
    <button className="calculator__button" onClick={handleClick}>
      {sign}
    </button>
  );
}

export default CalculatorButton;