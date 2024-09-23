import React, { useState } from "react";
import medifyLogo from "../../assets/medifyLogo.png"
import Button from '@mui/material/Button';
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import myBookings from "../MyBookings/MyBookings";
const Navbar=({color})=>{
  const navigate=useNavigate();
    return(<>
     <nav className="navbar navbar-expand-lg navbar-light bg-light"  style={color?{background:"#ffffff"}:{ background: "linear-gradient(81deg, #E7F0FF 9.01%, rgba(232, 241, 255, 0.47) 89.11%)" }}>
  <Link to={"/"} className="navbar-brand"><img src={medifyLogo} alt="medifyLogo"/></Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent" style={color?{background:"#ffffff"}:{background:"linear-gradient(81deg, #E7F0FF 9.01%, rgba(232, 241, 255, 0.47) 89.11%)"}}>
    <ul className="navbar-nav ml-auto">
      <li className="nav-item ">
          <Link className="nav-link" to="/booking"> Find Doctors</Link>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Hospitals</a>
      </li>
      <li className="nav-item dropdown">
      <a className="nav-link" href="#">Medicines</a>
      </li>
      <li className="nav-item">
        <a className="nav-link " href="#">Surgeries</a>
      </li>
      <li className="nav-item">
        <a className="nav-link " href="#">SoftWare for Provider</a>
      </li>
      <li className="nav-item">
        <a className="nav-link " href="#">Facilities</a>
      </li>
      <li className="nav-item">
        <Button variant="contained" onClick={()=>{navigate("/myBookings")}}>My Bookings</Button>
      </li>
    </ul>
  </div>
</nav></>)
}
export default Navbar;