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
    <div className="w-[100vw] h-[75dvh] overflow-hidden relative hero">
      <div className="carousel w-[300vw] h-full flex cursor-pointer" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
        <div className="relative">
          <img src={data[0]} alt="carousel image 1" />
          <div className="absolute top-0 w-full h-full flex flex-col items-center gap-8 mt-36 text-white">
            <p className="font-bold">WINTER 2022 COLLECTION</p>
            <div className="flex flex-col text-center gap-0 leading-[6rem]">
              <span className="font-black text-[5rem]">
                VALENTIN PAUL
              </span>
              <span className="font-black text-[5.5rem]">ESSENTIAL COLLECTION</span>
            </div>
            <p className="text-gray-300">Lorem ipsum dolor, sit amet consectetur adipisicing elit!..</p>
            <button className="flex items-center gap-3">
              <p className="font-bold text-[1rem]">Shop Collection</p>
              <FaArrowRightLong className="text-[1.3rem]"/>
            </button>
          </div>
        </div>

        <div className="relative">
          <img src={data[1]} alt="carousel image 1" />
          <div className="absolute top-0 w-full h-full flex flex-col items-center gap-8 mt-36 text-white">
            <p className="font-bold">WINTER 2022 COLLECTION</p>
            <div className="flex flex-col text-center gap-0 leading-[6rem]">
              <span className="font-black text-[5rem]">
                VALENTIN PAUL
              </span>
              <span className="font-black text-[5.5rem]">ESSENTIAL COLLECTION</span>
            </div>
            <p className="text-gray-300">Lorem ipsum dolor, sit amet consectetur adipisicing elit!..</p>
            <button className="flex items-center gap-3">
              <p className="font-bold text-[1rem]">Shop Collection</p>
              <FaArrowRightLong className="text-[1.3rem]"/>
            </button>
          </div>
        </div>

        <div className="relative">
          <img src={data[2]} alt="carousel image 1" />
          <div className="absolute top-0 w-full h-full flex flex-col items-center gap-8 mt-36 text-white">
            <p className="font-bold">WINTER 2022 COLLECTION</p>
            <div className="flex flex-col text-center gap-0 leading-[6rem]">
              <span className="font-black text-[5rem]">
                VALENTIN PAUL
              </span>
              <span className="font-black text-[5.5rem]">ESSENTIAL COLLECTION</span>
            </div>
            <p className="text-gray-300">Lorem ipsum dolor, sit amet consectetur adipisicing elit!..</p>
            <button className="flex items-center gap-3">
              <p className="font-bold text-[1rem]">Shop Collection</p>
              <FaArrowRightLong className="text-[1.3rem]"/>
            </button>
          </div>
        </div>
      </div>
      
      <div className="direction absolute right-0 top-[50%] py-3 px-1 bg-gray-200 cursor-pointer">
        <img width="25" height="30" src="https://img.icons8.com/ios/50/forward--v1.png" alt="forward--v1" onClick={next}/>
      </div>

      <div className="direction absolute top-[50%] py-3 px-1 bg-gray-200 cursor-pointer">
        <img width="25" height="30" src="https://img.icons8.com/ios/100/back--v1.png" alt="back--v1" onClick={prev}/>
      </div>

      <div className="absolute flex bottom-[5%] left-[50%] text-[1rem] text-gray-500">
        {data.map((_, index) => (
          <GoDotFill
            key={index}
            onClick={() => goToSlide(index)}
            className={`cursor-pointer ${currentSlide === index ? 'text-white' : ''} hover:text-white cursor-pointer`}
          />
        ))}
      </div>
    </div>
  )
}

export default HeroSlider