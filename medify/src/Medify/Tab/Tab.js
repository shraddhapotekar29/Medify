import React, { useState } from 'react';
import { Tabs, Tab, Box, Button } from '@mui/material';
import style from "./Tab.module.css";
import Modal from "../Modal/Modal";
const data = [
  { day: "Today"},
  { day: "Tomorrow"},
  { day: "Thur, 19 Sept"},
  { day: "Fri, 20 Sept" },
  { day: "Sat, 21 Sept" },
  { day: "Sun, 22 Sept" },
  { day: "Mon, 23 Sept"},
];

const TabComponent = ({ hospitalData,activeTab,setSelectedHospital,selectedHospital }) => {
  const[modal,setModal]=useState(false);
  const [value, setValue] = useState(0);
  const[time,setTime]=useState(null);
  const[date,setDate]=useState(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log("Tab changed to:", newValue);
  };

  const selectModal=(val,time,day)=>{
    setModal(val);
    setTime(time);
    setDate(day);
  }
  return (
    <div>
      <Box sx={{ width: '100%' }}>
        
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="inherit"
          variant="scrollable"
          scrollButtons="auto"
          sx={{
            '& .MuiTabs-indicator': {
              backgroundColor: '#2AA7FF',
            },
          }}
        >
          {data.map((day,index) => (
            <Tab
              key={index}
              label={day.day}
              sx={{
                textTransform: 'none',
                fontSize: '16px',
                fontWeight: 600,
                width: "15rem",
                marginTop:"2rem"
              }}
            />
          ))}
        </Tabs>

        <Box className={style.tabDiv}>
          {data.map((day,index) => (
            <TabPanel key={index} value={value} index={index}>
              <div className={style.session}>
                <h6 className={style.morning}>Morning</h6>
                <Button variant='outlined'  className={style.btns} onClick={() => {selectModal(true,"11.30 AM",day.day)}}>11.30 AM</Button>
              </div>
              <div className={style.session}>
                <h6 className={style.afternoon}>Afternoon</h6>
                {["12.00 PM", "12.30 PM", "01.30 PM", "02.00 PM", "02.30 PM"].map((time) => (
                  <Button
                    key={time}
                    variant='outlined'
                    onClick={() => {selectModal(true,time,day.day)}}
                    className={style.btns}
                  >
                    {time}
                  </Button>
                ))}
              </div>
              <div className={style.session}>
                <h6 className={style.evening}>Evening</h6>
                {["06.00 PM", "06.30 PM", "07.00 PM", "07.30 PM"].map((time) => (
                  <Button
                    key={time}
                    variant='outlined'
                    onClick={() => {selectModal(true,time,day.day)}}
                    className={style.btns}
                  >
                    {time}
                  </Button>
                ))}
              </div>
            </TabPanel>
          ))}
        </Box>
      </Box>
      {modal?<Modal setModal={setModal} hospitalData={hospitalData} activeTab={activeTab} time={time} setSelectedHospital={setSelectedHospital} selectedHospital={selectedHospital} date={date}/>:null}
    </div>
  );
};

const TabPanel = (props) => {
  const { children, value, index } = props;

  return (
    <div>
      {value === index && (
        <Box sx={{ paddingTop: "1rem" }}>
          {children}
        </Box>
      )}
    </div>
  );
};

export default TabComponent;
