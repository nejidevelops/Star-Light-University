import React from "react";
// import { useNavigate } from 'react-router-dom';

function Hero(){
    // const navigate = useNavigate();
    return(
        <div className='text-gray-700'>
        <div className='hero-image w-full bg-center bg-cover bg-no-repeat h-96 -mt-[44px]'>
          <div className='mx-[4%] flex items-center justify-center w-1/2 h-96'>
            <div className='flex flex-col justify-center'>
              <div className='mb-6 font-extralight text-2xl font-poppins'>
                <p>Are you looking for a school that gives the best courses and learning experience.Be sure to hop in and enroll in our school and be one of Our Ambassador</p>
              </div>
              <div className='flex space-x-4'>
                <button className='border-2 border-yellow-600 rounded-full hover:text-white hover:bg-yellow-600 px-6 py-1.5 transition duration-150'>Enroll Now</button>
              </div>
            </div>
          </div>
        </div>
        </div>
    )
}

export default Hero;