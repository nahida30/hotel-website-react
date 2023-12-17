import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Banner from "./Banner/Banner";
import TrandingDestination from "./TrandingDestination/TrandingDestination";
import PropertyType from "./PropertyType/PropertyType";





const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Banner></Banner>
            <TrandingDestination></TrandingDestination>
            <PropertyType></PropertyType>
            
        
            <Footer></Footer>
            
        </div>
    );
};

export default Main;