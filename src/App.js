import "./App.css";
import Home from "./Components/Home/Home.jsx";
import HeaderSidebar from "./Components/HeaderSidebar/HeaderSidebar";
import CourseArchieve from "./Components/Courses/CourseArchieve/CourseArchieve";
import PrimaryEducation from "./Components/Courses/Primary Education/PrimaryEducation";
import SecondaryEducation from "./Components/Courses/Secondary Education/SecondaryEducation";
import HigherSecondaryEducation from "./Components/Courses/Higher Secondary Education/HigherSecondaryEducation";
import Languages from "./Components/Courses/Languages/Languages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contact from "./Components/Contact/Contact";
import Test_Prepsat from "./Components/Test_Prepration/Test_Prepsat";
import Test_Prepneet from "./Components/Test_Prepration/Test_Prepneet";
import Test_PrepJee from "./Components/Test_Prepration/Test_PrepJee";
import Test_Prepielts from "./Components/Test_Prepration/Test_Prepielts";
import Login from "./Components/Login/Login";
import AssignmentsPage from "./Components/WithLogin/AssignmentsPage/AssignmentsPage";
import NoticesPage from "./Components/WithLogin/Notices/NoticesPage";
import DoubtsPage from "./Components/WithLogin/DoubtsPage/DoubtsPage";
import Main from "./Components/WithLogin/Main/Main";
import Chat from "./Components/WithLogin/Chat/Chat";
import Profile from "./Components/WithLogin/Profile/Profile";
import LeaderBoard from "./Components/WithLogin/LeaderBoard/LeaderBoard";
import MainTeacher from "./Components/WithLogin/Teacher/Main/MainTeacher";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/mainChat">
          <div className="chat_Show">
            <Chat />
          </div>
          <div className="chat_Show_Not">
            <Main />
          </div>
        </Route>
        <Route path="/mainteacher">
          <MainTeacher />
        </Route>
        <Route path="/leaderboard">
          <LeaderBoard />
        </Route>
        <Route path="/main">
          <Main />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/test preparation sat">
          <Test_Prepsat />
        </Route>
        <Route path="/test preparation neet">
          <Test_Prepneet />
        </Route>
        <Route path="/test preparation jee">
          <Test_PrepJee />
        </Route>
        <Route path="/test preparation ielts">
          <Test_Prepielts />
        </Route>
        <Route path="/headerSidebar">
          <HeaderSidebar />
        </Route>
        <Route path="/courseArchieve">
          <CourseArchieve />
        </Route>
        <Route path="/primaryEducation">
          <PrimaryEducation />
        </Route>
        <Route path="/secondaryEducation">
          <SecondaryEducation />
        </Route>
        <Route path="/higherSecondaryEducation">
          <HigherSecondaryEducation />
        </Route>
        <Route path="/languages">
          <Languages />
        </Route>
        <Route path="/signIn">
          <Login />
        </Route>
        <Route path="/AssignmentsPage">
          <AssignmentsPage />
        </Route>
        <Route path="/NoticesPage">
          <NoticesPage />
        </Route>
        <Route path="/DoubtsPage">
          <DoubtsPage />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;