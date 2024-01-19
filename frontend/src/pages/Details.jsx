import { useState } from 'react';
import styles from '../style.js'
import { FaStar } from "react-icons/fa";
import { TbWorldHeart } from "react-icons/tb";
import { IoMdHeartEmpty } from "react-icons/io";
import { CiShare1 } from "react-icons/ci";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { RelatedProducts } from '../components/index.js'
import useFetch from '../hooks/useFetch.js';
import { useParams } from 'react-router-dom';

const Details = () => {

  const id = useParams().id

  const {data, loading, error} = useFetch(`/products/${id}?populate=*`)
  console.log(data)
  const [ colors, setColors ] = useState(null)
  const [ sizes, setSizes] =  useState(null)
  const [ quantity, setQuantity ] = useState(1)
  const [ activeTab, setActiveTab ] = useState("description")
  // created a useState to handle active picture gallery
  const [picture, setPicture] = useState('img1')

  // function to set the image onClick
  const handlePictureClick = (pictureType) => {
    setPicture(pictureType)
  }

  // function to handle next picture
const handleNextPicture = () => {
  const pictureIndex = parseInt(picture.charAt(picture.length - 1), 10);
  const nextIndex = pictureIndex % 4 + 1;
  setPicture(`img${nextIndex}`);
}

// function to handle previous picture
const handlePrevPicture = () => {
  const pictureIndex = parseInt(picture.charAt(picture.length - 1), 10);
  const prevIndex = (pictureIndex - 2 + 4) % 4 + 1;
  setPicture(`img${prevIndex}`);
}

  // star icon
  const noOfStars = 5;

  // color selector for outfits
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

  // sizes options
  const sizeContent = [ "XXS", "XS", "S", "M", "L", "XL", "XXL" ]

  return (
    <div className={`${styles.boxWidth} ${styles.paddingY}`}>
      {error 
        ? "something went wrong!" 
        : loading ? "loading" 
        : (<>
            <div className='flex justify-center items-start'>
              <div className='flex-1'>
                <div className='flex flex-col gap-3 '>
                  <div className='relative w-fit'>
                  <img className='h-[650px] cursor-pointer' src={import.meta.env.VITE_UPLOAD_URL + data?.attributes?.[picture]?.data?.attributes?.url} alt="" />
                    <div className='absolute top-[50%] text-[2rem] text-gray-500'>
                      <IoIosArrowBack className='cursor-pointer' onClick={handlePrevPicture}/>
                    </div>
                    <div className='absolute top-[50%] right-0 text-[2rem] text-gray-500'>
                      <IoIosArrowForward className='cursor-pointer' onClick={handleNextPicture}/>
                    </div>
                  </div>
                  <div className='flex items-center gap-3'>
                    <img className='w-[80px] h-[80px] object-cover cursor-pointer' src={import.meta.env.VITE_UPLOAD_URL + data?.attributes?.img1?.data?.attributes?.url} alt="arizona1" onClick={()=> handlePictureClick('img1')}/>
                    <img className='w-[80px] h-[80px] object-cover cursor-pointer' src={import.meta.env.VITE_UPLOAD_URL + data?.attributes?.img2?.data?.attributes?.url} alt="arizona2" onClick={()=> handlePictureClick('img2')}/>
                    <img className='w-[80px] h-[80px] object-cover cursor-pointer' src={import.meta.env.VITE_UPLOAD_URL + data?.attributes?.img3?.data?.attributes?.url} alt="arizona3" onClick={()=> handlePictureClick('img3')}/>
                    <img className='w-[80px] h-[80px] object-cover cursor-pointer' src={import.meta.env.VITE_UPLOAD_URL + data?.attributes?.img4?.data?.attributes?.url} alt="arizona4" onClick={()=> handlePictureClick('img4')}/>
                  </div>
                </div>
              </div>

              <div className='flex flex-col gap-2 flex-1'>
                <h1 className='text-[1.5rem] font-medium max-w-[400px]'>{data?.attributes?.title}</h1>
                <div className='flex items-center gap-3 text-[0.8rem] font-medium'>
                  <div className='flex gap-1'>
                    {[...Array(noOfStars)].map((_,index) => (
                      <FaStar key={index} className='text-yellow-400'/>
                    ))}
                  </div>
                  <p>{data?.attributes?.review}</p>
                </div>

                <div className='flex items-center gap-4 text-[1.3rem] font-normal'>
                  <span className='line-through text-gray-300'>${data?.attributes?.oldPrice || data?.attributes?.price + 20}</span>
                  <span>${data?.attributes?.price}</span>
                </div>
                <p className='text-[0.8rem] leading-[1.5rem] max-w-[500px]'>{data?.attributes?.desc}</p>

                <div className='flex flex-col gap-3'>
                  <span className='text-[0.85rem]'>Color</span>
                  <div className='flex items-center gap-4'>
                    {
                      colorsBg.map((color, index) => (
                        <div key={index} 
                          className={`${color} w-[30px] h-[30px] rounded-full cursor-pointer ${
                          colors === color ? 'border-[2px] border-yellow-500 p-2 w-[10px] h-[10px]' : ''
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
                          <button className={`${item} h-[40px] w-[80px] p-2 border border-gray-200 ${sizes === item ? 'bg-red-500 text-white' : ""}`} 
                          onClick={()=> setSizes(item)}>{item}</button>
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
              
              {/* Description, Additional Information & Reviews tab */}
            <div>
              <div className='flex items-center gap-8 py-10 text-[1.1rem] font-medium border-b border-gray-300'>
                <button 
                  onClick={()=> setActiveTab("description")}
                  className={`${activeTab === "description" && 'text-gray-900' } font-medium text-gray-400 hover:text-gray-600`}>
                  Description
                </button>
                <button 
                  onClick={()=> setActiveTab("information")}
                  className={`${activeTab === "information" && 'text-gray-900' } font-medium text-gray-400 hover:text-gray-600`}>
                  Additional information
                </button>
              </div>
              <div className='py-5'>
                {
                  activeTab === 'description' 
                    && 
                      <div className='flex flex-col gap-2 text-[0.85rem] leading-[2rem]'>
                        <p>Quisque varius diam vel metus mattis, id aliquam diam rhoncus. Proin vitae magna in dui finibus malesuada et at nulla. Morbi elit ex, viverra vitae ante vel, blandit feugiat ligula. Fusce fermentum iaculis nibh, at sodales leo maximus a. Nullam ultricies sodales nunc, in pellentesque lorem mattis quis. Cras imperdiet est in nunc tristique lacinia. Nullam aliquam mauris eu accumsan tincidunt. Suspendisse velit ex, aliquet vel ornare vel, dignissim a tortor.</p>
                        <p>Morbi ut sapien vitae odio accumsan gravida. Morbi vitae erat auctor, eleifend nunc a, lobortis neque. Praesent aliquam dignissim viverra. Maecenas lacus odio, feugiat eu nunc sit amet, maximus sagittis dolor. Vivamus nisi sapien, elementum sit amet eros sit amet, ultricies cursus ipsum. Sed consequat luctus ligula. Curabitur laoreet rhoncus blandit. Aenean vel diam ut arcu pharetra dignissim ut sed leo. Vivamus faucibus, ipsum in vestibulum vulputate, lorem orci convallis quam, sit amet consequat nulla felis pharetra lacus. Duis semper erat mauris, sed egestas purus commodo vel.</p>
                      </div>
                }

                {
                  activeTab === 'information' 
                    && 
                      <div className='flex flex-col gap-2 py-2'>
                        <h1>Additional information</h1>
                        <div className='flex items-center'>
                          <span className='h-[50px] w-[150px] flex items-center px-3 font-bold border border-gray-300'>Color</span>
                          <span className='h-[50px] w-[1000px] flex items-center px-3 text-[0.85rem] border border-gray-300'>Apple, Red, Bio, Blue, Orange, Green, Pink, Black, white</span>
                        </div>
                        <div className='flex items-center'>
                          <span className='h-[50px] w-[150px] flex items-center px-3 font-bold border border-gray-300'>Size</span>
                          <span className='h-[50px] w-[1000px] flex items-center px-3 text-[0.85rem] border border-gray-300'>XXS, XS, S, M, L, XL, XXL</span>
                        </div>
                      </div>
                  }
              </div>
            </div>

              {/* related products component */}
              <div className='py-8'>
                <RelatedProducts/>
              </div>
          </>)}
    </div>
  )
}

export default Details
