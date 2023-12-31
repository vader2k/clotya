import { useState } from "react"
import { slide1, slide2, slide3 } from "../assets"
import { MdKeyboardArrowRight , MdKeyboardArrowLeft } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";

const HeroSlider = () => {
  // carousell images
  const data = [ slide1, slide2, slide3 ]

  // carousel states
  const [ currentSlide, setCurrentSlide ] = useState(0)

  const prev = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => (prev -1))
  }

  const next = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => (prev + 1))
  }
  return (
    <div className="w-[100vw] ">
      <div className="carousel w-[300vw] flex" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
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
      

    </div>
  )
}

export default HeroSlider