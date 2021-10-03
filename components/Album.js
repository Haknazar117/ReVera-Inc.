import React, { useState } from 'react'
import DataModal from './DataModal';

function Album({title, text, image, id}) {
    const [modal, setModal] = useState(false);

    return (
        <div className="col">
          <div className="card shadow-md">
            <img className="bd-placeholder-img card-img-top" src={image} width={200} height={225}/>

            <div className="card-body">
              <p className="card-text">{text}</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-secondary" onClick={() => setModal(true)}>View</button>
                </div>
              </div>
            </div>
          </div>
          <DataModal show={modal} onHide={() => setModal(false)}
            title={title}
            id={id}
            />
        </div>
    )
}

export default Album
