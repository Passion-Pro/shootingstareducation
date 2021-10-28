import React, { useEffect, useState } from "react";
import "./AddTeacherInfo.css";
import { Button } from "@mui/material";
import ShowCourse from "./ShowCourse";
import db from "../../../../firebase";
import { useStateValue } from "../../../../StateProvider";

function AddTeacherInfo() {
  const[{newteachercourse,newteachercoursesubject,user} , dispatch] = useStateValue();
  const [name, setName] = useState("");
  const [courses,setCourses]=useState([]);

  useEffect(()=>{ 
    db.collection('CoursesName').onSnapshot((snapshot)=>(
      setCourses( snapshot.docs.map((doc) => ({ 
        data: doc.data(),
        id: doc.id,
      })))
    ))
  },[])

  const AddTeacherInfo = (e) => {
    e.preventDefault();
    db.collection('users').add({
      name:name,
      value:'teacher',
      courseName:newteachercourse,
      courseSubject:newteachercoursesubject,
      email:user.email,
    })
  };

  return (
    <div className="addTeacher">
      <div className="addTeacherIn">
        <div className="addTeacher__logo">ADD TEACHER INFO</div>
        <div className="addTeacherHeader">
          <input
            placeholder="Name "
            value={name}
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
          <div className="addTeacherCourse">
              Select Course
            {courses.map((course)=>(
            <ShowCourse course={course}/> 
            ))}
          </div>
          <div className="addTeacherSubject"></div>
        </div>
        <div className="showCourseSubject">
          Selected Course : {newteachercoursesubject}
        </div>
        <div className="addTeacherBody">
          <Button variant="contained" onClick={AddTeacherInfo}>Submit</Button>
        </div>
      </div>
    </div>
  );
}

export default AddTeacherInfo;
