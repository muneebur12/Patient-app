import React from 'react';
import waveImage from './images/wave.png'; // Importing the image using require

const Recording = () => {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 mb-3">
            <div className="card">
              <div className="card-header">
                <h4>Additional Context</h4>
              </div>
              <div className="card-body">
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quia voluptatibus quas minima unde qui?
                </p>
                <textarea name="" id="" rows={6} cols={10} className='form-control'></textarea>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center mt-4">
          <div className="col-md-6 mb-3">
            <div className="card">
              <div className="card-header">
                <h4>Record Patient Interaction</h4>
              </div>
              <div className="card-body">
                <p className="card-text">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem, corrupti.
                </p>
                <h6 className="card-title text-center">Jacqueline (F)</h6>
                {/* Using the imported image */}
                <div className="recorder d-flex align-items-center justify-content-center">
                <div className="reload">
                <button className="btn btn-secondary"><i class="fa-solid fa-rotate-right"></i></button>
                </div>
                <div className="wave mx-3">
                <img src={waveImage} alt="Wave" className='img-fluid'/>
                </div>
                <div className="time">
                    <h6>03:24</h6>
                </div>
                </div>
                <div className="recorder-btn justify-content-center d-flex">
                    <button className='btn cust-success px-4'>Start</button>
                    <button className='btn btn-secondary ms-3 px-4'>Finish</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Recording;
