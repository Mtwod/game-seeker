import config from 'config';
import { SWITCH_THEME } from 'stores/toggleTheme/toggleThemeActions';

const initialState = localStorage.getItem(config.STORAGE_KEY) || 'dark';

const toggleThemeReducer = (state = initialState, action) => {
  const { type } = action;

  const isDark = () => (state === 'dark');
  const newTheme = isDark() ? 'light' : 'dark';

  switch (type) {
    case SWITCH_THEME:
      localStorage.setItem(config.STORAGE_KEY, newTheme);
      return newTheme;
    default:
      return state;
  }
};

export default toggleThemeReducer;
