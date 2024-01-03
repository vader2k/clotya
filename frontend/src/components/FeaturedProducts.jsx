import { useState } from "react";
import { FeaturedData1, FeaturedData2, FeaturedData3 } from "../constants";
import { Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { FaStar } from "react-icons/fa";
import { IoIosHeartEmpty } from "react-icons/io";
import { LiaCompressSolid } from "react-icons/lia";
import { BsArrowRepeat } from "react-icons/bs";
import { IoBagOutline } from "react-icons/io5";

const FeaturedProducts = () => {

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
    <div className="py-8 relative ">
      <div className="flex justify-between ">
        <h1 className="text-[1.8rem] font-medium">Featured Products</h1>
        <p className="max-w-[730px] text-gray-500 font-extralight">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
      </div>
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
            <div className="py-8 flex overflow-x-auto gap-8 h-[750px] holder relative">
            {FeaturedData1.map((item) => (
              <div
                key={item.id}
                className="flex-none relative"
                onMouseMove={(event) => handleHover(item.id, event)}
              >
                <div className="img-holder">
                  <img
                    className="object-contain w-[390px] h-[600px] cursor-pointer"
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
                <div className="absolute bg-white p-5 px-6 w-[345px] bottom-[10px] left-[20px] flex flex-col gap-3 h-[160px]">
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
          <div className="py-8 flex overflow-x-auto gap-8 h-[750px] holder relative">
            {FeaturedData2.map((item) => (
              <div
                key={item.id}
                className="flex-none relative"
                onMouseMove={(event) => handleHover(item.id, event)}
              >
                <div className="img-holder">
                  <img
                    className="object-contain w-[390px] h-[600px] cursor-pointer"
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
                <div className="absolute bg-white p-5 px-6 w-[345px] bottom-[10px] left-[20px] flex flex-col gap-3 h-[160px]">
                  <div className="flex  items-center gap-3"><FaStar className="text-[0.8rem] text-yellow-400"/> <span className="text-[0.8rem] font-medium">{item?.review}</span></div>
                  <p className="text-[0.8rem] capitalize">{item?.name}</p>
                  <div className="flex items-center gap-5 text-[0.9rem]">
                    <span className="text-gray-400 line-through">{item?.oldPrice}</span>
                    <span>{item?.price}</span>
                  </div>
                </div>
                <div className="absolute top-4 left-2  px-2 py-1 text-[0.7rem] bg-white text-green-500 font-medium">
                  {item?.tag}
                </div>
              </div>
            ))}
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="py-8 flex overflow-x-auto gap-8 h-[750px] holder relative">
            {FeaturedData3.map((item) => (
              <div
                key={item.id}
                className="flex-none relative"
                onMouseMove={(event) => handleHover(item.id, event)}
              >
                <div className="img-holder">
                  <img
                    className="object-contain w-[390px] h-[600px] cursor-pointer"
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
                <div className="absolute bg-white p-5 px-6 w-[345px] bottom-[10px] left-[20px] flex flex-col gap-3 h-[160px]">
                  <div className="flex  items-center gap-3"><FaStar className="text-[0.8rem] text-yellow-400"/> <span className="text-[0.8rem] font-medium">{item?.review}</span></div>
                  <p className="text-[0.8rem] capitalize">{item?.name}</p>
                  <div className="flex items-center gap-5 text-[0.9rem]">
                    <span className="text-gray-400 line-through">{item?.oldPrice}</span>
                    <span>{item?.price}</span>
                  </div>
                </div>
                <div className="absolute top-4 left-2  px-2 py-1 text-[0.7rem] bg-white text-green-500 font-medium">
                  {item?.tag}
                </div>
              </div>
            ))}
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default FeaturedProducts;