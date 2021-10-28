import React from 'react';
import './Main.css';
import HeaderAdmin from '../HeaderAdmin/HeaderAdmin';
import AddStudent from '../AddStudent/AddStudent';
import AddAdmin from '../AddAdmin/AddAdmin';
import AddTeacher from '../AddTeacher/AddTeacher';

function Main() {
    return (
        <div className="mainAdmin">
            <HeaderAdmin/>
           <div className="mainAdminBody">
           {window.location.pathname=='/addstudent' && <AddStudent/>}
            {window.location.pathname=='/addteacher' && <AddTeacher/>}
            {window.location.pathname=='/addadmin' && <AddAdmin/>}
           </div>
        </div>
    )
}

export default Main;