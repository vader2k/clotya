import { basic1, basic2, basic3, basic4 } from "../assets"
import { useState } from "react";

const FeaturedProducts = () => {

  const data = [
    basic1, basic2, basic3, basic4
  ]
  const [currentImage, setCurrentImage] = useState(0);

  const handleHover = (percentage) => {
    // Calculate the new picture index based on the percentage.
    const totalImages = data.length;
    const newIndex = Math.floor((percentage / 100) * totalImages) % totalImages;

    // Set the new picture as the current picture.
    setCurrentImage(newIndex);
  };


  return (
    <div className="py-8">
      <div className="flex justify-between">
        <h1 className="text-[1.8rem] font-medium">Featured Products</h1>
        <p className="max-w-[730px] text-gray-500 font-extralight">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
      </div>

      <div className="w-[300px] h-[600px] bg-gray-200 relative"
        onMouseEnter={(e) => {
          // Get the width of the box.
          const boxWidth = e.target.offsetWidth;
            // Calculate the percentage based on where you hover.
          const hoverPercentage = (e.nativeEvent.offsetX / boxWidth) * 100;
            // Call the handleHover function with this percentage.
          handleHover(hoverPercentage);
        }}>
    
        <img
          src={data[currentImage]}
          alt={`Image ${currentImage + 1}`}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  )
}

export default FeaturedProducts
