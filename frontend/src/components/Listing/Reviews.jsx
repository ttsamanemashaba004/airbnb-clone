import { assets } from "../../assets/assets";
import "./Reviews.css";

const Reviews = () => {
  return (
    <div className="reviews-container">
      <div className="review-title">
        <div className="review-icon-image">
          <img src={assets.reviewstar} alt="" />
          <span>5.0</span>
        </div>
        <div className="ellipse"></div>
        <span>7 reviews</span>
      </div>
      <div className="review-ratings">
        <div className="review-ratings-column">
          <div className="review-category">
            <span className="label">Cleanliness</span>
            <img src={assets.frame} alt="" />
          </div>
          <div className="review-category">
            <span className="label">Communication</span>
            <img src={assets.frame} alt="" />
          </div>
          <div className="review-category">
            <span className="label">Check-in</span>
            <img src={assets.frame} alt="" />
          </div>
        </div>
        <div className="review-ratings-column">
          <div className="review-category">
            <span className="label">Accuracy</span>
            <img src={assets.frame} alt="" />
          </div>
          <div className="review-category">
            <span className="label">Location</span>
            <img src={assets.frame2} alt="" />
          </div>
          <div className="review-category">
            <span className="label">Value</span>
            <img src={assets.frame3} alt="" />
          </div>
        </div>
      </div>
      <div className="review-comments">
        <div className="review-comments-row">
          <div className="review-comments-row-comment">
            <div className="review-user">
              <img src={assets.jose} alt="" />
              <div className="review-user-title">
                <p>Jose</p>
                <p className="review-sub">December 2021</p>
              </div>
            </div>
            <p className="review-comment">Host was very attentive.</p>
          </div>
          <div className="review-comments-row-comment">
            <div className="review-user">
              <img src={assets.luke} alt="" />
              <div className="review-user-title">
                <p>Luke</p>
                <p className="review-sub">December 2021</p>
              </div>
            </div>
            <p className="review-comment">Nice place to stay!</p>
          </div>
        </div>
        <div className="review-comments-row">
          <div className="review-comments-row-comment">
            <div className="review-user">
              <img src={assets.Shayna} alt="" />
              <div className="review-user-title">
                <p>Shayna</p>
                <p className="review-sub">December 2021</p>
              </div>
            </div>
            <p className="review-comment">
              Wonderful neighborhood, easy access to restaurants and the subway,
              cozy studio apartment with a super comfortable bed. Great host,
              super helpful and responsive. Cool murphy bed...
            </p>
          </div>
          <div className="review-comments-row-comment">
            <div className="review-user">
              <img src={assets.Josh} alt="" />
              <div className="review-user-title">
                <p>Josh</p>
                <p className="review-sub">December 2021</p>
              </div>
            </div>
            <p className="review-comment">
              Well designed and fun space, neighborhood has lots of energy and
              amenities.
            </p>
          </div>
        </div>
        <div className="review-comments-row">
          <div className="review-comments-row-comment">
            <div className="review-user">
              <img src={assets.Vladko} alt="" />
              <div className="review-user-title">
                <p>Vladko</p>
                <p className="review-sub">November 2020</p>
              </div>
            </div>
            <p className="review-comment">
              This is amazing place. It has everything one needs for a monthly
              business stay. Very clean and organized place. Amazing hospitality
              affordable price.
            </p>
          </div>
          <div className="review-comments-row-comment">
            <div className="review-user">
              <img src={assets.Jennifer} alt="" />
              <div className="review-user-title">
                <p>Jennifer</p>
                <p className="review-sub">January 2022</p>
              </div>
            </div>
            <p className="review-comment">
              A centric place, near of a sub station and a supermarket with
              everything you need. ...
            </p>
            <div className="text-icon">
              <span className="show-more">{`Show more`}</span>
              <span className="arrow">{`>`}</span>
            </div>
          </div>
        </div>
      </div>
      <button className="comments-button">Show all 12 reviews</button>
    </div>
  );
};

export default Reviews;
