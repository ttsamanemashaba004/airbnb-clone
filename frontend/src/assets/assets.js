import airbnb_logo from "./Vector.png";
import globe from "./globe.png";
import hero from "./hero.jpg";
import menu from "./menu.png";
import search from "./search.png";
import down_arrow from "./down-arrow.png";
import avatar from "./Avatar.png";
import sandton from "./sandton.jpg";
import joburg from "./joburg.jpg";
import woodmead from "./woodmead.jpg";
import hyde from "./hyde.jpg";
import cave from "./cave.jpg";
import berry from "./berry.jpg";
import giftcard from "./giftcard.jpg";
import lady from "./lady.jpg";
import globe2 from "./globe_2.svg";
import dollar from "./dollar.svg";
import facebook from "./facebook.svg";
import twitter from "./twitter.svg";
import insta from "./insta.svg";
import bordeaux from "./bordeaux.png";
import bord1 from "./bordeaux_1.png";
import bord2 from "./bordeaux2.png";
import bord3 from "./bordeaux3.png";
import bord4 from "./bordeaux4.png";
import red_logo from "./red_logo.svg";
import search2 from "./search_icon2.svg";
import globe3 from "./globe3.svg";
import menu2 from "./menu2.svg";
import heart from "./heart.svg";
import star from "./star.svg";
import charming_bord from "./waterfront_bord.jpg";
import historic from "./historic_bord.jpg";
import rating from "./rating.svg";
import superuser from "./superuser.svg";
import badge from "./badge.svg";
import share from "./share.svg";
import heart2 from "./heart2.svg";
import avatar2 from "./avatag2.svg";
import star2 from "./star3.svg";
import flag from "./flag.svg";
import house from "./house.svg";
import stars from "./stars.svg";
import door from "./door.svg";
import calendar from "./calender.svg";
import right_des from "./right_des.svg";
import bord_bed from "./bord_bed.png";
import gardenview from "./garden_view.svg";
import garden from "./garden_view.svg";
import wifi from "./wifi.svg";
import free_washer from "./free_washer.svg";
import airCondition from "./air_conditioning.svg";
import fridge from "./fridge.svg";
import kitchen from "./kitchen.svg";
import pet from "./pet.svg";
import dryer from "./dreyer.svg";
import security from "./security.svg";
import bicycle from "./bicycle.svg";

export const assets = {
  garden,
  wifi,
  free_washer,
  airCondition,
  fridge,
  kitchen,
  pet,
  dryer,
  security,
  bicycle,
  airbnb_logo,
  globe,
  hero,
  menu,
  search,
  down_arrow,
  avatar,
  sandton,
  joburg,
  woodmead,
  hyde,
  cave,
  berry,
  giftcard,
  lady,
  globe2,
  dollar,
  facebook,
  twitter,
  insta,
  red_logo,
  search2,
  globe3,
  menu2,
  heart,
  star,
  rating,
  superuser,
  badge,
  share,
  heart2,
  avatar2,
  star2,
  flag,
  house,
  stars,
  door,
  calendar,
  right_des,
  bord_bed,
  gardenview,
};

export const locations = [
  {
    _id: "aaaaa",
    listing_title: "Bordeaux Getaway",
    location: "Bordeaux",
    country: "France",
    host: "Ghazal",
    description:
      "Come and stay in this superb duplex T2, in the heart of the historic center of Bordeaux.Spacious and bright, in a real Bordeaux building in exposed stone, you will enjoy all thecharms of the city thanks to its ideal location. Close to many shops, bars andrestaurants, you can access the apartment by tram A and C and bus routes 27 and 44.",
    enhanced_cleaning: true,
    self_checkin: true,
    amenities: ["Wifi", "Kitchen", "Garden view", "Pets allowed"], // you can add more than one
    price: 200,
    type: "Entire Unit", // Other options: Room, Whole Villa
    guests: "2",
    bedrooms: 1,
    bathrooms: 2,
    bed_image: [bord_bed],
    image: [bordeaux, bord1, bord2, bord3, bord4], // you can add more than one
  },
  {
    _id: "aaaab",
    listing_title: "Charming Waterfront Condo",
    location: "Bordeaux",
    country: "France",
    host: "Ghazal",
    description:
      "Come and stay in this superb duplex T2, in the heart of the historic center of Bordeaux.Spacious and bright, in a real Bordeaux building in exposed stone, you will enjoy all thecharms of the city thanks to its ideal location. Close to many shops, bars andrestaurants, you can access the apartment by tram A and C and bus routes 27 and 44.",
    enhanced_cleaning: true,
    self_checkin: true,
    amenities: ["Wifi", "Kitchen", "Garden view"], // you can add more than one
    price: 200,
    type: "Entire Unit", // Other options: Room, Whole Villa
    guests: "6",
    bedrooms: 4,
    bathrooms: 2,
    bed_image: [bord_bed],
    image: [charming_bord], // you can add more than one
  },
  {
    _id: "aaaac",
    listing_title: "Historic City Center Home",
    location: "Bordeaux",
    country: "France",
    host: "Ghazal",
    description:
      "Come and stay in this superb duplex T2, in the heart of the historic center of Bordeaux.Spacious and bright, in a real Bordeaux building in exposed stone, you will enjoy all thecharms of the city thanks to its ideal location. Close to many shops, bars andrestaurants, you can access the apartment by tram A and C and bus routes 27 and 44.",
    enhanced_cleaning: true,
    self_checkin: true,
    amenities: ["Wifi", "Kitchen", "Garden view"], // you can add more than one
    price: 200,
    type: "Entire Unit", // Other options: Room, Whole Villa
    guests: "4",
    bedrooms: 4,
    bathrooms: 2,
    bed_image: [bord_bed],
    image: [historic], // you can add more than one
  },
];
