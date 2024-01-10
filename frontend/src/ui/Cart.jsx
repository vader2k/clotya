import cloth from '../assets/arizona1.jpeg'
import { RiDeleteBin5Line } from "react-icons/ri";


const Cart = () => {
  return (
    <div className='absolute right-[100px] top-[80px] z-50 bg-white border rounded-md'>
      <div className='flex flex-col gap-5 px-3 py-5'>
        <div className='flex items-start gap-5 pb-5 border-b border-gray-300'>
          <img className='h-[80px] object-contain' src={cloth} alt=""/>
          <div className='flex flex-col gap-3'>
            <p className='capitalize font-bold max-w-[200px] text-[0.9rem]'>Basic Colored Sweatpants With Elastic Hems</p>
            <div className='flex gap-2 text-[0.85rem]'>
              <span>1</span>
              <span>x</span>
              <span>$19.90</span>
            </div>
            <div className='flex gap-3 text-[0.85rem]'>
              <div>Color: Black</div> <div>Size: M</div>
            </div>
          </div>
          <div>
            <RiDeleteBin5Line className='text-red-500'/>
          </div>
        </div>

        <div className='flex flex-col gap-2'>
          <div className='flex items-start justify-between'>
            <span className='text-gray-300 font-medium text-[0.9rem]'>Subtotal:</span>
            <span className='text-[1rem] font-bold text-red-500'>$19.90</span>
          </div>
          <p className='text-[0.85rem]'>You have 1 item in your cart</p>
          <p className='text-[0.75rem] text-red-500 cursor-pointer font-bold'>RESET</p>
        </div> 

        <div className='flex flex-col gap-2 text-[0.85rem] text-white'>
          <button className='bg-gray-500 py-3'>View cart</button>
          <button className='bg-red-500 py-3'>Checkout</button>
        </div>
      </div>
    </div>
  )
}

export default Cart
