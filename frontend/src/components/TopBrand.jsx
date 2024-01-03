import { FaArrowRightLong } from "react-icons/fa6";
import { banner22, banner23 } from '../assets'

const TopBrand = () => {
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
    </div>
  )
}

export default TopBrand
