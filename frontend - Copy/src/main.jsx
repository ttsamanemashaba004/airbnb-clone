import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import LocationContextProvider from "./context/LocationContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <LocationContextProvider>
      <App />
    </LocationContextProvider>
  </BrowserRouter>
);
