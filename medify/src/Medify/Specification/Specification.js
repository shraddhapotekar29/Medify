import React, { useState } from "react";
import style from "./Specification.module.css";
import {Grid} from "@mui/material";
import Labs from "../../assets/Labs.png"
import Stethoscope from "../../assets/Stethoscope.png"
import Cardiology from "../../assets/Cardiology.png"
import mri from "../../assets/mri.png"
import Blood from "../../assets/Blood.png"
import Immune from "../../assets/Immune.png"
import Xray from "../../assets/Xray.png"
import { Button } from "@mui/material";
const Specification=()=>{
    const[view,setView]=useState(false);
    return(<div className={style.SpecificationDiv}>
        <h2 style={{color:"#1B3C74",fontFamily:"Poppins",fontWeight:"600",marginBottom:"1rem",marginRight:"5rem"}}>Find by specialisation</h2>
        <Grid container>
        <Grid item xs={6} md={3}><div className={style.cardDiv}><img src={Labs} alt="Labs" width={50}/><p>Dentistry</p></div></Grid>
        <Grid item xs={6} md={3}><div className={style.cardDiv}><img src={Stethoscope} alt="Stethoscope" width={50}/><p>Primary Care</p></div></Grid>
        <Grid item xs={6} md={3}><div className={style.cardDiv}><img src={Cardiology} alt="Cardiology" width={50}/><p>Cardiology</p></div></Grid>
        <Grid item xs={6} md={3}><div className={style.cardDiv}><img src={mri} alt="mri" width={50}/><p>MRI Resonance</p></div></Grid>
        <Grid item xs={6} md={3}><div className={style.cardDiv}><img src={Blood} alt="Blood" width={50}/><p>Blood Test</p></div></Grid>
        <Grid item xs={6} md={3}><div className={style.cardDiv}><img src={Immune} alt="Immune" width={50}/><p>Piscologist</p></div></Grid>
        <Grid item xs={6} md={3}><div className={style.cardDiv}><img src={Labs} alt="Cardiology" width={50}/><p>Laboratory</p></div></Grid>
        <Grid item xs={6} md={3}><div className={style.cardDiv}><img src={Xray} alt="Xray" width={50}/><p>X-Ray</p></div></Grid>
        </Grid>
        {view&&<Grid container >
        <Grid item xs={6} md={3}><div className={style.cardDiv}><img src={Labs} alt="Labs" width={50}/><p>Dentistry</p></div></Grid>
        <Grid item xs={6} md={3}><div className={style.cardDiv}><img src={Stethoscope} alt="Stethoscope" width={50}/><p>Primary Care</p></div></Grid>
        <Grid item xs={6} md={3}><div className={style.cardDiv}><img src={Cardiology} alt="Cardiology" width={50}/><p>Cardiology</p></div></Grid>
        <Grid item xs={6} md={3}><div className={style.cardDiv}><img src={mri} alt="mri" width={50}/><p>MRI Resonance</p></div></Grid>
        {/* <Grid item xs={6} md={3}><div className={style.cardDiv}><img src={Blood} alt="Blood" width={50}/><p>Blood Test</p></div></Grid>
        <Grid item xs={6} md={3}><div className={style.cardDiv}><img src={Immune} alt="Immune" width={50}/><p>Piscologist</p></div></Grid>
        <Grid item xs={6} md={3}><div className={style.cardDiv}><img src={Labs} alt="Cardiology" width={50}/><p>Laboratory</p></div></Grid>
        <Grid item xs={6} md={3}><div className={style.cardDiv}><img src={Xray} alt="Xray" width={50}/><p>X-Ray</p></div></Grid> */}
        </Grid>}
        <Button variant="contained" sx={{marginTop:"1rem"}} onClick={()=>{setView(!view)}}>View All</Button>
    </div>)
}
export default Specification;
