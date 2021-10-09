import './App.css';
import Home from './Components/Home/Home.jsx';
import {BrowserRouter as Router ,Switch,Route} from 'react-router-dom';
import Contact from './Components/Contact/Contact';
import Test_Prepsat from './Components/Test_Prepration/Test_Prepsat';
import Test_Prepneet from './Components/Test_Prepration/Test_Prepneet';
import Test_PrepJee from './Components/Test_Prepration/Test_PrepJee';
import Test_Prepielts from './Components/Test_Prepration/Test_Prepielts';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/contact" ><Contact/></Route>
        <Route exact path="/test preparation sat" ><Test_Prepsat/></Route>
        <Route exact path="/test preparation neet" ><Test_Prepneet/></Route>
        <Route exact path="/test preparation jee" ><Test_PrepJee/></Route>
        <Route exact path="/test preparation ielts" ><Test_Prepielts/></Route>
        <Route path="/" ><Home/></Route>
      </Switch>
    </Router>
  );
}

export default App;