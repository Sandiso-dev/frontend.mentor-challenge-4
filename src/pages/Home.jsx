import React from "react";
import Sidebar from '../components/Sidebar'
import ContentSide from '../components/ContentSide'

const Home = () => {
    return (
        <div className='home'>
            <Sidebar/>
            <ContentSide/>
        </div>
    )
}

export default Home