import React, { useState } from 'react'
import PACEModal from './PACEModal';
import GPMModal from './GPMModal'

function Mission({title, author, description, img}) {
    const [modal, setModal] = useState(false);
    const [modal1, setModal1] = useState(false);

    const [state, setState] = useState(false)
    const changeState = () => {
        if(title === "GMP") {
            setState(true)
        }
    }

    changeState()

    return (
        <div class="container my-5" style={{backgroundColor: '#ffffff', borderRadius: 10}}>
            <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center shadow-lg">
            <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
                <h1 class="display-6 fw-bold lh-1 mb-2">{title}</h1>
                <h5>Author: {author}</h5>
                <p class="lead">{description}</p>
                <div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                <button type="button" class="btn btn-primary btn-lg px-4 me-md-2 fw-bold" onClick={state ? () => setModal(true) : () => setModal1(true)}>Proceed</button>
                </div>
            </div>
            <div class="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
                <img class="rounded-lg-3" src={img} alt="" width="500"/>
            </div>
            </div>
        <PACEModal show={modal} onHide={() => setModal(false)}/>
        <GPMModal show={modal1} onHide={() => setModal1(false)}/>
      </div>
    )
}

export default Mission
