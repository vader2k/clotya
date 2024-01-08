import { useParams } from "react-router-dom"
import styles from '../style'
import cover from '../assets/banner-26.jpg'

const Products = () => {

    // const catId = parseInt(useParams().id)
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
  

  return (
    <div>
      <div className={`${styles.boxWidth} ${styles.paddingY}`}>
        <div className="flex items-start justify-center gap-14">
          <div className="flex-[0.5]">
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-5">
                <h2>Filter by price</h2>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2"><p>Price:</p> <span>$0 - $1,300</span></div>
                  <button className="bg-gray-200 text-[0.65rem] p-2">FILTER</button>
                </div>
                <input 
                  type="range"
                  min="0"
                  max="1,300" 
                  className="h-[2px] appearance-none bg-red-500 cursor-pointer rounded-full outline-none"/>
              </div>

              <div className="flex flex-col gap-5">
                <h2 className="text-[0.9rem] font-medium">Filter by Color</h2>
                <div className="flex items-center gap-3">
                  <div className="flex flex-col gap-5">
                    {
                      colorsBg.map((color, index) => (
                        <div key={index} 
                        className={`${color} w-[20px] h-[20px] rounded-full cursor-pointer`}></div>
                      ))
                    }
                  </div>
                  <div className="flex flex-col gap-[21px] text-[0.8rem]">
                    <p>Apple Red</p>
                    <p>Bio Blue</p>
                    <p>Sweet Orange</p>
                    <p>Blue</p>
                    <p>Green</p>
                    <p>Pink</p>
                    <p>Black</p>
                    <p>White</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-5">
                <h2 className="text-[0.9rem] font-medium">Filter by Size</h2>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3 text-[0.8rem]">
                    <input type="checkbox" name="" id="" />
                    <span>XXS</span>
                  </div>
                  <div className="flex items-center gap-3 text-[0.8rem]">
                    <input type="checkbox" name="" id="" />
                    <span>XS</span>
                  </div>
                  <div className="flex items-center gap-3 text-[0.8rem]">
                    <input type="checkbox" name="" id="" />
                    <span>S</span>
                  </div>
                  <div className="flex items-center gap-3 text-[0.8rem]">
                    <input type="checkbox" name="" id="" />
                    <span>M</span>
                  </div>
                  <div className="flex items-center gap-3 text-[0.8rem]">
                    <input type="checkbox" name="" id="" />
                    <span>L</span>
                  </div>
                  <div className="flex items-center gap-3 text-[0.8rem]">
                    <input type="checkbox" name="" id="" />
                    <span>XL</span>
                  </div>
                  <div className="flex items-center gap-3 text-[0.8rem]">
                    <input type="checkbox" name="" id="" />
                    <span>XXL</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-5">
                <h2 className="text-[0.9rem] font-medium">Product Status</h2>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3 text-[0.8rem]">
                    <input type="checkbox" name="" id="" />
                    <span>In Stock</span>
                  </div>
                  <div className="flex items-center gap-3 text-[0.8rem]">
                    <input type="checkbox" name="" id="" />
                    <span>On Sale</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-[2]">
            <img src={cover} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products
