import React from 'react'
import './Home.css'
import Banner from './Banner'
import Footer from './Footer'
import Explore from './Expolre'
import Stame from './Stame'
import Studentlife from './Studentlife'
import Recentlist from './Recentlist'
import Howitworks from './Howitworks'

function Home() {
    return (
        <div className='home'>
            <Banner />
            <Explore />
            <Stame />
            <Howitworks />
            <Recentlist />
            <Studentlife />
            <Footer />
        </div>
    )
}

export default Home
