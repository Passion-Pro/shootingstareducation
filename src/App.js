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
import AssignmentsPageForTeacher from "./Components/WithLogin/Teacher/AssignmentsPage/AssignmentsPageForTeacher"
import DoubtsPageForTeacher from "./Components/WithLogin/Teacher/DoubtsPage/DoubtsPageForTeacher";
import MessagesSectionForMobile from "./Components/WithLogin/Teacher/DoubtsPage/MessagesSectionForMobile";
import MainTeacher from "./Components/WithLogin/Teacher/Main/MainTeacher";
import Notification from "./Components/WithLogin/Notification/Notification";
import { actionTypes } from "./reducer";
import db, { auth } from "./firebase";
import { useEffect } from "react";
import { useStateValue } from "./StateProvider";


function App() {

  const[{signInAs,user} , dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...
    auth.onAuthStateChanged((auth) => {
      if (auth) { 
        dispatch({
          type : actionTypes.SET_USER,
          user: auth,
        });
      } else {  }
    });
  }, []);
console.log(user)
  useEffect(()=>{
  if(user?.uid){
     db.collection('users').doc(user?.uid).onSnapshot((snapshot)=>(
      dispatch({
        type:actionTypes.SIGN_IN_AS,
        signInAs:snapshot.data(),
       })
      // console.log(snapshot.data())
     ))
  }
  },[user?.uid])
  // useEffect(()=>{
  //   if(){
      
  //   }
  //   },[])
console.log(signInAs)
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
        <Route path="/notification">
          <Notification/>
        </Route>
        <Route path="/leaderboard">
          <LeaderBoard />
        </Route>
        <Route path="/main">
          {signInAs && signInAs.value==='teacher' ? <MainTeacher /> : <Main /> }
        </Route>
        {/* </Route> */}
        {/* <Route path="/main"> */}
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
        <Route path = "/AssignmentsPageForTeachers">
          <AssignmentsPageForTeacher/>
        </Route>
        <Route path = "/DoubtsPageForTeachers">
          <DoubtsPageForTeacher/>
        </Route>
        <Route path = "/doubtsMessagesPageForTeachers">
          <MessagesSectionForMobile/>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;