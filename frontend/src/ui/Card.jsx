const Card = () => {

  const totalPictures = 4;
  const data = [
    basic1, basic2, basic3, basic4
  ]
  const [currentImage, setCurrentImage] = useState(0);

  const handleHover = (event) => {
    const box = event.currentTarget;
    const boxWidth = box.offsetWidth;
    const percentage = (event.nativeEvent.offsetX / boxWidth) * 100;

    const newIndex = Math.floor((percentage / 100) * totalPictures) % totalPictures;
    setCurrentImage(newIndex);
  };

  return (
    <div>
      <div className="w-[300px] h-[600px] bg-gray-200 relative"
         onMouseMove={handleHover}
         style={{
           width: '300px',
           height: '600px',
           background: `url(image${currentImage + 1}.jpg)`,
           backgroundSize: 'cover',
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

export default Card
