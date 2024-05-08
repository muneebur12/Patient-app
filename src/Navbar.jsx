import React from "react";
import {NavLink} from "react-router-dom";

let Navbar = () => {
    return(
        <>
        <nav class="navbar navbar-expand-lg navbar-light p-4">
            <div class="container p-4 shadow">
              <a class="navbar-brand" href="/">Patient Details</a>
              <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link active btn navbtn px-3" aria-current="page" href="#"><i class="fa-solid fa-circle-user me-1"></i> Potential details</a>
                  </li>
              </ul>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-lg-0">
                 
                  <li class="nav-item">
                    <a class="nav-link" href="#"><i class="fa-solid fa-stopwatch-20"></i> <span class="me-2">00:00:00</span></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link btn cust-success" href="recording">Start Recording</a>
                  </li>
                  
                  
                </ul>
                
              </div>
            </div>
          </nav>
        </>
    )
}
export default Navbar;