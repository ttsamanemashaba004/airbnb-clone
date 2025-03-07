import { useState } from "react";
import "./InspirationFooter.css";

const InspirationFooter = () => {
  const [dist1, setDist1] = useState(true);
  const [dist2, setDist2] = useState(false);
  const [dist3, setDist3] = useState(false);
  const [dist4, setDist4] = useState(false);
  const [dist5, setDist5] = useState(false);
  const [dist6, setDist6] = useState(false);
  return (
    <div className="pre_footer_container">
      <div className="prefooter_header">
        <h1>Inspiration for future getaways</h1>
        <div className="tab_bar">
          <div
            className="tab"
            onClick={() => {
              setDist1(true);
              setDist2(false);
              setDist3(false);
              setDist4(false);
              setDist5(false);
              setDist6(false);
            }}
          >
            <p className={`${dist1 ? "" : "offline"}`}>Destination for arts & culture</p>
            <hr className={`${dist1 ? "" : "hide_hr"}`}/>
          </div>
          <div
            className="tab"
            onClick={() => {
              setDist1(false);
              setDist2(true);
              setDist3(false);
              setDist4(false);
              setDist5(false);
              setDist6(false);
            }}
          >
            <p className={`${dist2 ? "" : "offline"}`}>Destinations for outdoor adventure</p>
            <hr className={`${dist2 ? "" : "hide_hr"}`} />
          </div>
          <div
            className="tab"
            onClick={() => {
              setDist1(false);
              setDist2(false);
              setDist3(true);
              setDist4(false);
              setDist5(false);
              setDist6(false);
            }}
          >
            <p className={`${dist3 ? "" : "offline"}`}>Mountain cabins</p>
            <hr className={`${dist3 ? "" : "hide_hr"}`}/>
          </div>
          <div
            className="tab"
            onClick={() => {
              setDist1(false);
              setDist2(false);
              setDist3(false);
              setDist4(true);
              setDist5(false);
              setDist6(false);
            }}
          >
            <p className={`${dist4 ? "" : "offline"}`}>Beach destinations</p>
            <hr className={`${dist4 ? "" : "hide_hr"}`}/>
          </div>
          <div
            className="tab"
            onClick={() => {
              setDist1(false);
              setDist2(false);
              setDist3(false);
              setDist4(false);
              setDist5(true);
              setDist6(false);
            }}
          >
            <p className={`${dist5 ? "" : "offline"}`}>Popular destinations</p>
            <hr className={`${dist5 ? "" : "hide_hr"}`}/>
          </div>
          <div
            className="tab"
            onClick={() => {
              setDist1(false);
              setDist2(false);
              setDist3(false);
              setDist4(false);
              setDist5(false);
              setDist6(true);
            }}
          >
            <p className={`${dist6 ? "" : "offline"}`}>Unique Stays</p>
            <hr className={`${dist6 ? "" : "hide_hr"}`}/>
          </div>
        </div>
      </div>
      <div className="prefooter_links">
        <div className="title_subtitle">
            <p className="title">Phoenix</p>
            <p className="subtitle">Arizona</p>
        </div>
        <div className="title_subtitle">
            <p className="title">Hot Springs</p>
            <p className="subtitle">Arkansas</p>
        </div>
        <div className="title_subtitle">
            <p className="title">Los Angeles</p>
            <p className="subtitle">California</p>
        </div>
        <div className="title_subtitle">
            <p className="title">San Diego</p>
            <p className="subtitle">California</p>
        </div>
      </div>
      <div className="prefooter_links">
        <div className="title_subtitle">
            <p className="title">San Francisco</p>
            <p className="subtitle">California</p>
        </div>
        <div className="title_subtitle">
            <p className="title">Barcelona</p>
            <p className="subtitle">Catalonia</p>
        </div>
        <div className="title_subtitle">
            <p className="title">Prague</p>
            <p className="subtitle">Czechia</p>
        </div>
        <div className="title_subtitle">
            <p className="title">Washington</p>
            <p className="subtitle">District of Columbia</p>
        </div>
      </div>
      <div className="prefooter_links">
        <div className="title_subtitle">
            <p className="title">Keswick</p>
            <p className="subtitle">England</p>
        </div>
        <div className="title_subtitle">
            <p className="title">London</p>
            <p className="subtitle">England</p>
        </div>
        <div className="title_subtitle">
            <p className="title">Scarborough</p>
            <p className="subtitle">England</p>
        </div>
        <div className="title_subtitle">
            <p className="title underline">Show more</p>
        </div>
      </div>

    </div>
  );
};

export default InspirationFooter;
