import { useAppDispatch } from '../../hooks/hooks';
import { chooseOperationAction } from '../../store/actions/actions';

type DigitButtonProps = {
  operation: string
}

function OperationButton({ operation }: DigitButtonProps): JSX.Element {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(chooseOperationAction(operation));
  }

  return (
    <button className="calculator__button" onClick={handleClick}>
      {operation}
    </button>
  );
}

export default OperationButton;