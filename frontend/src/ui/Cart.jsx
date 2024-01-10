import cloth from '../assets/arizona1.jpeg'

const Cart = () => {
  return (
    <div>
      <div>
        <div>
          <img src={cloth} alt=""/>
          <div>
            <span>Basic Colored Sweatpants With Elastic Hems</span>
            <div>
              <span>1</span>
              <span>x</span>
              <span>$19.90</span>
            </div>
            <div>Color: Black</div> <div>Size: M</div>
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
