import React from 'react'
import { useHistory } from 'react-router'

function Hero() {
    const h = useHistory()
    return (
        <div className="px-4 pt-5 my-5 text-center border-bottom" style={{color: '#ffffff'}}>
            <div className="overflow-hidden" style={{maxHeight: '300vh'}}>
                <div className="container px-5">
                    <img src="/nasa-logo.png" className="img-fluid rounded-3 shadow-lg mb-4" alt="Example image" width={180} height={90} loading="lazy"/>
                </div>
            </div>
            <h1 className="display-5 fw-bold">Re Vera Inc.</h1>
            <div className="col-lg-6 mx-auto">
                <p className="lead mb-4">Our goal is to describe how Earth observation affects a particular decision that leads to improved outcomes for society - in terms of material benefits such as lives saved or resource savings - and to propose a strategy for measuring these benefits.</p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
                <button type="button" className="btn btn-primary btn-lg px-4 me-sm-3" onClick={() => h.push("/missions")}>Missions</button>
            </div>
            </div>
        </div>
    )
}

export default Hero
