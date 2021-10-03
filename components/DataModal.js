import React from 'react'
import { Modal } from 'react-bootstrap'
import { info } from '../utils/data'

function DataModal({show, onHide, title, id}) {
    return (
        <Modal
            fullscreen={true}
            show={show}
            onHide={onHide}
            aria-labelledby="example-modal-sizes-title-lg"
        >
            <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
                {title}
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div style={{paddingLeft: 50, paddingRight: 50}}>
                    {info[id].map(({title, text}) =>
                        <div>
                            <h4 className="fw-bold">{title}</h4>
                            <p>{text}</p>
                        </div>
                    )}
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default DataModal
