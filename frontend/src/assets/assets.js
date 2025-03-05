import airbnb_logo from './Vector.png'
import globe from './globe.png'
import hero from './hero.jpg'
import menu from './menu.png'
import search from './search.png'
import down_arrow from './down-arrow.png'
import avatar from './Avatar.png'
import sandton from './sandton.jpg'
import joburg from './joburg.jpg'
import woodmead from './woodmead.jpg'
import hyde from './hyde.jpg'
import cave from './cave.jpg'
import berry from './berry.jpg'
import giftcard from './giftcard.jpg'
import lady from './lady.jpg'
import globe2 from './globe_2.svg'
import dollar from './dollar.svg'
import facebook from './facebook.svg'
import twitter from './twitter.svg'
import insta from './insta.svg'
import bordeaux from './bordeaux.png'
import bord1 from './bordeaux_1.png'
import bord2 from './bordeaux2.png'
import bord3 from './bordeaux3.png'
import bord4 from './bordeaux4.png'


export const assets = {
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
    insta
}

export const products = [
    {
        _id: "aaaaa",
        listing_title: "Bordeaux Getaway",
        location: "JBordeaux",
        description: "Come and stay in this superb duplex T2, in the heart of the historic center of Bordeaux.Spacious and bright, in a real Bordeaux building in exposed stone, you will enjoy all thecharms of the city thanks to its ideal location. Close to many shops, bars andrestaurants, you can access the apartment by tram A and C and bus routes 27 and 44.",
        enhanced_cleaning: true,
        self_checkin: true,
        amenities: ["Wifi", "Kitchen", "Free Parking"], // you can add more than one
        price: 200,
        type: "Entire Unit", // Other options: Room, Whole Villa
        guest: 3,
        bedrooms: 4,
        bathrooms: 2,
        image: [bordeaux,bord1, bord2, bord3, bord4] // you can add more than one

    }
]