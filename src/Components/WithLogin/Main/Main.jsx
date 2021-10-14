import React from 'react';
import './Main.css'
import Chat from '../Chat/Chat'
import HeaderMain from '../Header/HeaderMain'
import Notification from '../Notification/Notification'

function Main() {
    return (
        <div className="main">
            <HeaderMain/>
            <div className="mainBody">
                <div className="mainBodyIN">
                <Chat id="chat"/>
                <Notification id="noti"/>
                </div>
            </div>
        </div>
    )
}

export default Main
