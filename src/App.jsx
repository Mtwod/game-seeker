import ToggleTheme from 'components/ToggleTheme';
import { useSelector } from 'react-redux';
import './style.scss';

const App = () => {
  const theme = useSelector((state) => state);

  return (
    <div className={`App ${theme}`}>
      <h1>Hello World</h1>
      <p>This is a starter for React app, place your components here!</p>
      <a href="/">Link here!</a>
      <ToggleTheme />
    </div>
  );
};

export default App;
