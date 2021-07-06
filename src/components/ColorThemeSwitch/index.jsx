import CONFIG from 'config';
import { useRecoilState } from 'recoil';
import colorTheme from 'store/colorTheme';
import './style.scss';

const ColorThemeSwitch = () => {
  const [displayedColorTheme, setDisplayedColorTheme] = useRecoilState(colorTheme);

  const switchColorTheme = () => {
    const newColorTheme = ['light', 'dark'].filter((availableColorTheme) => availableColorTheme !== displayedColorTheme)[0];
    localStorage.setItem(CONFIG.LOCAL_STORAGE_KEY_COLOR_THEME, newColorTheme);
    setDisplayedColorTheme(newColorTheme);
  };

  return (
    <button type="button" className="ColorThemeSwitch" onClick={switchColorTheme}>
      {displayedColorTheme}
    </button>
  );
};

export default ColorThemeSwitch;
