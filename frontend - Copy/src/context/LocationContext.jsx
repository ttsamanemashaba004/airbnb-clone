import { createContext } from "react";
import { locations } from "../assets/assets";

export const LocationContext = createContext();

const LocationContextProvider = (props) => {

    const currency = '$'

    const value = {
        locations, currency
    }

    return (
        <LocationContext.Provider value={value}>
           {props.children}     
        </LocationContext.Provider>
    )
}

export default LocationContextProvider