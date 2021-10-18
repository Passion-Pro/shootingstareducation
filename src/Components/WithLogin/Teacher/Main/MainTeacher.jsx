import React from 'react';
import Chat from '../../Chat/Chat';
import HeaderMain from '../../Header/HeaderMain';
import NoticesTeacher from '../Notice/NoticesTeacher';
import './MainTeacher.css';

function MainTeacher() {
    return (
        <div className="mainteacher">
          <HeaderMain/>
          <div className="mainBody">
                <div className="mainBodyIN">
                <div id="chat">
                <Chat />
                </div>
                <div id="noti">
                <NoticesTeacher/>
                </div>
                </div>
            </div>
        </div>
    )
}

export default MainTeacher;
