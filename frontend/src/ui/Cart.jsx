import { RiDeleteBin5Line } from "react-icons/ri";
import { useSelector } from 'react-redux'
import { removeItem, resetCart } from "../Redux/cartReducer";
import { useDispatch } from "react-redux";

const Cart = () => {

  const products = useSelector(state=> state.cart.products)

  return (
    <div className='absolute right-[100px] top-[80px] z-50 bg-white border rounded-md'>
      <div className='flex flex-col gap-5 px-3 py-5'>
        {
          products.map(item=> (
            <div key={item.id} className='flex items-start gap-5 pb-5 border-b border-gray-300'>
              <img className='h-[80px] object-contain' src={import.meta.env.VITE_UPLOAD_URL + item.img} alt=""/>
              <div className='flex flex-col gap-3'>
                <p className='capitalize font-bold max-w-[200px] text-[0.9rem]'>{item.title}</p>
                <div className='flex gap-2 text-[0.85rem]'>
                  <span>{item.quantity}</span>
                  <span>x</span>
                  <span>${item.price}</span>
                </div>
                <div className='flex gap-3 text-[0.85rem]'>
                  <div>Color: {item.color}</div> <div>Size: {item.size}</div>
                </div>
              </div>
              <div>
                <RiDeleteBin5Line className='text-red-500 cursor-pointer'/>
              </div>
            </div>
          ))
        }
        <div className='flex flex-col gap-2'>
          <div className='flex items-start justify-between'>
            <span className='text-gray-300 font-medium text-[0.9rem]'>Subtotal:</span>
            <span className='text-[1rem] font-bold text-red-500'>$19.90</span>
          </div>
          <p className='text-[0.85rem]'>You have {products.length} item in your cart</p>
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
