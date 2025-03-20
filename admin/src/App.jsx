import { useEffect } from "react";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Listings from "./pages/Listings";
import Reservations from "./pages/Reservations";
import CreateListing from "./pages/CreateListing";

export const backendUrl = import.meta.env.VITE_BACKEND_URL;
export const currency = "$";

const App = () => {
  const [token, setToken] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : ""
  );

  useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]);

  return (
    <div className="app-container">
      <ToastContainer />
      {token === "" ? (
        <Login setToken={setToken} />
      ) : (
        <>
          <Navbar setToken={setToken} />
          <Routes>
            <Route path="/listings" element={<Listings token={token} />} />
            <Route path="/reservations" element={<Reservations token={token} />} />
            <Route path="/create" element={<CreateListing token={token} />} />
          </Routes>
        </>
      )}
    </div>
  );
};

export default App;
