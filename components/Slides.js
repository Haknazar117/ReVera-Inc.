import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Slides({style}) {
    return (
        <Carousel
        style={style}
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
        >
                <div>
                    <img src="/sky.jfif"/>
                </div>
                <div>
                    <img src="/spaceCraft.jpeg" />
                </div>
                <div>
                    <img src="/earth-globe.jpg" />
                </div>
            </Carousel>
    )
}

export default Slides
