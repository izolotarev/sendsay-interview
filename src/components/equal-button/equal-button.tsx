import { useAppDispatch } from '../../hooks/hooks';
import { calculateAction } from '../../store/actions/actions';

function EqualButton(): JSX.Element {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(calculateAction());
  }

  return (
    <button className="calculator__button" onClick={handleClick}>
      =
    </button>
  );
}

export default EqualButton;