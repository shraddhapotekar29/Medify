import React from "react";
import Grid from "@mui/material/Grid"
import apple from "../../assets/apple.png";
import Vector from "../../assets/Vector.png";
import cover from "../../assets/cover.png";
import display from "../../assets/display.png";
import google from "../../assets/google.png";
import style from "./Footer.module.css";
import { Button } from "@mui/material";
import medifyLogo from "../../assets/medifyLogo.png";
import fb from "../../assets/fb.png";
import pinterest from "../../assets/pinterest.png";
import twitter from "../../assets/twitter.png";
import utube from "../../assets/utube.png";
import { IoIosArrowForward } from "react-icons/io";
const Phone=()=>{
    return(<div className={style.footerDiv}><div className={style.phoneDiv}>
    <Grid container>
    <Grid item xs={12} md={6} className={style.firstGrid}>
        <img className={style.img1} src={cover} alt="cover" />
       <img className={style.img2} src={cover} alt="cover"/>
       <img className={style.img3} src={display} alt="display"/>
       <img className={style.img4}src={display} alt="display"/>
    </Grid>
    <Grid item xs={12} md={6} className={style.secondGrid}>
    <img className={style.Vector} src={Vector} alt="vector"/>
       <h1 style={{marginBottom:"1rem"}}>Download the <br/> Medify App</h1>
       <h6>Get the link to download the app</h6>
       <div style={{display:"flex"}}><div className={style.no}>+91</div>
       <div><input placeholder="Enter Phone No" className={style.num} /></div>
       <Button variant="contained" sx={{textTransform:"none"}}>Send SMS</Button>
       </div>
       <div style={{display:"flex",marginTop:"2rem"}}>
       <img className={style.google} src={google} alt="google"/>
       <img className={style.apple} src={apple} alt="apple"/>
       </div>
    </Grid>
    </Grid>

    </div>
    <div className={style.footer}>
        <Grid container spacing={0}>
         <Grid item xs={12} md={3} className={style.logoDiv}>
        <Grid container style={{ justifyContent: "flex-start" }}>
          <Grid item xs={12} md={12} style={{ marginBottom: "6rem", textAlign: "left" }}>
          <div><img src={medifyLogo} alt="medifyLogo" width={100} /></div>
           </Grid>
  <          Grid item xs={12} md={12} style={{ textAlign: "left" }}>
    <img src={fb} alt="fb" style={{ marginRight: "0.5rem" }} />
    <img src={twitter} alt="twitter" style={{ marginRight: "0.5rem" }} />
    <img src={utube} alt="utube" style={{ marginRight: "0.5rem" }} />
    <img src={pinterest} alt="pinterest" style={{ marginRight: "0.5rem" }} />
  </Grid></Grid>

 </Grid> 
        
        <Grid item xs={12} md={3} style={{textAlign:"left"}}>
            <h6 style={{ marginBottom: "1rem" }}><IoIosArrowForward />About Us</h6>
            <h6 style={{ marginBottom: "1rem" }}><IoIosArrowForward />Our Pricing</h6>
            <h6 style={{ marginBottom: "1rem" }}><IoIosArrowForward />Our Gallery</h6>
            <h6 style={{ marginBottom: "1rem" }}><IoIosArrowForward />Appointment</h6>
             <h6 style={{ marginBottom: "1rem" }}><IoIosArrowForward />Privacy Policy</h6>
            </Grid>
        <Grid item xs={12} md={3} style={{textAlign:"left"}}>
           <h6 style={{ marginBottom: "1rem" }}><IoIosArrowForward />Orthology</h6>
            <h6 style={{ marginBottom: "1rem" }}><IoIosArrowForward />Neurology</h6>
            <h6 style={{ marginBottom: "1rem" }}><IoIosArrowForward />Dental Care</h6>
            <h6 style={{ marginBottom: "1rem" }}><IoIosArrowForward />Opthalmology</h6>
             <h6 style={{ marginBottom: "1rem" }}><IoIosArrowForward />Opthalmology</h6>
        </Grid>
        <Grid item xs={12} md={3} style={{textAlign:"left"}}>
            <h6 style={{ marginBottom: "1rem" }}><IoIosArrowForward />About Us</h6>
            <h6 style={{ marginBottom: "1rem" }}><IoIosArrowForward />Our Pricing</h6>
            <h6 style={{ marginBottom: "1rem" }}><IoIosArrowForward />Our Gallery</h6>
            <h6 style={{ marginBottom: "1rem" }}><IoIosArrowForward />Appointment</h6>
             <h6 style={{ marginBottom: "1rem" }}><IoIosArrowForward />Privacy Policy</h6>
            </Grid>
            </Grid>
            <hr className={style.hr}/>
            <h6 className={style.copyRight}>Copyright ©2023 Surya Nursing Home.com. All Rights Reserved</h6>
    </div>
    </div>)
}
export default Phone;