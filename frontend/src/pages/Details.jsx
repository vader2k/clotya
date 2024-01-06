import { useState } from 'react';
import styles from '../style.js'
import { arizona1, arizona2, arizona3, arizona4 } from '../assets/index.js'
import { FaStar } from "react-icons/fa";

const Details = () => {

  const [ colors, setColors ] = useState(null)
  const [ sizes, setSizes] =  useState(null)
  const [ amount, setAmount ] = useState(1)

  const add = () => {
    
  }

  const subtract = () => {

  }

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
      <div className='flex justify-center items-center'>
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
                  <div key={index} className={`${color} w-[30px] h-[30px] rounded-full`}></div>
                  ))
              }
            </div>
          </div>
          <div className='flex flex-col gap-3'>
            <span className='text-[0.85rem]'>Size</span>
            <div className='flex flex-wrap max-w-[500px] items-start gap-2'>
              {
                sizeContent.map((item)=> (
                  <div key={item.id}>
                    <button className='h-[40px] w-[80px] p-2 border border-gray-200'>{item}</button>
                  </div>
                ))
              }
            </div>
          </div>

          <div className='flex items-center gap-3'>
            <div className='flex items-center gap-8 border border-gray-200 w-fit px-3 py-2'>
              <span className='text-[1.5rem] font-medium cursor-pointer'>-</span>
              <span>{amount}</span>
              <span className='text-[1.5rem] font-medium cursor-pointer'>+</span>
            </div>
            <div>
              <button className='text-center text-white bg-gray-400 h-[50px] w-[300px]'>Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Details
