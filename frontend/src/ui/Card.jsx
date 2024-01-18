import { Link } from "react-router-dom"
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { IoIosHeartEmpty } from "react-icons/io";
import { LiaCompressSolid } from "react-icons/lia";
import { BsArrowRepeat } from "react-icons/bs";
import { IoBagOutline } from "react-icons/io5";

const Card = ({item}) => {

  const [activeImageIndices, setActiveImageIndices] = useState({});

  const handleHover = (id, event) => {
    const container = event.currentTarget;
    const xPosition = event.clientX - container.getBoundingClientRect().left;
    const percentage = (xPosition / container.clientWidth) * 100;

    let newIndex = 1; // Default to img1

    if (percentage > 25 && percentage <= 50) {
      newIndex = 2;
    } else if (percentage > 50 && percentage <= 75) {
      newIndex = 3;
    } else if (percentage > 75) {
      newIndex = 4;
    }

    setActiveImageIndices((prev) => ({ ...prev, [id]: newIndex }));
  };


  return (
    <Link to={`/details/${item.id}`}>
      <div className="holder relative py-10">
          <div
            className="flex-none relative w-[200px] h-[300px] "
            onMouseMove={(event) => handleHover(item.id, event)}
          >
            <div className="img-holder">
              <img
                className="object-cover w-[200px] h-[300px] cursor-pointer"
                // src={item[`img${activeImageIndices[item.id] || 1}`]}
                src={import.meta.env.VITE_UPLOAD_URL + item?.attributes[`img${activeImageIndices[item.id] || 1}`].data?.attributes?.url}
                alt={`product-${item.id}`}
              />
              {/* side functions */}
              <div className="sideBtns absolute top-5 right-5 text-[2.2rem] flex flex-col gap-3">
                <IoIosHeartEmpty className="p-2 bg-white rounded-full text-gray-600 hover:bg-red-500 hover:text-white hover:font-medium"/>
                <LiaCompressSolid className="p-2 bg-white rounded-full text-gray-600 hover:bg-red-500 hover:text-white hover:font-medium"/>
                <BsArrowRepeat className="p-2 bg-white rounded-full text-gray-600 hover:bg-red-500 hover:text-white hover:font-medium"/>
                <IoBagOutline className="p-2 bg-white rounded-full text-gray-600 hover:bg-red-500 hover:text-white hover:font-medium"/>
              </div>
            </div>
            <div className="bg-white flex flex-col gap- my-3">
              <div className="flex  items-center gap-3"><FaStar className="text-[0.8rem] text-yellow-400"/> <span className="text-[0.8rem] font-medium">{item?.attributes.review}</span></div>
              <p className="text-[0.8rem] capitalize">{item?.attributes.title}</p>
              <div className="flex items-center gap-5 text-[0.9rem]">
                <span className="text-gray-400 line-through">${item?.attributes.oldPrice || item.attributes.price + 20}</span>
                <span>${item?.attributes.price}</span>
              </div>
            </div>
            <div>
              {item?.attributes.tag && <div className="absolute top-4 left-2  px-2 py-1 text-[0.7rem] bg-white text-green-500 font-medium">26%</div>}
            </div>
          </div> 
      </div>
    </Link>
  )
}

export default Card

