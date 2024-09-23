import MediNav from './Medify/MediNav/MediNav';
import './App.css';
import { SnackbarProvider } from "notistack";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Booking from './Medify/Booking/Booking';
import MyBookings from "./Medify/MyBookings/MyBookings";

function App() {
  return (
    <SnackbarProvider>
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MediNav />} />
          <Route path="/booking" element={<Booking/>}/>
          <Route path='/myBookings' element={<MyBookings/>}/>
        </Routes>
      </BrowserRouter>
    </div>
    </SnackbarProvider>
  );
}

export default App;
