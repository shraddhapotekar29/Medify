import React, { useState } from "react";
import style from "./Modal.module.css";
import { Button } from "@mui/material";
import { useSnackbar } from "notistack";
const Modal = ({hospitalData,setModal,activeTab,time,selectedHospital,setSelectedHospital,date }) => {
  const { enqueueSnackbar } = useSnackbar();
  console.log(date);
    console.log("time",time);
    console.log("tab",activeTab);
  

    const handleSubmit = (e) => {
        e.preventDefault();
    const filteredHospital = hospitalData[activeTab]; 
    console.log("Selected Hospital:", filteredHospital);
    
    if (filteredHospital && !selectedHospital.includes(filteredHospital)) {
      setSelectedHospital(prevData => {
        const newData = [...prevData, { hospital: filteredHospital, time: time, date:date }];
        // console.log("Booked:", filteredHospital["Hospital Name"], "for", time);
        // console.log("Updated Selected Hospitals:", newData); 
        const formData = newData.map((data) => ({
          "Hospital Name": data.hospital["Hospital Name"],
          "City": data.hospital["City"],
          "State": data.hospital["State"],
          "Hospital Type": data.hospital["Hospital Type"],
          "Time": data.time,
          "Date":data.date,
      }));
      
        console.log("formData",formData);
        localStorage.setItem("formData",JSON.stringify(formData));
         return newData;
      });
    }
    enqueueSnackbar("Booking Successful...", { variant: "success" });
    setModal(false);
  };

 
    
    return (<>
        <div className={style.modalWrapper}></div>
        <div className={style.container}>
            <form onSubmit={handleSubmit}>
            <h2>confirm Booking</h2>
            <Button variant="contained" type="submit">Confirm</Button>
            <button onClick={() => setModal(false)}>Cancel</button>
            </form>
        </div>
    </>)
}
export default Modal;