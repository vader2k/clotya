import cloth from '../assets/arizona1.jpeg'
import { RiDeleteBin5Line } from "react-icons/ri";


const Cart = () => {
  return (
    <div className='absolute right-[100px] top-[80px] z-50 bg-white border rounded-md'>
      <div className='flex flex-col gap-5 px-3 py-5'>
        <div>
          <img className='h-[80px] object-contain' src={cloth} alt=""/>
          <div>
            <span>Basic Colored Sweatpants With Elastic Hems</span>
            <div>
              <span>1</span>
              <span>x</span>
              <span>$19.90</span>
            </div>
            <div>Color: Black</div> <div>Size: M</div>
          </div>
          <div>

          </div>
        </div>

        <div>
          <div>
            <span>Subtotal</span>
            <span>$19.90</span>
          </div>
          <p>You have 1 item in your cart</p>
          <p>RESET</p>
        </div> 

        <div>
          <button>View cart</button>
          <button>Checkout</button>
        </div>
      </div>
    </div>
  )
}

export default Cart
