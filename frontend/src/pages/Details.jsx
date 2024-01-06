import { useState } from 'react';
import styles from '../style.js'
import { arizona1, arizona2, arizona3, arizona4 } from '../assets/index.js'
import { FaStar } from "react-icons/fa";
import { TbWorldHeart } from "react-icons/tb";
import { IoMdHeartEmpty } from "react-icons/io";
import { CiShare1 } from "react-icons/ci";

const Details = () => {

  const [ colors, setColors ] = useState(null)
  const [ sizes, setSizes] =  useState(null)
  const [ quantity, setQuantity ] = useState(1)

  const noOfStars = 5;

  const colorsBg = [
    'bg-red-600',
    'bg-blue-600',
    'bg-orange-600',
    'bg-blue-300',
    'bg-green-600',
    'bg-red-200',
    'bg-black',
    'bg-gray-300'
  ]

  const sizeContent = [ "XXS", "XS", "S", "M", "L", "XL", "XXL" ]

  return (
    <div className={`${styles.boxWidth}`}>
      <div className='flex justify-center items-start'>
        <div>
          <img src="" alt="" />
        </div>

        <div className='flex flex-col gap-3'>
          <h1>Basic Colred Sweatpants With Elastic Hems</h1>
          <div className='flex items-center gap-3 text-[0.8rem] font-medium'>
            <div className='flex gap-1'>
              {[...Array(noOfStars)].map((_,index) => (
                <FaStar key={index} className='text-yellow-400'/>
              ))}
            </div>
            <p>2 reviews</p>
          </div>

          <div className='flex items-center gap-4 text-[1.3rem] font-normal'>
            <span className='line-through text-gray-300'>$25.90</span>
            <span>$19.90</span>
          </div>
          <p className='text-[0.8rem] leading-[1.5rem] max-w-[500px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

          <div className='flex flex-col gap-3'>
            <span className='text-[0.85rem]'>Color</span>
            <div className='flex items-center gap-4'>
              {
                colorsBg.map((color, index) => (
                  <div key={index} 
                    className={`${color} w-[30px] h-[30px] rounded-full cursor-pointer ${
                    colors === color ? 'border-[2px] border-red-500 p-2 w-[25px] h-[25px]' : ''
                  }`} onClick={()=>setColors(color)}></div>
                  ))
              }
            </div>
          </div>
          <div className='flex flex-col gap-3'>
            <span className='text-[0.85rem]'>Size</span>
            <div className='flex flex-wrap max-w-[500px] items-start gap-2'>
              {
                sizeContent.map((item, index)=> (
                  <div key={index}>
                    <button className='h-[40px] w-[80px] p-2 border border-gray-200'>{item}</button>
                  </div>
                ))
              }
            </div>
          </div>

          <div className='flex items-center gap-3 mt-10'>
            <div className='flex items-center gap-8 border border-gray-200 w-fit px-3 py-2'>
              <button className='text-[1.5rem] font-medium cursor-pointer' onClick={()=>setQuantity(quantity ===1?1 : quantity - 1)}>-</button>
              <span>{quantity}</span>
              <button className='text-[1.5rem] font-medium cursor-pointer' onClick={()=>setQuantity(quantity + 1)}>+</button>
            </div>
            <div>
              <button className='text-center text-white bg-gray-400 h-[50px] w-[300px] text-[0.85rem]'>Add to cart</button>
            </div>
          </div>
          {/* size guide, wishlist, share */}
          <div className='flex items-center gap-5 py-5 border-b border-gray-300'>
              <div className='flex gap-2 items-center text-gray-500 text-[0.85rem]'>
                  <TbWorldHeart className='text-[1.5rem]'/>
                  <p>Size Guide</p>
              </div>

              <div className='flex gap-2 items-center text-gray-400 text-[0.85rem]'>
                  <IoMdHeartEmpty className='text-[1.5rem]'/>
                  <p>Add to Wishlist</p>
              </div>

              <div className='flex gap-2 items-center text-gray-500 text-[0.85rem]'>
                  <CiShare1 className='text-[1.5rem]'/>
                  <p>Share this Product</p>
              </div>
          </div>
          {/* other details */}
          <div className='flex flex-col gap-3 text-gray-400 text-[0.85rem]'>
            <div>SKU: <span className='text-gray-800 ml-2'>BE45VGRT</span></div>
            <div>Categories: <span className='text-gray-800 ml-2'>PANTS, WOMEN</span></div>
            <div>Tags: <span className='text-gray-800 ml-2'>black, white</span></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Details
