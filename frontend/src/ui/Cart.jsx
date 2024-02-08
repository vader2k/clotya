import { RiDeleteBin5Line } from "react-icons/ri";
import { useSelector, useDispatch } from 'react-redux'
import { removeItem, resetCart } from "../Redux/cartReducer";
import {loadStripe} from '@stripe/stripe-js';
import { makeRequest } from '../makeRequest'
const Cart = () => {

  const dispatch = useDispatch()

  const products = useSelector(state=> state.cart.products)

  const totalPrice = () => {
    let total = 0;
    products.forEach((item)=> (total += item.quantity * item.price))
    return total.toFixed(2)
  }

  const stripePromise = loadStripe('pk_test_51OSjQxKW4OXIG6CaafP2wkL3XIFOO2dvdSLzWENhacIc030OTYfktlGNk5eZ4qW9QfvQl2mRgoTiWXibnqV7gunW00vmtBoSFn');
  const handlePayment = async() => {
    try {
      const stripe = await stripePromise
      const res = await makeRequest.post("/orders", products)

      await stripe.redirectToCheckout({
        sessionId:res.data.stripeSession.id,
      })
    } catch (error) {
      console.log(error)
    } 
  }
  return (
    <div className='absolute right-[100px] top-[80px] z-50 bg-white border rounded-md'>
      <div className='flex flex-col gap-5 px-3 py-5'>
        {
          products.map(item=> (
            <div key={item.id} className='flex items-start gap-5 pb-5 border-b border-gray-300'>
              <img className='h-[80px] object-contain' src={import.meta.env.VITE_UPLOAD_URL + item.img} alt={item.title}/>
              <div className='flex flex-col gap-3'>
                <p className='capitalize font-bold max-w-[200px] text-[0.9rem]'>{item.title}</p>
                <div className='flex gap-2 text-[0.85rem]'>
                  <span>{item.quantity}</span>
                  <span>x</span>
                  <span>${item.price}</span>
                </div>
                <div className='flex gap-3 text-[0.85rem]'>
                  <div>Color: {item.colors}</div> <div>Size: {item.sizes}</div>
                </div>
              </div>
              <div>
                <RiDeleteBin5Line className='text-red-500 cursor-pointer' onClick={()=>dispatch(removeItem(item.id))}/>
              </div>
            </div>
          ))
        }
        <div className='flex flex-col gap-2'>
          <div className='flex items-start justify-between'>
            <span className='text-gray-300 font-medium text-[0.9rem]'>Subtotal:</span>
            <span className='text-[1rem] font-bold text-red-500'>${totalPrice()}</span>
          </div>
          <p className='text-[0.85rem]'>You have {products.length} item in your cart</p>
          <p className='text-[0.75rem] text-red-500 cursor-pointer font-bold' onClick={()=> dispatch(resetCart())}>RESET</p>
        </div> 

        <div className='flex flex-col gap-2 text-[0.85rem] text-white'>
          <button className='bg-gray-500 py-3'>View cart</button>
          <button className='bg-red-500 py-3' onClick={handlePayment}>Checkout</button>
        </div>
      </div>
    </div>
  )
}

export default Cart
