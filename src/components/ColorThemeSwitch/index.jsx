import CONFIG from 'config';
import { useRecoilState } from 'recoil';
import colorTheme from 'store/colorTheme';
import sunLogo from './sun-logo.png';
import moonLogo from './moon-logo.png';
import './style.scss';

const ColorThemeSwitch = () => {
  const [displayedColorTheme, setDisplayedColorTheme] = useRecoilState(colorTheme);
  const displayedLogo = displayedColorTheme === 'dark' ? sunLogo : moonLogo;

  const switchColorTheme = () => {
    const newColorTheme = ['light', 'dark'].filter((availableColorTheme) => availableColorTheme !== displayedColorTheme)[0];
    localStorage.setItem(CONFIG.LOCAL_STORAGE_KEY_COLOR_THEME, newColorTheme);
    setDisplayedColorTheme(newColorTheme);
  };

  return (
    <button type="button" className="ColorThemeSwitch" onClick={switchColorTheme}>
      <img src={displayedLogo} alt="sun" className="ColorThemeSwitch__logo" />
    </button>
  );
};

export default ColorThemeSwitch;
