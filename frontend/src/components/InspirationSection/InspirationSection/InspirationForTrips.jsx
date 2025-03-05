import { assets } from "../../../assets/assets";
import Title from "../Title";
import CityCard from "./CItyCard";
import "./InspirationForTrips.css";

const InspirationForTrips = () => {
  const cities = [
    {
      image: `${assets.sandton}`,
      title: "Sandton City Hotel",
      distance: "53",
      color: "#CC2D4A"
    },
    {
      image: `${assets.joburg}`,
      title: "Joburg City Hotel",
      distance: "168",
      color: "#BC1A6E"
    },
    {
      image: `${assets.woodmead}`,
      title: "Woodmead Hotel",
      distance: "30",
      color: "#DE3151"
    },
    {
      image: `${assets.hyde}`,
      title: "Hyde Park Hotel",
      distance: "49",
      color: "#D93B30"
    },
    {
      image: `${assets.joburg}`,
      title: "Joburg City Hotel",
      distance: "168",
      color: "#BC1A6E"
    }

  ]
  return (
    <div className="trips_container">
      <Title title="Inspiration for your next trip"/>
      <div className="city_cards">
        {
          cities.map((item,index)=>(
            <CityCard key={index} image={item.image} title={item.title} distance={item.distance} color={item.color} />
          ))
        }
      </div>
    </div>
  );
};

export default InspirationForTrips;
