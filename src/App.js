import './App.css';
import Home from './Components/Home/Home.jsx';
import {BrowserRouter as Router ,Switch,Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route to="/" ><Home/></Route>
      </Switch>
    </Router>
  );
}

export default App;
