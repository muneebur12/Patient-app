import React from "react";


let Home = () => {
    return(
        <>
       <div class="container home-page">
            <div class="row">
                <div class="col-md-6 mb-4">
                    <div class="card p-3 shadow">
                        <div class="card-header d-flex justify-content-between align-items-center border-0">
                            <h5>Your Note </h5>
                            <div class="card-buttons">
                                <button class="btn"><i class="fa-solid fa-envelope me-1"></i> Email</button>

                                <button class="btn ms-2"><i class="fa-solid fa-file me-1"></i> Copy</button>

                                <button class="btn ms-2"><i class="fa-solid fa-rotate-right me-1"></i> Regenerate</button>
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="options d-flex">
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>Structure: Alternative medicine practitioner's Note</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                  </select>
    
                                  <select class="form-select ms-3" aria-label="Default select example">
                                    <option selected>Voice: Goldilocks</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                  </select>
                            </div>

                            <div class="alert alert-white border d-flex align-items-center mt-3" role="alert">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"  fill="red" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">
                                  <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                                </svg>
                                <div class="ms-2">
                                    <span>Please ensure that you review the contents of all outputs and confirm that they accurately represent the consultation.</span>
                                </div>
                              </div>

                              <div class="content">
                                <h6>Subjective:</h6>
                                <p>- Presenting with headaches, often onset during periods of high stress at work <br/>
                                    - Headaches unrelieved by medication (details not specified) or rest</p>
                                    <h6>Objective:</h6>
                                    <p>- Nil relevant</p>
                                    <h6>Assessment:</h6>
                                    <p>- Stress-related headaches</p>
                                    <h6>Plan:</h6>
                                    <p>- Trial acupuncture to target specific points for tension reduction and circulation promotion <br />
                                    - Recommend herbal supplements (specifics not mentioned) and mindfulness practices for stress management</p>
                              </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-6 mb-4">
                    <div class="card p-3 shadow">
                        <div class="card-header d-flex justify-content-between align-items-center border-0">
                            <h5>New tab</h5>
                            <div class="card-buttons">
                                <button class="btn"><i class="fa-solid fa-plus"></i></button>
                            </div>
                        </div>

                        <div class="card-header d-flex justify-content-between align-items-center border-0">
                            
                            <div class="card-buttons">
                                <button class="btn"><i class="fa-solid fa-file me-1"></i> Copy</button>

                                <button class="btn ms-2"><i class="fa-solid fa-file-export me-1"></i> Copy</button>

                                <button class="btn ms-2"><i class="fa-solid fa-bookmark me-1"></i> Save as template</button>
                            </div>
                            <button class="btn cust-success"><i class="fa-solid fa-rotate-right me-1"></i> Sync changes</button>
                        </div>
                        <div class="card-body">
                            <p class="card-title">
                                Patient presents with stress-related headaches, unrelieved by medication or rest; acupuncture, herbal supplements, and mindfulness practices advised for management.
                            </p>
                        </div>
                        <div class="card-footer border-0 bg-white">
                            <div class="alert alert-white border d-flex align-items-center mt-3" role="alert">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"  fill="red" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">
                                  <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                                </svg>
                                <div class="ms-2">
                                    <span>Please ensure that you review the contents of all outputs and confirm that they accurately represent the consultation.</span>
                                </div>
                              </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </>
    )
}
export default Home;