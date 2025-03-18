import { assets } from "../../assets/assets";
import "./ThingsToKnow.css";

const ThingsToKnow = () => {
  return (
    <div className="to-know-container">
      <p className="to-know-header">Things to know</p>
      <div className="to-know-columns">
        {/* Column */}
        <div className="to-know-column">
          <p className="to-know-column-title">House rules</p>
          <div className="to-know-list">
            <div className="to-know-icon-text">
              <img src={assets.clock} alt="" />
              <p className="to-know-text">Check-in: After 4:00 PM</p>
            </div>
            <div className="to-know-icon-text">
              <img src={assets.clock} alt="" />
              <p className="to-know-text">Checkout: 10:00 AM</p>
            </div>
            <div className="to-know-icon-text">
              <img src={assets.door_enter} alt="" />
              <p className="to-know-text">Self check-in with lockbox</p>
            </div>
            <div className="to-know-icon-text">
              <img src={assets.shopping} alt="" />
              <p className="to-know-text">
                Not suitable for infants (under 2 years)
              </p>
            </div>
            <div className="to-know-icon-text">
              <img src={assets.fire} alt="" />
              <p className="to-know-text">No smoking</p>
            </div>
            <div className="to-know-icon-text">
              <img src={assets.bone} alt="" />
              <p className="to-know-text">No pets</p>
            </div>
            <div className="to-know-icon-text">
              <img src={assets.party} alt="" />
              <p className="to-know-text">No parties or events</p>
            </div>
          </div>
        </div>
        {/* Column */}
        <div className="to-know-column">
          <p className="to-know-column-title">Health & safety</p>
          <div className="to-know-list">
            <div className="to-know-icon-text">
              <img src={assets.sparkle} alt="" />
              <p className="to-know-text">{`Committed to Airbnb's enhanced cleaning  process. Show more`}</p>
            </div>
            <div className="to-know-icon-text">
              <img src={assets.spray_spaint} alt="" />
              <p className="to-know-text">{`Airbnb's social-distancing and other COVID-19-related guidelines apply`}</p>
            </div>
            <div className="to-know-icon-text">
              <img src={assets.wind} alt="" />
              <p className="to-know-text">Carbon monoxide alarm</p>
            </div>
            <div className="to-know-icon-text">
              <img src={assets.washer} alt="" />
              <p className="to-know-text">Smoke alarm</p>
            </div>
            <div className="to-know-icon-text">
              <img src={assets.card} alt="" />
              <p className="to-know-text">
                Security Deposit - if you damage the home, you may be charged up
                to $566
              </p>
            </div>
            <div className="text-icon">
              <span className="show-more">{`Show more`}</span>
              <span className="arrow">{`>`}</span>
            </div>
          </div>
        </div>
        {/* Column */}
        <div className="to-know-column">
          <p className="to-know-column-title">Cancellation policy</p>
          <div className="to-know-list">
            <div className="to-know-icon-text">
              <p className="to-know-text-3">Free cancellation before Feb 14</p>
            </div>
            <div className="text-icon">
              <span className="show-more">{`Show more`}</span>
              <span className="arrow">{`>`}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThingsToKnow;
