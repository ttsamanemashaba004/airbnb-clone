import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { LocationContext } from "../context/LocationContext";
import { toast } from "react-toastify";
import LocationsNavbar from "../components/LocationsSearch/Navbar/LocationsNavbar";
import './Reservations.css'

const Reservations = () => {
  const { backendUrl, token } = useContext(LocationContext);

  const [orderData, setorderData] = useState([]);

  const loadOrderData = async () => {
    try {
      if (!token) {
        return null;
      }

      const response = await axios.post(
        backendUrl + "/api/reservation/userorders",
        {},
        { headers: { token } }
      );

      if (response.data.success) {
        const allReservations = response.data.reservations.map(
          (reservation) => {
            return {
             
              _id: reservation._id,
              name: reservation.userId?.name,
              checkInDate: reservation.checkInDate,
              checkOutDate: reservation.checkOutDate,
              property:reservation.propertyId?.listing_title
              
            };
          }
        );

        setorderData(allReservations.reverse());
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const handleDelete = async (reservationId) => {
    try {
      
      const response = await axios.post(
        backendUrl + "/api/reservation/remove",
        { reservationId }, 
        { headers: { token } }
      );
  
      if (response.data.success) {
        toast.success("Reservation deleted successfully!");
       
        setorderData((prevData) => prevData.filter((item) => item._id !== reservationId));
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete reservation");
    }
  };
  

  useEffect(() => {
    loadOrderData();
  }, [token]);

  return (
    <div className="reservations-container">
      <LocationsNavbar />

      <div className="reservations-table-container">
        <span className="reservations-header">My Reservations</span>

        <table className="reservations-table">
          <thead>
            <tr>
              <th>Booked By</th>
              <th>Property</th>
              <th>Check-in</th>
              <th>Check-out</th>
              <th>Actions</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {orderData.map((res, index) => (
              <tr key={index}>
                <td>{res.name}</td>
                <td>{res.property}</td>
                <td>{res.checkInDate}</td>
                <td>{res.checkOutDate}</td>
                <td>
                  <button
                    onClick={() => handleDelete(res._id)}
                    className="delete-button"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Reservations;
