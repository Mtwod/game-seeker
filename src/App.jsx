import Home from 'pages/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import 'style.scss';

const App = () => (
  <Router>
    <div className="App dark">
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  </Router>
);

export default App;
