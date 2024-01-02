import { PiPackageThin, PiReceiptThin } from "react-icons/pi";
import { CiCreditCard1 } from "react-icons/ci";
import { SlCallOut } from "react-icons/sl";
import { women, men, accessory, shoe } from "../assets";

const Categories = () => {
  return (
    // services
    <div className="font-poppins">
      <div className="flex flex-wrap items-start justify-between gap-10 xs:py-10 py-5 ">
        <div className="flex items-center gap-5">
          <PiPackageThin  className="xs:text-[3rem] text-[4rem] text-gray-700"/>
          <div className="flex flex-col gap-2">
            <h2 className="text-[1rem] font-medium">Free Shipping</h2>
            <p className="text-[0.8rem] text-gray-500 max-w-[200px] font-light">Free Shipping for orders over $130.</p>
          </div>
        </div>

        <div className="flex items-center gap-5">
          <PiReceiptThin className="xs:text-[3rem] text-[4rem] text-gray-700"/>
          <div className="flex flex-col gap-2">
            <h2 className="text-[1rem] font-medium">Money Guarantee</h2>
            <p className="text-[0.8rem] text-gray-500 max-w-[200px]">Within 30 days for an exchange.</p>
          </div>
        </div>

        <div className="flex items-center gap-5">
          <SlCallOut className="xs:text-[2.5rem] text-[3rem] text-gray-700"/>
          <div className="flex flex-col gap-2">
            <h2 className="text-[1rem] font-medium">Online Support</h2>
            <p className="text-[0.8rem] text-gray-500 max-w-[200px]">Within 30 days for an exchange.</p>
          </div>
        </div>

        <div className="flex items-center gap-5">
          <CiCreditCard1 className="xs:text-[3rem] text-[4rem] text-gray-700"/>
          <div className="flex flex-col gap-2">
            <h2 className="text-[1rem] font-medium">Flexible Payment</h2>
            <p className="text-[0.8rem] text-gray-500 max-w-[200px]">Pay with Multiple Credit Cards.</p>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row gap-5  items-center justify-between xs:gap-8 py-10 w-full">
        <div className="relative cursor-pointer w-full">
          <img src={women} className="w-full" alt="women banner" />
          <div className="absolute top-[8%] xxs:top-[5%] left-[8%] flex flex-col gap-4 xxs:gap-2">
            <span className="text-[0.8rem]">54 products</span>
            <h1 className="text-[1.5rem] xxs:text-[1.2rem] font-medium">Women</h1>
            <p className="text-[0.8rem] xxs:text-[0.7rem] max-w-[320px] text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente nulla beatae quia eligendi!</p>

            <div className="mt-6 xxs:mt-2 text-[0.8rem] flex flex-col gap-2">
              <p>Blazers</p>
              <p>Blouse & shirts</p>
              <p>Dresses</p>
              <p>Jackets & coats</p>
              <p>Jeans</p>
              <p>Knit</p>
              <p>Pants</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8 w-full">
          <div className="relative cursor-pointer w-full">
            <img src={men} className="w-full xs:h-full h-[300px]" alt="men banner" />
            <div className="absolute top-[15%] left-[8%] flex flex-col gap-4">
            <span className="text-[0.8rem]">23 products</span>
            <h1 className="text-[1.5rem] xxs:text-[1.2rem] font-medium">Men</h1>

            <div className="mt-6 text-[0.8rem] flex flex-col gap-2">
              <p>Pants</p>
              <p>Shirts</p>
              <p>Shorts</p>
              <p>Sweatshirts & Hoodies</p>
            </div>
          </div>
          </div>

          <div className="flex gap-8 w-full">
            <div className="relative w-full cursor-pointer">
              <img src={shoe} alt="shoe banner" className=" object-contain w-full"/>
              <div className="absolute top-[15%] left-[8%] flex flex-col gap-4">
                <span className="text-[0.8rem]">1 product</span>
                <h1 className="text-[1.5rem] xxs:text-[1.2rem] font-medium">Shoes</h1>
              </div>
            </div>
            <div className="relative w-full cursor-pointer">
              <img src={accessory} alt="accessories banner" className="object-contain w-full"/>
              <div className="absolute top-[15%] left-[8%] flex flex-col gap-4">
                <span className="text-[0.8rem]">3 products</span>
                <h1 className="text-[1.5rem] xxs:text-[1.2rem]  font-medium">Accessories</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Categories
