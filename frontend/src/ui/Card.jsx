import { useState } from "react";

useState
const Card = ({item}) => {



  // const totalPictures = 4;
  // const data = [
  //   basic1, basic2, basic3, basic4
  // ]
  // const [currentImage, setCurrentImage] = useState(0);

  // const handleHover = (event) => {
  //   const box = event.currentTarget;
  //   const boxWidth = box.offsetWidth;
  //   const percentage = (event.nativeEvent.offsetX / boxWidth) * 100;

  //   const newIndex = Math.floor((percentage / 100) * totalPictures) % totalPictures;
  //   setCurrentImage(newIndex);
  // };

  return (
    <div className="w-[400px] h-[600px] ">
      {/* <div className="w-[600px] h-[600px] bg-gray-200 relative"
        //  onMouseMove={handleHover}
        //  style={{
        //    width: '300px',
        //    height: '600px',
        //    background: `url(image${currentImage + 1}.jpg)`,
        //    backgroundSize: 'cover',
        //  }}>
        >
    
        <img
          src={item.img1}
          alt={`Image ${item.name}}`}
          className="w-full h-full object-cover"
        />
      </div> */}

      <div className="flex w-[400px] h-[600px]" style={{transform:`translateX(68vw)`}}>
        <img className="w-[] h-[600px]" src={item.img1} alt={item.name} />
      </div>
    </div>
    
  )
}

export default Card
