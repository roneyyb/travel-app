import React from 'react'
import Camp from './Camp'
import Footer from './Footer'
import Guide from './Guide'
import Hero from './Hero'
import Feature from './Feature'
import { GetApp } from './GetApp'

const Home = () => {
    return (
        <div>
            <Hero />
            <Camp />
            <Guide />
            <Feature />
            <GetApp />

        </div>
    )
}

export default Home