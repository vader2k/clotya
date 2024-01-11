import { useParams } from "react-router-dom"
import styles from '../style'
import cover from '../assets/banner-26.jpg'
import { List } from '../components'
import { useState } from "react"
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
  
    const [maxValue, setMaxValue] = useState(1300)

    // created an onChange function to handle the change event of the checkbox. it takes the event as an argument and updates the selected sub category state.
    const handleChange = (e) => {
      const value = e.target.value
      const isChecked = e.target.checked
      // if the checkbox is checked, the selected sub category state is updated with the value of the checkbox
      // if the checkbox is unchecked, the selected sub category state is updated with the value of the checkbox
      setSelectedSubCategory(isChecked ? [...selectedSubCategory, value] : selectedSubCategory.filter((item) => item !== value))
    }


  return (
    <div>
      <div className={`${styles.boxWidth} ${styles.paddingY}`}>
        <div className="flex items-start justify-center gap-14">
          <div className="flex-[0.5] sticky top-0">
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-5">
                <h2 className="text-[0.9rem] font-bold">Filter by price</h2>
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
                <h2 className="text-[0.9rem] font-bold">Filter by Color</h2>
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
                <h2 className="text-[0.9rem] font-bold">Filter by Size</h2>
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
                <h2 className="text-[0.9rem] font-bold">Product Status</h2>
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
            <div className="relative">
              <img src={cover} alt="" />
              <div className="absolute top-0 py-20 px-20">
                <h1 className="text-[2rem] max-w-[300px]">Plus-Size Styles for Every Season</h1>
                <p className="py-5 text-[0.9rem] text-gray-500 max-w-[300px]">Quis ipsum dolor sit amet consectetur adipisicing elit. Quasi.</p>
              </div>
            </div>

            <div className="py-10">
              <List />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products
