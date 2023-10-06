import React, { useEffect, useState } from "react";
import '../css/bootstrap.css'
import '../css/style.css'
import Logo from '../images/hero-bg.jpg'

import Slider from "../components/Slider";
import OurMenu from "../components/OurMenu";


const Home = () => {
    
       
    
    return(
        <>
         <div className="hero_area">
   
   <Slider />  
  </div>
  <OurMenu />
        </>
    )
}
export default Home;