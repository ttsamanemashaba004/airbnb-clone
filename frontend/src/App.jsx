import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import AirbnbFooter from "./components/FooterSection/AirbnbFooter";
import Locations from "./pages/Locations";
import Listing from "./pages/Listing";
import { ToastContainer } from "react-toastify";
import LoginFront from "./pages/LoginFront";
import Reservations from "./pages/Reservations";

const App = () => {
  return (
    <div>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/listing/:listingId" element={<Listing />} />
        <Route path="/login" element={<LoginFront />} />
        <Route path='/reservations' element={<Reservations />} />
      </Routes>

      <AirbnbFooter />
    </div>
  );
};

export default App;
