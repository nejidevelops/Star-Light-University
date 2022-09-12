import React from "react";
// import { useNavigate } from 'react-router-dom'
import stude from "./images/pexels-filipe-sabino-2065490.jpg";
import "./Hero.css"
import { Link } from "react-router-dom";


function Hero(){
    // const navigate = useNavigate();
    return(
        <div className='text-gray-700 flexthem'>
        <div className='hero-image w-full bg-center bg-cover bg-no-repeat h-96 -mt-[44px]'>
          <div className='mx-[4%] flex items-center justify-center h-96'>
            <div className='flex flex-col justify-center'>
              <div className='mb-6 font-extralight text-2xl font-poppins'>
                <p>Are you looking for a school that gives the best courses and learning experience.Be sure to hop in and enroll in our school and be one of Our Ambassador</p>
              </div>
              <div className='flex space-x-4'>
                <Link to="/courses">
                  <button type="button" id="enr"><a href=" " id="enrl">
                    Enroll Now
                  </a></button>
                </Link>
                <Link to="/about">
                  <button type="button" id="ex"><a href=" " id="exp">
                    Explore
                  </a></button>
                </Link>
              </div>
            </div>
            <img src={stude} alt=" " />
          </div>
        </div>
        </div>
    )
}

export default Hero;