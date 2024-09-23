import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { Stack } from "@mui/material";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import style from "./Search.module.css";
import Autocomplete from '@mui/material/Autocomplete';
import { useNavigate } from "react-router-dom";
import { SlLocationPin } from "react-icons/sl";

const Search=()=>{
    const[states,setStates]=useState([]);
    const[cities,setCities]=useState([]);
    const[state,setState]=useState("");
    const[city,setCity]=useState("");

   const navigate=useNavigate();
    const getCityData=async(state)=>{
        try{
        if(state)
        {
        setState(state);
        const response=await fetch(`https://meddata-backend.onrender.com/cities/${state}`);
        const data=await response.json();
        setCities(data);
         console.log("city",data);
        }
    }catch(err){
        console.log(err);
    }}
    
    const getHospitalData = async (state, city) => {
        navigate("/booking", { state: { state:state,city:city } }); 
    };
    
useEffect(()=>{
    const getStateData= async()=>{
        try{
        const response=await fetch("https://meddata-backend.onrender.com/states");
        const data=await response.json();
        setStates(data);
         console.log("state",data);
        }
        catch(err)
        {
            console.log(err);
        }
    }
    getStateData();
},[])
    
    return(<><Grid container className={style.inputGrid}>
        <Grid item xs={12} md={4}>
        <Stack spacing={2} sx={{ width: 300,marginLeft:"0.3rem" }}>
     <Autocomplete
          id="free-solo-demo"
          freeSolo
          options={states.map((option) => option)}
          onChange={(e,value)=>getCityData(value)}
          renderInput={(params) => <TextField {...params} label={<><SlLocationPin style={{marginRight:"1rem",alignItems:"center"}}/>State</>}/>}
    />
        </Stack>
       </Grid>
        <Grid item xs={12} md={4}>
        <Stack spacing={2} sx={{ width: 300 ,marginLeft:"0.3rem"}}>
     <Autocomplete
          id="free-solo-demo"
          freeSolo
          options={cities.map((option) => option)}
          onChange={(e,value)=>setCity(value)}
          renderInput={(params) => <TextField {...params}  label={<><SlLocationPin style={{marginRight:"1rem",alignItems:"center"}}/>City</>} />}
    />
        </Stack>
        </Grid>
        <Grid item xs={12} md={4}>
        <Button variant="contained" sx={{width:"100px",height:"50px"}} onClick={()=>getHospitalData(state,city)}>search</Button>
        </Grid>
        </Grid></>)
}
export default Search;