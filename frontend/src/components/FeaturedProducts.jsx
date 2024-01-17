import  { useEffect, useState } from 'react';
import { Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { FaStar } from "react-icons/fa";
import { IoIosHeartEmpty } from "react-icons/io";
import { LiaCompressSolid } from "react-icons/lia";
import { BsArrowRepeat } from "react-icons/bs";
import { IoBagOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FeaturedData } from "../constants";
import axios from 'axios'

const FeaturedProducts = () => {

  const [ Products, setProducts ] = useState([])

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

  useEffect(()=> {
    const fetchData = async () => {
      try {
        const res = await axios.get(import.meta.env.VITE_API_URL + '/products?populate=*', {
          headers: {
            Authorization : `Bearer ${import.meta.env.VITE_API_TOKEN}`
          }
        })
        setProducts(res.data.data)
        console.log(res.data.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])


  return (
    <div className="py-8 xxs:py-4 relative ">
      <div className="lg:flex lg:flex-row xl:flex xl:flex-row md:flex md:flex-row sm:flex sm:flex-col sm:gap-2 justify-between ">
        <h1 className="md:text-[1.8rem] lg:text-[1.8rem] xl:text-[1.8rem] sm:text-[1.3rem] text-[1.1rem] font-medium">Featured Products</h1>
        <p className="max-w-[730px]  text-gray-500 font-extralight">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
      </div>
      <div className="relative ">
        <Swiper
          modules={[Pagination, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          speed={2000}
          parallax
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {[...Array(Math.ceil(FeaturedData.length / 3))].map((_, index) => (
            <SwiperSlide key={index}>
              <div className="py-20 flex overflow-x-auto gap-8 lg:h-[750px] md:h-[750px] sm:h-[650px] h-[550px] holder relative">
                {Products.slice(index * 3, (index + 1) * 3).map((item) => (
                  <div
                    key={item.id}
                    className="flex-none relative"
                    onMouseMove={(event) => handleHover(item.id, event)}
                  >
                    <div className="img-holder">
                      <Link to={`/details/${item.id}`}>
                        <img
                          className="object-contain max-w-[210px] sm:max-w-[300px] md:max-w-[390px] lg:max-w-[390px] xl:max-w-[390px] lg:max-h-[600px] xl:max-h-[600px] md:max-h-[600px] sm:max-h-[510px] max-h-[390px] cursor-pointer"
                          src={import.meta.env.VITE_UPLOAD_URL + item?.attributes[`img${activeImageIndices[item.id] || 1}`].data?.attributes?.url}
                          alt={`product-${item.id}`}
                        />
                        {/* side functions */}
                        <div className="sideBtns absolute top-5 right-5 text-[2.2rem] flex flex-col gap-3">
                          <IoIosHeartEmpty className="p-2 bg-white rounded-full text-gray-600 hover:bg-red-500 hover:text-white hover:font-medium"/>
                          <LiaCompressSolid className="p-2 bg-white rounded-full text-gray-600 hover:bg-red-500 hover:text-white hover:font-medium"/>
                          <BsArrowRepeat className="p-2 bg-white rounded-full text-gray-600 hover:bg-red-500 hover:text-white hover:font-medium"/>
                          <IoBagOutline className="p-2 bg-white rounded-full text-gray-600 hover:bg-red-500 hover:text-white hover:font-medium"/>
                        </div>
                      </Link>
                    </div>
                    {/* item properties */}
                    <div className="absolute bg-white p-5 px-6 xl:w-[345px] lg:w-[345px] md:w-[345px] sm:w-[260px] w-[170px] lg:bottom-[10px] xl:bottom-[-80px] md:bottom-[10px] sm:bottom-[-70px] bottom-[-20px] left-[20px] flex flex-col gap-3 h-[160px]">
                      <div className="flex  items-center gap-3"><FaStar className="text-[0.8rem] text-yellow-400"/> <span className="text-[0.8rem] font-medium">{item?.attributes.review}</span></div>
                      <p className="text-[0.8rem] capitalize">{item?.attributes.title}</p>
                      <div className="flex items-center gap-5 text-[0.9rem]">
                        <span className="text-gray-400 line-through">${item?.attributes.oldPrice || item?.attributes.price+20}</span>
                        <span>${item?.attributes.price}</span>
                      </div>
                    </div>
                    <div>
                      {item?.attributes.tag && <div className="absolute top-4 left-2  px-2 py-1 text-[0.7rem] bg-white text-green-500 font-medium">26%</div>}
                    </div>
                  </div> 
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default FeaturedProducts;
