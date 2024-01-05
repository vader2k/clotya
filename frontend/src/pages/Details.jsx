import styles from '../style.js'
import { arizona1, arizona2, arizona3, arizona4 } from '../assets/index.js'
import { FaStar } from "react-icons/fa";

const Details = () => {

  const noOfStars = 5;

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

          <p className='text-[0.8rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>
    </div>
  )
}

export default Details
