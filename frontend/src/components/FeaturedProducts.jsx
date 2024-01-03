import { useState } from "react";
import { FeaturedData1, FeaturedData2, FeaturedData3 } from "../constants";
import { Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';


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
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div className="py-8 flex overflow-x-auto gap-8 h-[700px] holder relative">
            {FeaturedData1.map((item) => (
              <div
                key={item.id}
                className="flex-none relative"
                onMouseMove={(event) => handleHover(item.id, event)}
              >
                <img
                  className="object-contain w-[390px] h-[600px] cursor-pointer"
                  src={item[`img${activeImageIndices[item.id] || 1}`]}
                  alt={`product-${item.id}`}
                />
              </div>
            ))}
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="py-8 flex overflow-x-auto gap-8 h-[700px] holder relative">
            {FeaturedData2.map((item) => (
              <div
                key={item.id}
                className="flex-none relative"
                onMouseMove={(event) => handleHover(item.id, event)}
              >
                <img
                  className="object-contain w-[390px] h-[600px] cursor-pointer"
                  src={item[`img${activeImageIndices[item.id] || 1}`]}
                  alt={`product-${item.id}`}
                />
              </div>
            ))}
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="py-8 flex overflow-x-auto gap-8 h-[700px] holder relative">
            {FeaturedData3.map((item) => (
              <div
                key={item.id}
                className="flex-none relative"
                onMouseMove={(event) => handleHover(item.id, event)}
              >
                <img
                  className="object-contain w-[390px] h-[600px] cursor-pointer"
                  src={item[`img${activeImageIndices[item.id] || 1}`]}
                  alt={`product-${item.id}`}
                />
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