import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import styles from './MyBookings.module.css';
import Footer from "../Footer/Footer";
import { TextField } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import CardComponent from "../CardComponent/CardComponent";
import { SlLocationPin } from "react-icons/sl";
import Stack from "@mui/material/Stack";

const MyBookings = () => {
    const [bookedHospital, setBookedHospital] = useState([]);
    const [filteredHospital, setFilteredHospital] = useState([]);

    useEffect(() => {
        const getFormData = localStorage.getItem("formData");
        if (getFormData) {
            const parsedData = JSON.parse(getFormData);
            setBookedHospital(parsedData);
            setFilteredHospital(parsedData);
            console.log("Booked Hospitals:", parsedData);
        }
    }, []);

    const getHospitalData = (value) => {
        if (value) {
            const newData = bookedHospital.filter((hospital) => hospital["Hospital Name"] === value);
            setFilteredHospital(newData);
        } else {
            setFilteredHospital(bookedHospital); 
        }
    };

    return (
        <>
            <div className={styles.booking}>
                <p className={styles.headLine}>
                    The health and well-being of our patients and their health care team will always be our priority, so we follow the best practices for cleanliness.
                </p>
                <div className={styles.wrapper}>
                    <div className={styles.navDiv}>
                        <Navbar color={true} />
                    </div>
                </div>

                <div className={styles.searchGrid}>
                    <Stack spacing={2} sx={{ width: 300, marginLeft: "0.3rem" }}>
                        <Autocomplete
                            id="free-solo-demo"
                            freeSolo
                            options={bookedHospital.map((hospital) => hospital["Hospital Name"])}
                            getOptionLabel={(option) => option}
                            onChange={(e, value) => getHospitalData(value)}
                            renderInput={(params) => (
                                <TextField 
                                    {...params} 
                                    label={
                                        <span style={{ display: 'flex', alignItems: 'center' }}>
                                            <SlLocationPin style={{ marginRight: "1rem" }} />
                                            Search By Hospital
                                        </span>
                                    } 
                                />
                            )}
                        />
                    </Stack>
                </div>
            </div>
            <div className={styles.cardDiv}>
                <CardComponent hospitalData={filteredHospital} btn={true} />
            </div>
            <div className={styles.footer}>
                <Footer />
            </div>
        </>
    );
};

export default MyBookings;
