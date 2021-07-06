/* eslint-disable no-unused-vars */
import Home from 'pages/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import colorTheme from 'store/colorTheme';
import 'style.scss';

const App = () => {
  const displayedColorTheme = useRecoilValue(colorTheme);

  return (
    <Router>
      <div className={`App ${displayedColorTheme}`}>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
