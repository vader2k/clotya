import card from '../assets/cards.png'

const Footer = () => {
  return (
    <div className=''>
      <div className="pt-20 pb-10 max-w-[1300px] m-auto">
        <div className='flex items-start justify-between'>
          <div className='flex flex-col gap-4'>
            <h1 className='text-[2.5rem] font-bold font-roboto'>Clotya</h1>
            <p className='max-w-[350px] text-[0.8rem]'>
              Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis in termapol.
            </p>
            <span className='text-[0.8rem]'>
              (+800) 1234 5678 90 – info@example.com
            </span>
          </div>

          <div className='flex flex-col gap-3'>
            <h2 className='text-[1rem] font-bold'>Information</h2>
            <div className='text-[0.8rem] flex flex-col gap-2'>
              <p>About Us</p>
              <p>Privacy Policy</p>
              <p>Returns Policy</p>
              <p>Shipping Policy</p>
              <p>Dropshipping</p>
            </div>
          </div>

          <div className='flex flex-col gap-3'>
            <h2 className='text-[1rem] font-bold'>Account</h2>
            <div className='text-[0.8rem] flex flex-col gap-2'>
              <p>Dashboard</p>
              <p>My Orders</p>
              <p>My Wishlist</p>
              <p>Account details</p>
              <p>Track My Order</p>
            </div>
          </div>

          <div className='flex flex-col gap-3'>
            <h2 className='text-[1rem] font-bold'>Shop</h2>
            <div className='text-[0.8rem] flex flex-col gap-2'>
              <p>Affiliate</p>
              <p>Bestsellers</p>
              <p>Discount</p>
              <p>Latest Products</p>
              <p>Sale Products</p>
            </div>
          </div>

          <div className='flex flex-col gap-3'>
            <h2 className='text-[1rem] font-bold'>Categories</h2>
            <div className='text-[0.8rem] flex flex-col gap-2'>
              <p>Women</p>
              <p>Men</p>
              <p>Bags</p>
              <p>Outerwear</p>
              <p>Shoes</p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-5 max-w-[1300px] m-auto">
        <hr />
      </div>
      <div className="py-10 max-w-[1300px] m-auto flex items-center justify-between">
        <div className='text-[0.7rem] flex gap-5'>
          <p>Copyright 2023 @ Design from Clotya Wordpress theme. Coded by Vader. All right reserved</p>
          <img src={card} alt="payments" />
        </div>
        <div className='flex items-center justify-between gap-5 text-[0.7rem]'>
          <span className='cursor-pointer'>Privacy Policy</span>
          <span className='cursor-pointer'>Terms and Conditions</span>
          <span className='cursor-pointer'>Returns Policy</span>
        </div>
      </div>
    </div>
  )
}

export default Footer
