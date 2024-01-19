import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { FaStar } from "react-icons/fa";
import { IoIosHeartEmpty } from "react-icons/io";
import { LiaCompressSolid } from "react-icons/lia";
import { BsArrowRepeat } from "react-icons/bs";
import { IoBagOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { womenRelatedProducts } from '../constants';

const RelatedProducts = () => {

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
      <h1 className="text-[1.2rem] font-medium py-3 border-b border-gray-300">Related products</h1>
      <div className="relative">
            <Swiper
            // install Swiper modules
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
              {womenRelatedProducts.map((item) => (
                <div
                  key={item.id}
                  className="flex-none relative"
                  onMouseMove={(event) => handleHover(item.id, event)}
                >
                  <Link to={`/details/${item.id}`}>
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
                  </Link>
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
    </div>
  )
}

export default RelatedProducts
