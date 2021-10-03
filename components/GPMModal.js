import React from 'react'
import { Modal } from 'react-bootstrap'
import {gpm} from '../utils/data'

function GPMModal({show, onHide}) {
    return (
        <Modal show={show} fullscreen={true} onHide={onHide}>
            <Modal.Header closeButton>
            <Modal.Title>Modal</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {gpm.map(({title, text}) => 
                    <div>
                        <h3>{title}</h3>
                        <p>{text}</p>
                    </div>
                )}
            </Modal.Body>
      </Modal>
    )
}

export default GPMModal
