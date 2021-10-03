import React from 'react'
import About from '../components/About'
import Hero from '../components/Hero'
import NavBar from '../components/NavBar'

function HomePage() {
    return (
        <div style={styles}>
            <div style={{padding: 20}}>
                <Hero/>
                <About/>
            </div>
        </div>
    )
}

const styles = {
    backgroundImage: "url('/sky.jfif')",
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    height: '100vh'
}

export default HomePage
