import card from '../assets/cards.png'

const Footer = () => {
  return (
    <div className='py-20'>
      <div className="max-w-[1300px] flex items-start justify-between m-auto">
        <div>
          <h1 className='text-[1.5rem] font-bold font-roboto'>Clotya</h1>
          <p>
            Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis in termapol.
          </p>
          <span>
            (+800) 1234 5678 90 – info@example.com
          </span>
        </div>

        <div>
          <h2>Information</h2>
          <div>
            <p>About Us</p>
            <p>Privacy Policy</p>
            <p>Returns Policy</p>
            <p>Shipping Policy</p>
            <p>Dropshipping</p>
          </div>
        </div>

        <div>
          <h2>Shop</h2>
          <div>
            <p>Affiliate</p>
            <p>Bestsellers</p>
            <p>Discount</p>
            <p>Latest Products</p>
            <p>Sale Products</p>
          </div>
        </div>

        <div>
          <h2>Categories</h2>
          <div>
            <p>Women</p>
            <p>Men</p>
            <p>Bags</p>
            <p>Outerwear</p>
            <p>Shoes</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
