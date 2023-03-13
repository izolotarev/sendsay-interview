import { useAppDispatch } from '../../hooks/hooks';
import { addDigitAction } from '../../store/actions/actions';

type DigitButtonProps = {
  digit: string
}

function DigitButton({ digit }: DigitButtonProps): JSX.Element {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(addDigitAction(digit));
  }

  return (
    <button className="calculator__button" onClick={handleClick}>
      {digit}
    </button>
  );
}

export default DigitButton;