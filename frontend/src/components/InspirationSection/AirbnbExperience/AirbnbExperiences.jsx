import { assets } from "../../../assets/assets"
import Title from "../Title"
import './AirbnbExperiences.css'

const AirbnbExperiences = () => {
  return (
    <div className="trips_container">
        <Title title="Discover Airbnb Experiences" />
        <div className="airbnb_experiences-row">
            <div className="image-container">
                <img src={assets.cave} alt="" className="background-image"/>
                <div className="content">
                    <h1>Things to do <br /> on your trip</h1>
                    <button>Experiences</button>
                </div>
            </div>
            <div className="image-container">
                <img src={assets.berry} alt="" className="background-image"/>
                <div className="content">
                    <h1>Things to do <br /> from home</h1>
                    <button>Online Experiences</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AirbnbExperiences