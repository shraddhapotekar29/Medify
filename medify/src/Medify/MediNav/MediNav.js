import React,{useState} from "react";
import style from "./MediNav.module.css";
import Navbar from "../Navbar/Navbar";
import drImg from "../../assets/drImg.png";
import {Button,Grid,Box,TextField} from '@mui/material';
import Carousel1 from "../Carousel1/Carousel1";
import Hospital from "../../assets/Hospital.png";
import Doctors from "../../assets/Doctors.png";
import Labs from "../../assets/Labs.png";
import Medical from "../../assets/Medical.png";
import Ambulance from "../../assets/Ambulance.png";
import Specification from "../Specification/Specification";
import Car1 from "../../assets/Car1.png";
import Car2 from "../../assets/Car2.png";
import Car3 from "../../assets/Car3.png";
import dr1 from "../../assets/dr1.png";
import dr2 from "../../assets/dr2.png";
import dr3 from "../../assets/dr3.png";
import PatientCare from "../PatientCare/PatientCare";
import Blogs from "../Blog/Blog";
import Family from "../Families/Family";
import Questions from "../Question/Question";
import Footer from "../Footer/Footer";
import Search from "../Search/Search";


const data=[{img:Car1},{img:Car2},{img:Car3},{img:Car2},{img:Car3}];
const data1=[{img:dr1},{img:dr2},{img:dr3},{img:dr1},{img:dr2},{img:dr1},{img:dr2},{img:dr3}]
const MediNav = () => {
  return (<div className={style.background}>
    <p className={style.headLine}> The health and well-being of our patients and their health care team will always be our priority, so we follow the best practices for cleanliness.</p>
    <div className={style.wrapper}>
      <Navbar />
      <Box sx={{ marginTop: "4rem" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} className={style.gridItem1}>
            <h2 style={{ color: "#102851" }}>Skip the travel! Find Online</h2>
            <h1>Medical <span style={{ color: "#2AA7FF" }}>Centers</span></h1>
            <h3 style={{ color: "#5C6169" }}>Connect instantly with a 24x7 specialist or choose to video visit a particular doctor.</h3>
            <br />
            <Button variant="contained">Find Centers</Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <img src={drImg} alt="drImg" width={400} height={300} style={{objectFit:"contain"}}/>
          </Grid>
        </Grid>
      </Box>
    </div>
    {/* <Box className={style.searchBox}> */}
      <Search/>
      {/* <h5 className={style.imgCardTitle}>You May Be Looking For</h5> */}
      {/* <Box  className={style.imgCard}>
      <div style={{display:"flex",flexDirection:"column"}}><img src={Doctors} alt="Doctors" width={50}/>Doctors</div>
     <div style={{display:"flex",flexDirection:"column"}}><img src={Labs} alt="Labs" width={50}/>Labs</div>
     <div style={{display:"flex",flexDirection:"column"}}><img src={Hospital} alt="Hospital" width={50}/>Hospitals</div>
     <div style={{display:"flex",flexDirection:"column"}}><img src={Medical} alt="Medical" width={50}/>Medicals</div>
     <div style={{display:"flex",flexDirection:"column"}}><img src={Ambulance} alt="Ambulance" width={50}/>Ambulance</div>
    </Box> */}
    {/* </Box> */}
    <div className={style.CarouselDiv}>
    <Carousel1 data={data} />
    </div>
    <div className={style.Specification}>
    <Specification/>
    </div>
    <div className={style.SecondCarouselDiv}>
    <Carousel1 data={data1} drCarousel={true}/>
    </div>
    <div className={style.patientCare}>
      <PatientCare/>
    </div>
    <div className={style.blog}>
      <Blogs/>
    </div>
    <div className={style.family}>
      <Family/>
    </div>
    <div className={style.questions}>
      <Questions/>
    </div>
    <div className={style.footer}>
      <Footer/>
    </div>
    
  </div>)
}
export default MediNav;


