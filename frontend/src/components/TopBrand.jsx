import { FaArrowRightLong } from "react-icons/fa6";
import { banner22, banner23 } from '../assets'
import { useState } from 'react'
import { Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { FaStar } from "react-icons/fa";
import { IoIosHeartEmpty } from "react-icons/io";
import { LiaCompressSolid } from "react-icons/lia";
import { BsArrowRepeat } from "react-icons/bs";
import { IoBagOutline } from "react-icons/io5";

import { TopMen, TopMen2, TopWomen1, TopWomen2, TopBlouse, TopB } from "../constants";

const TopBrand = () => {

const [ tab , setTab ] = useState("men")


  return (
    <div>
      <div className='flex justify-between items-center'>
        <div className="relative cursor-pointer">
          <img src={banner22} alt="jewelrry banner" /> 
          <div className="absolute top-0 font-roboto p-10 flex flex-col gap-3">
            <h2 className="text-[0.85rem]">NEW SEASON</h2>
            <h1 className="text-[2rem]">show your best <br /> jewellery of your life</h1>
            <p className="text-[0.9rem] text-gray-500 mt-3"> Don't miss this opportunity.</p>
            <button className="flex items-center gap-3 md:mt-6 xs:mt-2 mt-4">
              <p className="font-bold text-[0.9rem] ">Shop Now</p>
              <FaArrowRightLong className="text-[1rem]"/>
            </button>
          </div> 
        </div>

        <div className="relative cursor-pointer">
          <img src={banner23} alt="jewelrry banner" />
          <div className="absolute top-0 font-roboto p-10 flex flex-col gap-3">
            <h2 className="text-[0.85rem]">NEW SEASON</h2>
            <h1 className="text-[2rem]">How well do you <br /> Know street fashion ?</h1>
            <p className="text-[0.9rem] text-gray-500 mt-3"> Don't miss this opportunity.</p>
            <button className="flex items-center gap-3 md:mt-6 xs:mt-2 mt-4">
              <p className="font-bold text-[0.9rem] ">Shop Now</p>
              <FaArrowRightLong className="text-[1rem]"/>
            </button>
          </div> 
        </div>
      </div>

      {/* carousel components */}
      <div>
        <div className="flex justify-between items-center py-10">
          <h1 className="text-[1.8rem] font-medium">Our Top Seller Brands</h1>
          <div>
            <div className="flex items-center justify-between gap-8">
                <button 
                  onClick={()=> setTab("men")}
                  className={`${
                    tab === "men" 
                  && 'text-blue-900' } font-medium text-gray-400 hover:text-gray-600`}>
                    Men
                </button>

                <button 
                  onClick={()=> setTab("women")}
                  className={`${
                    tab === "women" 
                  && 'text-blue-900' } font-medium text-gray-400 hover:text-gray-600`}>
                    Women
                </button>

                <button 
                  onClick={()=> setTab("blouse")}
                  className={`${
                    tab === "blouse" 
                  && 'text-blue-900'} font-medium text-gray-400 hover:text-gray-600`}>
                    Blouse & shirts
                </button>

                <button 
                  onClick={()=> setTab("outerwear")}
                  className={`${
                    tab === "outerwear" 
                  && 'text-blue-900' } font-medium text-gray-400 hover:text-gray-600`}>
                    Outerwear
                </button>
              </div>
            </div>
        </div>
      </div>

      {/* tab content */}
      <div>
        {
          tab === "men" && <div>men</div>
        }
        {
          tab === "women" && <div>women</div>
        }
        {
          tab === "blouse" && <div>Blouse & shirts</div>
        }
        {
          tab === "outerwear" && <div>outerwear</div>
        }
      </div>
    </div>
  )
}

export default TopBrand
