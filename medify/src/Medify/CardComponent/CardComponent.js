import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import advertise from "../../assets/advertise.png";
import hospitalImg from "../../assets/hospitalImg.png";
import style from "./CardComponent.module.css";
import { MdOutlineThumbUp } from "react-icons/md";
import TabComponent from "../Tab/Tab";
import Button from "@mui/material/Button";

const CardComponent = ({ hospitalData, state, city,setSelectedHospital,selectedHospital,btn}) => {
  const [activeTab, setActiveTab] = useState(-1);
  const [showBtn,setShowBtn]=useState(false);
  const [count, setCount] = useState(Array(50).fill(0));

  const btnFn = (idx) => {
    if (activeTab === idx) {
      setShowBtn(!showBtn);
    } else {
      setActiveTab(idx);
      setShowBtn(true);
    }
  };

  const incrementCount = (index) => {
    const newCount = [...count]; 
    newCount[index] += 1; 
    setCount(newCount); 
  };
  return (
    <div className={style.cardData}>
      {!btn && hospitalData.length > 0  ? (
        <div className={style.header}>
          <h5>{hospitalData.length} medical centers available in {state}</h5>
          <p>Book appointments with minimum wait-time & verified doctor details</p>
        </div>
      ) : null}

      <div className={style.cardDiv}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8} sx={{marginBottom:"2rem"}}>
            {hospitalData.map((hospital, index) => (
              <div key={index}>
                <div className={style.cards}>
                    <div className={style.row}>
                  <div className={style.imgDiv}>
                    <img src={hospitalImg} alt="hospitalImg" />
                  </div>
                  <div>
                    <h5 style={{color:"#14BEF0"}}>{hospital["Hospital Name"]}</h5>
                    <h6 style={{ textTransform: "none" }}>
                      {hospital.City.toLowerCase()}, {hospital.State}
                    </h6>
                    <p>{hospital["Hospital Type"]}</p>
                    {!btn &&<p>
                      <span style={{ color: "#02A401" }}>FREE</span> ₹500 Consultation fee at clinic
                    </p>}
                    <div
                      style={{
                        width: "4rem",
                        height: "2rem",
                        backgroundColor: "#02A401",
                        alignItems: "center",
                        borderRadius: "8px",
                        display: "flex",
                        justifyContent: "center"
                      }}
                    >
                      <MdOutlineThumbUp style={{ width: 40 }}  onClick={()=>incrementCount(index)}/>
                      {count[index]}
                    </div>
                  </div>
                 {btn?(
                  <div style={{display:"flex",justifyContent:"flex-start",alignItems:"flex-start"}}>
                  <Button variant="outlined" style={{marginRight:"1rem"}}>{hospital.Time}</Button>
                  <Button variant="contained">
                   {hospital.Date}
                  </Button>
                  </div>
                 ):(<div style={{marginTop:"5rem",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                    <h5 style={{color:"#01A400"}}>Available Today</h5>
                    <Button variant="contained" onClick={() => btnFn(index)}>
                      Book FREE Center Visit
                    </Button>
                    </div>)}
                  </div>
                  {((activeTab===index) && (showBtn) &&(
                  <div className={style.tabComponent}>
                    <TabComponent hospitalData={hospitalData} activeTab={activeTab} setSelectedHospital={setSelectedHospital} selectedHospital={selectedHospital}/>
                  </div>
                ))}
                </div>

              </div>
            ))}
          </Grid>
          <Grid item xs={12} md={4}>
        <div>
          <img src={advertise} alt="advertise" />
        </div>
      </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default CardComponent;
