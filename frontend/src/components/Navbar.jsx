import { LiaBarsSolid } from "react-icons/lia";
import { IoPersonOutline } from "react-icons/io5";
import { IoIosSearch, IoMdHeartEmpty, IoMdClose } from "react-icons/io";
import { BsBag } from "react-icons/bs";
import { Link } from 'react-router-dom'
import { useState } from "react";

const Navbar = () => {
 
  const [isOpen, setIsOpen] = useState(false)

  return (
    
    <>
    {/* navbar for big and small screens */}
    <div>
      <div className="bg-black text-white text-center font-poppins py-2 text-[0.5rem] md:text-[0.75rem] font-normal">SUMMER SALE FOR ALL SWIM SUITS AND FREE EXPRESS INTERNATIONAL DELIVERY - OFF 50%! <span className="ml-2 font-bold">SHOP NOW</span> </div>
      <div className="flex items-center justify-between px-5 md:px-24 py-5 text-black bg-white">
        {/* first container */}
        <div className="text-[1rem] flex items-center gap-8">
          <LiaBarsSolid className="text-[1.8rem]" onClick={()=> setIsOpen((prev)=>(!prev))}/>
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
        <div className="text-[2rem] font-black roboto tracking-normal cursor-pointer">
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

    {isOpen && (
    <div className="fixed top-0 left-0 w-full h-full  z-50 font-poppins">
      {/* modal background to make the body less visible when the navbar is active */}
      <div className="absolute w-full h-full bg-black opacity-20 "></div>

      {/* Modal content */}
      <div className="scrollable relative text-black z-10 p-4 bg-white h-full md:w-[20%] w-[41%] overflow-y-scroll">
        <div className="px-4">
          <div className="flex items-center justify-between pb-10">
            <div className="text-[2rem] font-black roboto tracking-normal cursor-pointer">
              Clotya
            </div>
            <div className="p-2 bg-gray-300 cursor-pointer">
              <IoMdClose onClick={()=> setIsOpen(false)}/>
            </div>
          </div>

          <div className="text-[0.8rem] flex flex-col gap-5 pb-10 border-b border-gray-300">
            <h1 className="text-[0.7rem] text-gray-600">Main Menu</h1>
            <span className="cursor-pointer">Home</span>
            <span className="cursor-pointer">Shop</span>
            <span className="cursor-pointer">Women</span>
            <span className="cursor-pointer">Men</span>
            <span className="cursor-pointer">Outerwear</span>
            <span className="cursor-pointer">Blog</span>
            <span className="cursor-pointer">Contact</span>
          </div>

          <div className="text-[0.8rem] flex flex-col gap-5 py-10">
            <h1 className="text-[0.7rem] text-gray-600">categories</h1>
            <span className="cursor-pointer">Men</span>
            <span className="cursor-pointer">Women</span>
            <span className="cursor-pointer">Women</span>
            <span className="cursor-pointer">Kids</span>
            <span className="cursor-pointer">Baby</span>
            <div className="flex items-center justify-between">
              <span className="cursor-pointer">Shoes</span>
              <div className="px-2 text-[0.6rem] bg-green-300 text-white rounded-3xl">HOT</div>
            </div>
            <span className="cursor-pointer">Bags</span>
            <span className="cursor-pointer">Accessories</span>
            <span className="cursor-pointer">Watches</span>
            <div className="flex items-center justify-between">
              <span className="cursor-pointer">Cargo Trousers</span>
              <div className="px-2 text-[0.6rem] bg-yellow-300 text-white rounded-3xl">NEW</div>
            </div>
            <span className="cursor-pointer">Outwear</span>
            <span className="cursor-pointer">Wallet</span>
            <span className="cursor-pointer">Belts</span>
            <span className="cursor-pointer">Best Sellers</span>
            <span className="cursor-pointer">Featured Products</span>
            <div className="flex items-center justify-between">
              <span className="cursor-pointer">New Arrivals</span>
              <div className="px-2 text-[0.6rem] bg-pink-300 text-white rounded-3xl">SAVE 25%</div>
            </div>
            <span className="cursor-pointer">Ready to Wear</span>
            <span className="cursor-pointer">All For MEn</span>
          </div>

          <p className="text-[0.7rem] text-gray-600 text-center max-w-[200px]">Copyright 2023 @ vader. All rights reserved</p>
        </div>
      </div>
    </div>) }
    </>
  )
}

export default Navbar
