
import React from "react";
import style from "./Blogs.module.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';
import detoxImg from "../../assets/detoxImg.png";
import smImg from "../../assets/smImg.png"
import  Grid  from "@mui/material/Grid";
const cardData=[{img:detoxImg,medical:"Medical",date:"September 14,2024",line:"6 Tips To Protect Your Mental Health When You’re Sick",smImg:smImg,name:"Rebecca Lee"},
    {img:detoxImg,medical:"Medical",date:"September 14,2024",line:"6 Tips To Protect Your Mental Health When You’re Sick",smImg:smImg,name:"Rebecca Lee"},
    {img:detoxImg,medical:"Medical",date:"September 14,2024",line:"6 Tips To Protect Your Mental Health When You’re Sick",smImg:smImg,name:"Rebecca Lee"}]
const Blogs=()=>{
return(<><div className={style.blog}>
    <p style={{color:"#2AA7FF"}}>Blog & News</p>
    <h2 style={{color:"#1B3C74",paddingBottom:"1rem",fontWeight:"600"}}>Read Our Latest News</h2>
    <Box className={style.cardBox}>
    <Grid container spacing={2}>
    {cardData.map((data)=>(
        <Grid item xs={12} md={4}>
        <Card sx={{ maxWidth: 350, margin: "0 auto" }} >
      <CardMedia
        sx={{ height: 250 }}
        image={data.img}
        title="detox"
      />
      <CardContent sx={{textAlign:"left"}}>
        <Box sx={{display:"flex",justifyContent:"flex-start",marginTop:"10px",marginBottom:"10px"}}>
        <Typography variant="div" style={{paddingRight:"5px"}}>
          {data.medical}
        </Typography> |
        <Typography variant="div"  style={{paddingLeft:"5px"}}>
         {data.date}
        </Typography>
        </Box>
        <Typography variant="div" sx={{ color: 'text.secondary' }}>
         {data.line}
        </Typography>
        <Box sx={{display:"flex",justifyContent:"flex-start",paddingTop:"1rem"}}>
        <img style={{width:"50",height:"50"}} src={data.smImg} alt={data.name}/>
      <Typography variant="div" sx={{ color: 'text.secondary' }}>
         {data.name}
        </Typography>
        </Box>
      </CardContent>
    </Card></Grid>))}
    </Grid>
    </Box>
</div></>)
}
export default Blogs;