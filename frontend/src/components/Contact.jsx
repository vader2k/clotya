import { FaApple } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";

const Contact = () => {
  return (
    <div className="bg-black text-white w-full p-20">
      <div className="max-w-[1300px] flex items-center justify-between m-auto">
        <div className="">
          <h1 className="text-[1.5rem] font-bold max-w-[350px]">Get our emails for info on new items, sales and more.</h1>
          <p className="pt-4 pb-8 text-[0.85rem] text-gray-400">We'll email you a voucher worth £10 off your first order over $50</p>
          <div className="flex items-center text-[0.9rem]">
            <input type="text" 
            placeholder="Enter your email address"
            className="p-3 outline-none border-none text-gray-500  h-[50px] w-[55%]"/>
            <button className="cursor-pointer text-white bg-black hover:bg-gray-600 py-3 px-5 h-[50px] border border-gray-300">Subscribe</button>
          </div>
          <p className="py-4 text-[0.7rem] text-gray-400">By subscribing you agree to our Terms & Conditions and Privacy & Cookies Policy.</p>
        </div>

        <div className="">
          <h1 className="text-[1.5rem] font-bold max-w-[350px]">Need help?</h1>
          <span className="text-[1.5rem] font-bold max-w-[350px]">(+800) 1234 5678 90</span>
          <p className="pt-4 pb-4 text-[0.85rem] text-gray-400">We are available 8:00am – 7:00pm</p>
          <div className="flex items-center gap-2">
            <button className="flex items-center text-white bg-black border border-gray-500 rounded-[10px] p-1">
              <div>
                <FaApple className="text-[2rem]"/>
              </div>
              <div className="flex flex-col gap-0 mt-2">
                <span className="text-[0.4rem]">Download on the</span>
                <span className="text-[0.9rem]">App Store</span>
              </div>
            </button>

            <button className="flex items-center text-white bg-black border border-gray-500 rounded-[10px] p-1">
              <div>
                <IoLogoGooglePlaystore className="text-[2rem]"/>
              </div>
              <div className="flex flex-col gap-0 mt-2">
                <span className="text-[0.4rem]">GET IT ON</span>
                <span className="text-[0.9rem]">Google Play</span>
              </div>
            </button>
          </div>
          <p className="py-4 text-[0.7rem] text-gray-400"><span className="font-bold">Shopping App:</span> Try our View in Your Room feature, manage registries and save payment info.</p>
        </div>
      </div>
    </div>
  )
}

export default Contact
