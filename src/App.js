import './App.css';
import Home from './Components/Home/Home.jsx';
import {BrowserRouter as Router ,Switch,Route} from 'react-router-dom';
import Contact from './Components/Contact/Contact';
import Test_Prep from './Components/Test_Prepration/Test_Prep';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/contact" ><Contact/></Route>
        <Route exact path="/test preparation" ><Test_Prep/></Route>
        <Route path="/" ><Home/></Route>
      </Switch>
    </Router>
  );
}

export default App;