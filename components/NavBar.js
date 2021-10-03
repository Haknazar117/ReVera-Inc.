import React, { useEffect, useState } from 'react'
import { routes } from '../routes'

function NavBar() {
    const [colorBg, setBg] = useState('transparent');
    const ref = React.useRef()
    ref.current = colorBg

    const nav_styles = {
        color: {
            backgroundColor: '#000000'
        },
        transparent: {}
    }
    useEffect(() => {
        const changeNavbarColor = () =>{
            if(window.scrollY >= 80){
                setBg('color');
            }
            else {
                setBg('transparent');
            }
        };
        document.addEventListener('scroll', changeNavbarColor);
        return () => {
            document.removeEventListener('scroll', changeNavbarColor)
        }
    })

    return (
        <nav className="navbar navbar-expand-sm fixed-top navbar-dark" style={nav_styles[ref.current]}>
            <div className="container-sm">
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbar1">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a className="navbar-brand" href="#">Logo here </a>
                <div className="collapse navbar-collapse" id="navbar1">
                    <ul className="navbar-nav">
                        {routes.map(({title, path}) => 
                            <li className="nav-item active">
                                <a className="nav-link" href={path}>{title}</a>
                            </li>  
                        )}
                    </ul>
                </div>
            </div>
        </nav> 
    )
}

export default NavBar
