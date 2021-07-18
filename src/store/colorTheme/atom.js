import { atom } from 'recoil';
import CONFIG from 'config';

const defaultColorTheme = localStorage.getItem(CONFIG.LOCAL_STORAGE_KEY_COLOR_THEME) || 'dark';

const colorTheme = atom({
  key: 'colorTheme', // unique ID (with respect to other atoms/selectors)
  default: defaultColorTheme, // default value (aka initial value)
});

export default colorTheme;
