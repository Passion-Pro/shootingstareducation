import React from 'react'
import HeaderMain from '../Header/HeaderMain'
import './Profile.css';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';

function Profile() {
    return (
        <div className="profile">
            <HeaderMain />
            <div className="profile__body">
               <div className="profile__bodyIn">
                   <div className="profile__Fotu">
                   <AccountCircleRoundedIcon style={{ fontSize: 110 }} />
                   </div>
                   <div className="profile__Name">
                     <h6>Nishant</h6>
                     <h6>Email</h6>
                     <h6>6396894587</h6>
                     <h6>Kailashpur, Mehuwala, Dehradun, 248001</h6>
                     <h6 className="Courses__div">
                         Courses
                         <ul>
                             <li>IIT</li>
                             <li>NEET</li>
                         </ul>
                     </h6>
                   </div>
               </div>
                   <div className="update__profile">
                       <h6>Update Your Profile
                       </h6>
                   </div>
            </div>
        </div>
    )
}

export default Profile;