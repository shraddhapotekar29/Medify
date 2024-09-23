import React from "react";
import Grid from "@mui/material/Grid";
import style from "./Question.module.css";
import question from "../../assets/question.png";
import plus from "../../assets/plus.png"
const queArr=[{id:1,que:"Why choose our medical for your family?",ans:"abcd"},{id:2,que:"Why we are different from others?",ans:"abcd"},{id:3,que:"Trusted & experience senior care & love",ans:"abcd"},
    {id:4,que:"How to get appointment for emergency cases?",ans:"abcd"}]
const Questions=()=>{
    return(<div className={style.size}>
    <h6 style={{color:"#2AA7FF",paddingTop:"2rem"}}>Get Your Answer</h6>
    <h2>Frequently Asked Questions</h2>
    <div className={style.queGrid}>
    <Grid container spacing={2}>
        <Grid item xs={12} md={6} className={style.firstGrid}><div className={style.imgDiv}><img src={question} alt="question"/></div></Grid>
        <Grid item xs={12} md={6} className={style.secondGrid}>
        <div className="accordion" id="accordionExample">
            {queArr.map((ques)=>(
                <div className="accordion-item" style={{marginBottom:"2rem"}} >
    <h5 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${ques.id}`} aria-expanded="true" aria-controls={`#collapse${ques.id}`}>
       <div className={style.queDiv}><div style={{textAlign:"left"}}>{ques.que}</div><div style={{width:"50px"}}><img src={plus} alt="plus"/></div></div>
      </button>
    </h5>
    <div id={`collapse${ques.id}`} className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        {ques.ans} </div>
    </div>
  </div>))}
</div>
        </Grid>
    </Grid>
    </div>
    </div>)
}
export default Questions;