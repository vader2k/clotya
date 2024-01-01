import { PiPackageThin, PiReceiptThin } from "react-icons/pi";
import { CiCreditCard1 } from "react-icons/ci";
import { SlCallOut } from "react-icons/sl";
import { women, men, accessory, shoe } from "../assets";

const Categories = () => {
  return (
    // services
    <div className="font-poppins">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-5">
          <PiPackageThin  className="text-[3rem] text-gray-700"/>
          <div className="flex flex-col gap-2">
            <h2 className="text-[1rem] font-medium">Free Shipping</h2>
            <p className="text-[0.8rem] text-gray-500 max-w-[200px] font-light">Free Shipping for orders over $130.</p>
          </div>
        </div>

        <div className="flex items-center gap-5">
          <PiReceiptThin className="text-[3rem] text-gray-700"/>
          <div className="flex flex-col gap-2">
            <h2 className="text-[1rem] font-medium">Money Guarantee</h2>
            <p className="text-[0.8rem] text-gray-500 max-w-[200px]">Within 30 days for an exchange.</p>
          </div>
        </div>

        <div className="flex items-center gap-5">
          <SlCallOut className="text-[2.5rem] text-gray-700"/>
          <div className="flex flex-col gap-2">
            <h2 className="text-[1rem] font-medium">Online Support</h2>
            <p className="text-[0.8rem] text-gray-500 max-w-[200px]">Within 30 days for an exchange.</p>
          </div>
        </div>

        <div className="flex items-center gap-5">
          <CiCreditCard1 className="text-[3rem] text-gray-700"/>
          <div className="flex flex-col gap-2">
            <h2 className="text-[1rem] font-medium">Flexible Payment</h2>
            <p className="text-[0.8rem] text-gray-500 max-w-[200px]">Pay with Multiple Credit Cards.</p>
          </div>
        </div>
      </div>
      
      <div className="flex justify-between gap-8 py-20 ">
        <div className="relative cursor-pointer">
          <img src={women} alt="women banner" />
          <div className="absolute top-[8%] left-[8%] flex flex-col gap-4">
            <span className="text-[0.8rem]">54 products</span>
            <h1 className="text-[1.5rem] font-medium">Women</h1>
            <p className="text-[0.8rem] max-w-[320px] text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente nulla beatae quia eligendi!</p>

            <div className="mt-6 text-[0.8rem] flex flex-col gap-2">
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

        <div className="flex flex-col gap-8">
          <div className="relative cursor-pointer">
            <img src={men} alt="men banner" />
            <div className="absolute top-[15%] left-[8%] flex flex-col gap-4">
            <span className="text-[0.8rem]">23 products</span>
            <h1 className="text-[1.5rem] font-medium">Men</h1>

            <div className="mt-6 text-[0.8rem] flex flex-col gap-2">
              <p>Pants</p>
              <p>Shirts</p>
              <p>Shorts</p>
              <p>Sweatshirts & Hoodies</p>
            </div>
          </div>
          </div>

          <div className="flex gap-8">
            <div className="relative">
              <img src={shoe} alt="shoe banner" className=" object-contain"/>
              <div className="absolute top-[15%] left-[8%] flex flex-col gap-4">
                <span className="text-[0.8rem]">1 product</span>
                <h1 className="text-[1.5rem] font-medium">Shoes</h1>
              </div>
            </div>
            <div className="relative">
              <img src={accessory} alt="accessories banner" className="object-contain"/>
              <div className="absolute top-[15%] left-[8%] flex flex-col gap-4">
                <span className="text-[0.8rem]">3 products</span>
                <h1 className="text-[1.5rem] font-medium">Accessories</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Categories
