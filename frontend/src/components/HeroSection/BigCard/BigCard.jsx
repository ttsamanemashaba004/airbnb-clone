import { assets } from "../../../assets/assets";
import "./BigCard.css";

const BigCard = () => {
  return (
    <div className="bigcard_container">
      <img className="hero_image" src={assets.hero} alt="" />
      <div className="text_and_button">
        <span className="text">Not sure where to go? Perfect.</span>
        <button className="bigcard_button">{`I'm flexible`}</button>
      </div>
    </div>
  );
};

export default BigCard;
