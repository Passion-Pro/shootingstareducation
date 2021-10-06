import React from 'react';
import './Home.css'
import HomeFooter from './HomeFooter.jsx';
import HomeMiddle from './HomeMiddle.jsx';
import HomeTop from './HomeTop.jsx';

function Home() {
    return (
        <>
            <div className="home">
                <HomeTop/>
                <HomeMiddle/>
            <HomeFooter/>
            </div>
        </>
    )
}

export default Home;
