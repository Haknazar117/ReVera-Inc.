import React from 'react'
import Album from '../components/Album'
import { data } from '../utils/consts'

function DataPage() {
    return (
        <div style={styles}>
            <div style={{padding: 50}}>
            <section class="py-5 text-center container">
                <div class="row py-lg-5">
                <div class="col-lg-6 col-md-8 mx-auto" style={{color: '#ffff'}}>
                    <h1 class="fw-bold">Data NASA collects</h1>
                    <p class="lead text-white fw-light">Usually, we imagine NASA's data as something large and complex. Below you can see some fields were NASA's knowledge is crucial. </p>
                </div>
                </div>
            </section>
                <div class="album py-5">
                    <div class="container">
                        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        {data.map(({title, text, image, id}) => 
                            <Album text={text} image={image} title={title} id={id}/>
                        )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const styles = {
    backgroundImage: "url('/data.jpg')",
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    height: '100vh'
}

export default DataPage
