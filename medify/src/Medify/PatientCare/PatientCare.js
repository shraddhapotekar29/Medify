import style from "./PatientCare.module.css"
import React from "react";
import PatientCare1 from "../../assets/PatientCare1.png"
import PatientCare2 from "../../assets/PatientCare2.png"
import phone from "../../assets/phone.png"
import { Grid } from "@mui/material";
import tick from "../../assets/tick.png"

const PatientCare=()=>{
    return(<div className={style.patientCare}>
        <Grid container spacing={2}>
        <Grid item xs={12} md={6}><div className={style.phone}><div style={{display:"flex"}}><img src={phone} alt="phone"/><h4 style={{color:"#1B3C74"}}>Free Consultation</h4></div><div><h5 style={{color:" #77829D"}}>Consultation with the best</h5></div></div><div className={style.firstImg}><img src={PatientCare1} alt="PatientCare1" /></div> <div className={style.secondImg}><img src={PatientCare2} alt="PatientCare2" /></div></Grid>
        <Grid item xs={12} md={6} className={style.patientInfo} style={{paddingTop:"5rem",paddingLeft:"2rem",paddingRight:"2rem"}}>
            <h6 style={{color:"#2AA7FF"}}>HELPING PATIENTS FROM AROUND THE GLOBE!!</h6>
            <h2 style={{color:"#1B3C74"}}>Patient <span style={{color:"#2AA7FF"}}>Caring</span></h2>
            <p style={{color:"#77829D"}}>Our goal is to deliver quality of care in a courteous, respectful, and compassionate 
                manner. We hope you will allow us to care for you and strive to be the first and 
                best choice for healthcare.</p>
        <h6 style={{color:"#1B3C74"}}><img src={tick} alt="tick"/> Stay Updated About Your Health</h6>
        <h6 style={{color:"#1B3C74"}}><img src={tick} alt="tick"/> Check Your Results Online</h6>
        <h6 style={{color:"#1B3C74"}}><img src={tick} alt="tick"/> Manage Your Appointments</h6>
        </Grid>
        </Grid>
    </div>)
}
export default PatientCare;