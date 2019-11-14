import React from 'react'
import Hero from '../component/Hero'
import Banner from '../component/Banner'
import {Link} from 'react-router-dom'
import Services from '../component/Services'
import FeturedRooms from '../component/FeturedRooms'
import StyledHero from '../component/StyledHero'


export default function Home() {
    return (
        <>
            <Hero>
                <Banner title="luxorius rooms" 
                subtitle="deluxe rooms starting at €299">
                    <Link to='/rooms' className="btn-primary">
                        our rooms
                    </Link>
                </Banner>
            </Hero>
            <Services/>
            <FeturedRooms />
        </>
    )
}
