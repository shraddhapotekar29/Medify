import React,{useEffect, useState} from "react";
import style from "./Booking.module.css"
import Navbar from "../Navbar/Navbar";
import Questions from "../Question/Question";
import Footer from "../Footer/Footer";
import Search from "../Search/Search";
import { useLocation } from "react-router-dom";
import CardComponent from "../CardComponent/CardComponent";

const Booking=()=>{
    const location = useLocation();
    const [selectedHospital,setSelectedHospital]=useState([]);
    const {state,city } = location.state || {};
    const[hospitalData,setHospitalData]=useState([]);
    useEffect(()=>{
        const hospitalData = async (state, city) => {
            try{
            const response = await fetch(`https://meddata-backend.onrender.com/data?state=${state}&city=${city}`);
            const data = await response.json();
            setHospitalData(data);
            console.log("hospitalData", data);    
            }
            catch(err)
            {
                console.log(err);
            }
        };
        hospitalData(state,city);
    },[state,city])
    
    
return(<>
<div className={style.booking}>
<p className={style.headLine}> The health and well-being of our patients and their health care team will always be our priority, so we follow the best practices for cleanliness.</p>
<div className={style.wrapper}>
<div className={style.navDiv}>
<Navbar color={true}/>
</div>
</div>
<div className={style.searchGrid}>
    <Search/></div>
</div>
{
    hospitalData.length>0?(<div className={style.cardDiv}><CardComponent hospitalData={hospitalData} state={state} city={city} setSelectedHospital={setSelectedHospital} selectedHospital={selectedHospital}/></div>):null
}
<div className={style.question}>
    <Questions/>
</div>
<div className={style.footer}>
    <Footer/>
</div>
</>)
}
export default Booking;
