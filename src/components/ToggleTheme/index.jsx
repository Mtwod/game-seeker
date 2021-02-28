import { useDispatch, useSelector } from 'react-redux';
import { switchTheme } from 'stores/toggleTheme/toggleThemeActions';

const ToggleTheme = () => {
  const theme = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div className="ToggleTheme">
      <h1 className="ToggleTheme__title">{theme}</h1>
      <button
        className="ToggleTheme__button"
        type="button"
        onClick={() => { dispatch(switchTheme()); }}
      >
        Switch
      </button>
    </div>
  );
};

export default ToggleTheme;
