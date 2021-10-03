import React from 'react'
import Mission from '../components/Mission'
import NavBar from '../components/NavBar'
import {missions} from '../utils/consts'

function MissionsPage() {
    return (
        <div style={styles}>
            <div style={{padding: 80}}>
                {missions.map(({title, author, description, img}) =>
                    <Mission title={title} author={author} description={description} img={img}/>
                )}
            </div>
        </div>
    )
}

const styles = {
    backgroundImage: "url('/spaceCraft.jpeg')",
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    height: '100vh'
}

export default MissionsPage
