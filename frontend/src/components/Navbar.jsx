import { LiaBarsSolid } from "react-icons/lia";
import { IoPersonOutline } from "react-icons/io5";
import { IoIosSearch, IoMdHeartEmpty } from "react-icons/io";
import { BsBag } from "react-icons/bs";
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    // navbar for big and medium screens
    <div>
      <div className="bg-black text-white text-center font-poppins py-2 text-[0.5rem] md:text-[0.75rem] font-normal">SUMMER SALE FOR ALL SWIM SUITS AND FREE EXPRESS INTERNATIONAL DELIVERY - OFF 50%! <span className="ml-2 font-bold">SHOP NOW</span> </div>
      <div className="flex items-center justify-between px-5 md:px-24 py-5 text-black bg-white">
        {/* first container */}
        <div className="text-[1rem] flex items-center gap-8">
          <LiaBarsSolid className="text-[1.8rem]"/>
          <span className="font-medium hidden md:block">
            <Link to="/">
              HOME
            </Link>
          </span>
          <span className="font-semibold hidden md:block">
            <Link to="/shop">
              SHOP
            </Link>
          </span>
          <span className="font-semibold hidden md:block">
            <Link to="/women">
              WOMEN
            </Link>
          </span>
        </div>

        {/* second container */}
        <div className="text-[2rem] font-black roboto tracking-normal">
          Clotya
        </div>

        {/* third container */}
        <div className="flex items-center gap-4 text-[1.5rem] text-gray-600">
          <IoPersonOutline className="hidden md:block"/>
          <IoIosSearch className="hidden md:block"/>
          <div className="relative hidden md:block">
            <IoMdHeartEmpty/>
            <p className="absolute px-1 bg-red-500 rounded-full text-white text-[0.5rem] top-[-3px] right-[-2px]">1</p>
          </div>
          <p className="text-[0.9rem]">$0.00</p>
          <div className="relative">
            <BsBag />
            <p className="absolute px-1 bg-red-500 rounded-full text-white text-[0.5rem] top-[-3px] right-[-2px]">0</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
