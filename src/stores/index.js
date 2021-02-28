import { createStore } from 'redux';
import toggleThemeReducer from 'stores/toggleTheme/toggleThemeReducer';

const store = createStore(toggleThemeReducer);

export default store;
