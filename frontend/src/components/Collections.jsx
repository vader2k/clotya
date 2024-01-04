import { useState } from 'react';
import { slide3, slider14, banner24, banner25, image09 } from '../assets/index'
import { FaArrowRightLong } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import { FaStar } from "react-icons/fa";
import { IoIosHeartEmpty } from "react-icons/io";
import { LiaCompressSolid } from "react-icons/lia";
import { BsArrowRepeat } from "react-icons/bs";
import { IoBagOutline } from "react-icons/io5";

import { BestSeller1, BestSeller2 } from '../constants/index'

const Collections = () => {

    // carousell images
    const data = [ slide3, slider14 ]

    // carousel states with direction button
    const [ currentSlide, setCurrentSlide ] = useState(0)

    const [activeImageIndices, setActiveImageIndices] = useState({});
  
  
    const prev = () => {
      setCurrentSlide(currentSlide === 0 ? 1 : (prev) => (prev -1))
    }
  
    const next = () => {
      setCurrentSlide(currentSlide === 1 ? 0 : (prev) => (prev + 1))
    }
  
    const goToSlide = (index) => {
      setCurrentSlide(index);
    };

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
      {/* banner section */}
      <div className='py-8 h-[60vh] overflow-hidden relative hero'>
        {/* collections banner */}
      <div className="carousel w-[2600px] flex cursor-pointer" style={{transform:`translateX(-${currentSlide * 1300}px)`}}>
        <div className="relative h-full">
          <img className="object-cover w-[1300px] h-[60vh] " src={data[0]} alt="carousel image 1" />
          <div className="absolute top-0 w-full h-full flex flex-col items-center xs:gap-1 mt-10 md:gap-8 md:mt-20 text-white">
            <p className="md:font-bold md:text-[1rem] xs:text-[0.9rem] font-semibold text-[0.7rem] xs:mt-0 mt-7">WINTER 2022 COLLECTION</p>
            <div className="flex flex-col text-center gap-0 md:leading-[4.5rem] xs:leading-[4rem] leading-[2.5rem]">
              <span className="md:font-bold md:text-[3.5rem] xs:text-[2rem] text-[1rem] font-bold">
                VALENTIN PAUL ESSENTIAL
              </span>
              <span className="md:font-bold md:text-[3.5rem] xs:text-[2rem] text-[1rem] font-bold">COLLECTION</span>
            </div>
            <p className="text-gray-300 md:mt-0 xs:mt-2 mt-6 xs:text-[0.8rem] text-[0.6rem]">Lorem ipsum dolor, sit amet consectetur adipisicing elit!..</p>
            <button className="flex items-center gap-3 md:mt-0 xs:mt-2 mt-4">
              <p className="font-bold text-[0.8rem] ">Shop Collection</p>
              <FaArrowRightLong className="text-[1rem]"/>
            </button>
          </div>
        </div>

        <div className="relative">
          <img className="object-cover w-[1300px] h-[60vh]" src={data[1]} alt="carousel image 1" />
          <div className="absolute top-0 w-full h-full flex flex-col items-center xs:gap-1 mt-10 md:gap-8 md:mt-20 text-white">
            <p className="md:font-bold md:text-[1rem] xs:text-[0.9rem] font-semibold text-[0.7rem] xs:mt-0 mt-7">WINTER 2022 COLLECTION</p>
            <div className="flex flex-col text-center gap-0 md:leading-[4.5rem] xs:leading-[4rem] leading-[2.5rem]">
              <span className="md:font-bold md:text-[3.5rem] xs:text-[2rem] text-[1rem] font-bold">
                VALENTIN PAUL ESSENTIAL
              </span>
              <span className="md:font-bold md:text-[3.5rem] xs:text-[2rem] text-[1rem] font-bold">COLLECTION</span>
            </div>
            <p className="text-gray-300 md:mt-0 xs:mt-2 mt-6 xs:text-[0.8rem] text-[0.6rem]">Lorem ipsum dolor, sit amet consectetur adipisicing elit!..</p>
            <button className="flex items-center gap-3 md:mt-0 xs:mt-2 mt-4">
              <p className="font-bold text-[0.8rem] ">Shop Collection</p>
              <FaArrowRightLong className="text-[1rem]"/>
            </button>
          </div>
        </div>

      </div>

      <div className="direction absolute right-0 md:top-[50%] top-[30%] py-3 px-1 bg-gray-200 cursor-pointer xs:block hidden">
        <img width="25" height="30" src="https://img.icons8.com/ios/50/forward--v1.png" alt="forward--v1" onClick={next}/>
      </div>

      <div className="direction absolute md:top-[50%] top-[30%] py-3 px-1 bg-gray-200 cursor-pointer xs:block hidden">
        <img width="25" height="30" src="https://img.icons8.com/ios/100/back--v1.png" alt="back--v1" onClick={prev}/>
      </div>

      <div className="absolute flex md:bottom-[2%] xs:bottom-[3%] bottom-[5%] left-[50%] text-[1rem] md:text-gray-500 text-gray-400">
        {data.map((_, index) => (
          <GoDotFill
            key={index}
            onClick={() => goToSlide(index)}
            className={`cursor-pointer ${currentSlide === index ? 'text-white md:text-white xxs:text-black' : ''} hover:text-white cursor-pointer`}
          />
        ))}
      </div>
    </div>
      {/* carousel items and side banner */}
    <div className=' py-20'>
      <div className='flex flex-col items-center gap-4'>
          <h1 className='text-[1.8rem] font-roboto'>Best Seller Products</h1>
          <p className='max-w-[800px] text-center text-[0.8rem] leading-6 text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
      </div>

      <div className='flex items-start gap-8  border-b border-gray-300 py-20'>
        <div>
        <div className="flex overflow-x-auto gap-8 holder relative ">
            {BestSeller1.map((item) => (
              <div
                key={item.id}
                className="flex-none relative "
                onMouseMove={(event) => handleHover(item.id, event)}
              >
                <div className="img-holder">
                  <img
                    className="object-cover w-[290px] h-[450px] cursor-pointer"
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
        </div>
        <div className='relative cursor-pointer'>
          <img src={banner24} alt="banner" />
          <div className='absolute top-10 px-10 py-40 text-white flex flex-col gap-2'>
            <p className='text-[0.8rem] font-medium'>WINTER 2022 COLLECTION</p>
            <h1 className='text-[1.8rem] font-medium max-w-[300px]'>Aenean id sapein sit amet urna laoreet</h1>
            <p className='text-gray-300 text-[0.8rem] py-2 max-w-[300px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
            <button className="flex items-center gap-3 md:mt-0 xs:mt-2 mt-4">
              <p className="font-bold text-[0.8rem] ">Shop Collection</p>
              <FaArrowRightLong className="text-[1rem]"/>
            </button>
          </div>
        </div>
      </div>


      <div className='flex flex-row-reverse items-start gap-8 py-10'>
        <div>
        <div className="flex overflow-x-auto gap-8 holder relative ">
            {BestSeller2.map((item) => (
              <div
                key={item.id}
                className="flex-none relative "
                onMouseMove={(event) => handleHover(item.id, event)}
              >
                <div className="img-holder">
                  <img
                    className="object-cover w-[290px] h-[450px] cursor-pointer"
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
        </div>
        <div className='relative cursor-pointer'>
          <img src={banner25} alt="banner" />
          <div className='absolute top-10 px-10 py-40 text-white flex flex-col gap-2'>
            <p className='text-[0.8rem] font-medium'>WINTER 2022 COLLECTION</p>
            <h1 className='text-[1.8rem] font-medium max-w-[300px]'>Aenean id sapein sit amet urna laoreet</h1>
            <p className='text-gray-300 text-[0.8rem] py-2 max-w-[300px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
            <button className="flex items-center gap-3 md:mt-0 xs:mt-2 mt-4">
              <p className="font-bold text-[0.8rem] ">Shop Collection</p>
              <FaArrowRightLong className="text-[1rem]"/>
            </button>
          </div>
        </div>
      </div>
    </div>

    {/* shop now CTA design to end the section */}
    <div className='flex justify-center items-center h-[510px] overflow-hidden bg-pink'>
      <div className='h-full w-full flex flex-col items-center justify-center gap-5 text-center'>
        <h3 className='text-[0.8rem] font-semibold'>SUMMER COLLECTION</h3>
        <h1 className='text-[2.5rem] font-normal max-w-[400px] font-roboto leading-[3rem] tracking-wider'>Risus commodo viverra maecenas accumsan.</h1>
        <p className='text-[0.8rem] max-w-[400px] text-gray-500 leading-6'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae, quod. Corporis fugiat suscipit officiis neque ratione?</p>
        <button className="flex items-center gap-3 md:mt-0 xs:mt-2 mt-4 border border-red-400 px-6 py-4 text-red-400 hover:text-white hover:bg-red-400">
          <p className="font-bold text-[0.8rem] ">Shop Collection</p>
          <FaArrowRightLong className="text-[1rem]"/>
        </button>
      </div>
      <div className='flex items-center justify-center'>
        <img className='h-full w-auto' src={image09} alt="cta banner image" />
      </div>
    </div>
  </div>
  )
} 

export default Collections
