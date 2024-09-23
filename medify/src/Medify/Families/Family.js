import React from "react"
import Grid from "@mui/material/Grid";
import style from "./Family.module.css";

import fam1 from "../../assets/fam1.png";
import fam2 from "../../assets/fam2.png";
import fam3 from "../../assets/fam3.png";
import fam4 from "../../assets/fam4.png";
const Family=()=>{
    return(
        <div className={style.family}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <div className={style.gridDiv}>
            <h6 style={{ color: "#2AA7FF" }}>
              CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.
            </h6>
            <h2 style={{ color: "#1B3C74" }}>Our Families</h2>
            <h6 style={{ color: "#77829D" }}>
              We will work with you to develop individualised care plans, including
              management of chronic diseases. If we cannot assist, we can provide
              referrals or advice about the type of practitioner you require. We
              treat all enquiries sensitively and in the strictest confidence.
            </h6>
            </div>
          </Grid>
      
          <Grid item xs={12} md={6} style={{marginTop:"2rem"}} className={style.secondGridDiv}>
            <div style={{display:"flex"}}>
            <div className={style.firstImg}><img src={fam4} alt="fam4" width={200} /></div>
            <div  className={style.secondImg}><img src={fam1} alt="fam1" width={200} /></div>
            </div>
            <div style={{display:"flex"}}>
            <div  className={style.thirdImg}><img src={fam3} alt="fam3" width={200} /></div>
            <div  className={style.fourthImg}><img src={fam2} alt="fam2" width={200} /></div>
            </div>
          </Grid>
        </Grid>
      </div>
      )
}
export default Family;