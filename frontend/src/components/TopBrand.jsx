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

import { TopMen1, TopMen2, TopWomen1, TopWomen2, TopBlouse1, TopBlouse2, Outwear1, Outwear2 } from "../constants";

const TopBrand = () => {

const [ tab , setTab ] = useState("men")

const [activeImageIndices, setActiveImageIndices] = useState({});

  const handleHover = (id, event) => {
    const container = event.currentTarget;
    const xPosition = event.clientX - container.getBoundingClientRect().left;
    const percentage = (xPosition / container.clientWidth) * 100;

    let newIndex = 1; // Default to img1

    if (percentage > 25 && percentage <= 50) {
      newIndex = 2;
    } else if (percentage > 50 && percentage <= 75) {
      newIndex = 3;
    } else if (percentage > 75) {
      newIndex = 4;
    }

    setActiveImageIndices((prev) => ({ ...prev, [id]: newIndex }));
  };

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
        <div className="flex justify-between items-center pt-10">
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
          tab === "men" && 
          <div className="relative">
            <Swiper
            // install Swiper modules
            modules={[Pagination, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
            speed={2000}
            parallax
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <div className="flex overflow-x-auto gap-8 holder relative py-10">
              {TopMen1.map((item) => (
                <div
                  key={item.id}
                  className="flex-none relative"
                  onMouseMove={(event) => handleHover(item.id, event)}
                >
                  <div className="img-holder">
                    <img
                      className="object-cover w-[290px] h-[500px] cursor-pointer"
                      src={item[`img${activeImageIndices[item.id] || 1}`]}
                      alt={`product-${item.id}`}
                    />
                    {/* side functions */}
                    <div className="sideBtns absolute top-5 right-5 text-[2.2rem] flex flex-col gap-3">
                      <IoIosHeartEmpty className="p-2 bg-white rounded-full text-gray-600 hover:bg-red-500 hover:text-white hover:font-medium"/>
                      <LiaCompressSolid className="p-2 bg-white rounded-full text-gray-600 hover:bg-red-500 hover:text-white hover:font-medium"/>
                      <BsArrowRepeat className="p-2 bg-white rounded-full text-gray-600 hover:bg-red-500 hover:text-white hover:font-medium"/>
                      <IoBagOutline className="p-2 bg-white rounded-full text-gray-600 hover:bg-red-500 hover:text-white hover:font-medium"/>
                    </div>
                  </div>
                  <div className="bg-white flex flex-col gap- my-3">
                    <div className="flex  items-center gap-3"><FaStar className="text-[0.8rem] text-yellow-400"/> <span className="text-[0.8rem] font-medium">{item?.review}</span></div>
                    <p className="text-[0.8rem] capitalize">{item?.name}</p>
                    <div className="flex items-center gap-5 text-[0.9rem]">
                      <span className="text-gray-400 line-through">{item?.oldPrice}</span>
                      <span>{item?.price}</span>
                    </div>
                  </div>
                  <div className="absolute top-4 left-2  px-2 py-1 text-[0.7rem] bg-white text-green-500 font-medium">
                    {item.tag}
                  </div>
                </div> 
              ))}
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="flex overflow-x-auto gap-8 holder relative py-10">
              {TopMen2.map((item) => (
                <div
                  key={item.id}
                  className="flex-none relative"
                  onMouseMove={(event) => handleHover(item.id, event)}
                >
                  <div className="img-holder">
                    <img
                      className="object-cover w-[290px] h-[500px] cursor-pointer"
                      src={item[`img${activeImageIndices[item.id] || 1}`]}
                      alt={`product-${item.id}`}
                    />
                    {/* side functions */}
                    <div className="sideBtns absolute top-5 right-5 text-[2.2rem] flex flex-col gap-3">
                      <IoIosHeartEmpty className="p-2 bg-white rounded-full text-gray-600 hover:bg-red-500 hover:text-white hover:font-medium"/>
                      <LiaCompressSolid className="p-2 bg-white rounded-full text-gray-600 hover:bg-red-500 hover:text-white hover:font-medium"/>
                      <BsArrowRepeat className="p-2 bg-white rounded-full text-gray-600 hover:bg-red-500 hover:text-white hover:font-medium"/>
                      <IoBagOutline className="p-2 bg-white rounded-full text-gray-600 hover:bg-red-500 hover:text-white hover:font-medium"/>
                    </div>
                  </div>
                  <div className="bg-white flex flex-col gap- my-3">
                    <div className="flex  items-center gap-3"><FaStar className="text-[0.8rem] text-yellow-400"/> <span className="text-[0.8rem] font-medium">{item?.review}</span></div>
                    <p className="text-[0.8rem] capitalize">{item?.name}</p>
                    <div className="flex items-center gap-5 text-[0.9rem]">
                      <span className="text-gray-400 line-through">{item?.oldPrice}</span>
                      <span>{item?.price}</span>
                    </div>
                  </div>
                  <div className="absolute top-4 left-2  px-2 py-1 text-[0.7rem] bg-white text-green-500 font-medium">
                    {item.tag}
                  </div>
                </div> 
              ))}
              </div>
            </SwiperSlide>
        </Swiper>
          </div>
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
