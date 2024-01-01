import { useState } from "react"
import { slide1, slide2, slide3 } from "../assets"
import { FaArrowRightLong } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";

const HeroSlider = () => {
  // carousell images
  const data = [ slide1, slide2, slide3 ]

  // carousel states with direction button
  const [ currentSlide, setCurrentSlide ] = useState(0)


  const prev = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => (prev -1))
  }

  const next = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => (prev + 1))
  }

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };


  return (
    <div className="w-[100vw] md:h-[75dvh] overflow-hidden relative hero">
      <div className="carousel w-[300vw] h-[50vh] md:h-[75dvh] flex cursor-pointer" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
        <div className="relative h-full">
          <img className="object-cover w-[100vw] h-[42vh] md:h-full" src={data[0]} alt="carousel image 1" />
          <div className="absolute top-0 w-full h-full flex flex-col items-center xs:gap-1 mt-10 md:gap-8 md:mt-36 text-white">
            <p className="md:font-bold md:text-[1rem] xs:text-[0.9rem] font-semibold text-[0.7rem] xs:mt-0 mt-7">WINTER 2022 COLLECTION</p>
            <div className="flex flex-col text-center gap-0 md:leading-[6rem] xs:leading-[4rem] leading-[2.5rem]">
              <span className="md:font-black md:text-[5rem] xs:text-[4rem] text-[2rem] font-bold">
                VALENTIN PAUL
              </span>
              <span className="md:font-black md:text-[5.5rem] xs:text-[4rem] text-[2rem] font-bold">ESSENTIAL <br className="md:hidden block"/> COLLECTION</span>
            </div>
            <p className="text-gray-300 md:mt-0 xs:mt-2 mt-6 xs:text-[1rem] text-[0.8rem]">Lorem ipsum dolor, sit amet consectetur adipisicing elit!..</p>
            <button className="flex items-center gap-3 md:mt-0 xs:mt-2 mt-4">
              <p className="font-bold text-[1rem] ">Shop Collection</p>
              <FaArrowRightLong className="text-[1.3rem]"/>
            </button>
          </div>
        </div>

        <div className="relative">
        <img className="object-cover w-[100vw] h-[42vh] md:h-full" src={data[1]} alt="carousel image 1" />
          <div className="absolute top-0 w-full h-full flex flex-col items-center xs:gap-1 mt-10 md:gap-8 md:mt-36 text-white">
            <p className="md:font-bold md:text-[1rem] xs:text-[0.9rem] font-semibold text-[0.7rem] xs:mt-0 mt-7">WINTER 2022 COLLECTION</p>
            <div className="flex flex-col text-center gap-0 md:leading-[6rem] xs:leading-[4rem] leading-[2.5rem]">
              <span className="md:font-black md:text-[5rem] xs:text-[4rem] text-[2rem] font-bold">
                VALENTIN PAUL
              </span>
              <span className="md:font-black md:text-[5.5rem] xs:text-[4rem] text-[2rem] font-bold">ESSENTIAL <br className="md:hidden block"/> COLLECTION</span>
            </div>
            <p className="text-gray-300 md:mt-0 xs:mt-2 mt-6 xs:text-[1rem] text-[0.8rem]">Lorem ipsum dolor, sit amet consectetur adipisicing elit!..</p>
            <button className="flex items-center gap-3 md:mt-0 xs:mt-2 mt-4">
              <p className="font-bold text-[1rem] ">Shop Collection</p>
              <FaArrowRightLong className="text-[1.3rem]"/>
            </button>
          </div>
        </div>

        <div className="relative">
        <img className="object-cover w-[100vw] h-[42vh] md:h-full" src={data[2]} alt="carousel image 1" />
          <div className="absolute top-0 w-full h-full flex flex-col items-center xs:gap-1 mt-10 md:gap-8 md:mt-36 text-white">
            <p className="md:font-bold md:text-[1rem] xs:text-[0.9rem] font-semibold text-[0.7rem] xs:mt-0 mt-7">WINTER 2022 COLLECTION</p>
            <div className="flex flex-col text-center gap-0 md:leading-[6rem] xs:leading-[4rem] leading-[2.5rem]">
              <span className="md:font-black md:text-[5rem] xs:text-[4rem] text-[2rem] font-bold">
                VALENTIN PAUL
              </span>
              <span className="md:font-black md:text-[5.5rem] xs:text-[4rem] text-[2rem] font-bold">ESSENTIAL <br className="md:hidden block"/> COLLECTION</span>
            </div>
            <p className="text-gray-300 md:mt-0 xs:mt-2 mt-6 xs:text-[1rem] text-[0.8rem]">Lorem ipsum dolor, sit amet consectetur adipisicing elit!..</p>
            <button className="flex items-center gap-3 md:mt-0 xs:mt-2 mt-4">
              <p className="font-bold text-[1rem] ">Shop Collection</p>
              <FaArrowRightLong className="text-[1.3rem]"/>
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

      <div className="absolute flex md:bottom-[5%] xs:bottom-[13%] bottom-[5%] left-[50%] text-[1rem] md:text-gray-500 text-gray-400">
        {data.map((_, index) => (
          <GoDotFill
            key={index}
            onClick={() => goToSlide(index)}
            className={`cursor-pointer ${currentSlide === index ? 'md:text-white xs:text-gray-700 text-black' : ''} hover:text-white cursor-pointer`}
          />
        ))}
      </div>
    </div>
  )
}

export default HeroSlider