import React from 'react';
import './Main.css'
import Chat from '../Chat/Chat'
import HeaderMain from '../Header/HeaderMain'
import Notification from '../Notification/Notification'

function Main() { 
    return (
        <div className="main">
            {/* <div className="Header_Show"> */}
            <HeaderMain/>
            {/* </div> */}
            <div className="mainBody">
                <div className="mainBodyIN">
                <div id="chat">
                <Chat />
                </div>
                <Notification id="noti"/>
                </div>
            </div>
        </div>
    )
}

export default Main
