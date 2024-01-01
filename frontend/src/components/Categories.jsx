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
        <div>
          <img src={women} alt="women banner" />
        </div>

        <div className="flex flex-col gap-8">
          <div>
            <img src={men} alt="men banner" />
          </div>

          <div className="flex gap-8">
            <img src={shoe} alt="shoe banner" className="h-[285px] object-contain"/>
            <img src={accessory} alt="accessories banner" className="h-[285px] object-contain"/>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Categories
