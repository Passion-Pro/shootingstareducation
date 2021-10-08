import './App.css';
import Home from './Components/Home/Home.jsx';
import {BrowserRouter as Router ,Switch,Route} from 'react-router-dom';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/contact" ><Contact/></Route>
        <Route exact path="/" ><Home/></Route>
      </Switch>
    </Router>
  );
}

export default App;