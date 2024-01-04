import { useState } from 'react';
import { slide3, slider14, banner24, banner25 } from '../assets/index'
import { FaArrowRightLong } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
const Collections = () => {

    // carousell images
    const data = [ slide3, slider14 ]

    // carousel states with direction button
    const [ currentSlide, setCurrentSlide ] = useState(0)
  
  
    const prev = () => {
      setCurrentSlide(currentSlide === 0 ? 1 : (prev) => (prev -1))
    }
  
    const next = () => {
      setCurrentSlide(currentSlide === 1 ? 0 : (prev) => (prev + 1))
    }
  
    const goToSlide = (index) => {
      setCurrentSlide(index);
    };

  return (
    <div className='py-8 h-[60vh] overflow-hidden relative hero'>
      {/* <img src={data[0]} alt="slider iamge" className='h-full object-cover' /> */}
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
  )
}

export default Collections
