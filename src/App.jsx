import React from "react";
import Home from "./Home";


import Navbar from "./Navbar";
import  { Routes ,Route, Navigate } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Recording from "./Recording";


let App = () => {
    return(
        <>
        <Navbar />
        <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/recording" element={<Recording/>} />
            <Route element={<Navigate to="/home" />} />
        </Routes>
        </>
    );
};
export default App;