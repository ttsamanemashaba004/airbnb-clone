import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import AirbnbFooter from "./components/FooterSection/AirbnbFooter";
import Locations from "./pages/Locations";
import Listing from "./pages/Listing";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/listing/:listingId" element={<Listing />} />
      </Routes>

      <AirbnbFooter />
    </div>
  );
};

export default App;
