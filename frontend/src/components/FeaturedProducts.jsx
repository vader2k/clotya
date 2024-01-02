import { useState } from "react"
import {  pants1, pants2, pants3, pants4, basic1, basic2, basic3, basic4,  leggings1, leggings2, leggings3, leggings4, overshirt1, overshirt2, overshirt3, overshirt4
  , pink1, pink2, pink3, pink4, cup1, cup2, cup3, cup4, dressblack1, dressblack2, dressblack3, dressblack4, slogan1, slogan2, slogan3, slogan4 } from "../assets"

const FeaturedProducts = () => {

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

  const slide = [
    {
      id:1,
      name: "Basic Colored Sweatpants With Elastic Hems",
      tag: "24%",
      oldPrice: "$25.90",
      price: "$19.90",
      review: "2",
      img1: pants1,
      img2: pants2,
      img3: pants3,
      img4: pants4
     },
 
     {
       id:2,
       name: "Basic High-Neck Puff Jacket",
       tag: "Trending",
       price: "$89.90",
       review: "1",
       img1: basic1,
       img2: basic2,
       img3: basic3,
       img4: basic4
      },
 
      {
       id:3,
       name: "Basic Relax Fit Leggings",
       tag: "17%",
       oldPrice: "$29.90",
       price: "$24.90",
       review: "1",
       img1: leggings1,
       img2: leggings2,
       img3: leggings3,
       img4: leggings4
      },
 
    {
      id:4,
      name: "Check Overshirt With Pocket Detail",
      tag: "14%",
      oldPrice: "$129.00",
      price: "$112.00",
      review: "1",
      img1: overshirt1,
      img2: overshirt2,
      img3: overshirt3,
      img4: overshirt4
     },

     {
      id:5,
      name: "Rose Printed Hoodie",
      price: "$110.99",
      review: "1",
      img1: pink1,
      img2: pink2,
      img3: pink3,
      img4: pink4
     },

     {
      id:6,
      name: "Word Wide Cup Print T-shirt",
      tag: "21%",
      oldPrice: "$29.99",
      price: "$23.99",
      review: "1",
      img1: cup1,
      img2: cup2,
      img3: cup3,
      img4: cup4
     },
 
    {
      id:7,
      name: "Sleeveless Ribbed Short Dress Black",
      tag: "26%",
      oldPrice: "$19.99",
      price: "$14.99",
      review: "1",
      img1: dressblack1,
      img2: dressblack2,
      img3: dressblack3,
      img4: dressblack4
     },

     {
      id:8,
      name: "Slogan Hoodie With Label Detail",
      tag: "37%",
      oldPrice: "$18.99",
      price: "$11.90",
      review: "1",
      img1: slogan1,
      img2: slogan2,
      img3: slogan3,
      img4: slogan4
     },

     {  
        id:9,
        name: "Basic Colored Sweatpants With Elastic Hems",
        tag: "24%",
        oldPrice: "$25.90",
        price: "$19.90",
        review: "2",
        img1: pants1,
        img2: pants2,
        img3: pants3,
        img4: pants4
    },
  ]
console.log(slide)
  return (
    <div className="py-8">
      <div className="flex justify-between">
        <h1 className="text-[1.8rem] font-medium">Featured Products</h1>
        <p className="max-w-[730px] text-gray-500 font-extralight">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
      </div>

      <div className="py-8 flex overflow-x-auto gap-8 h-[700px]">
        {slide.map((item) => (
          <div
            key={item.id}
            className="flex-none relative"
            onMouseMove={(event) => handleHover(item.id, event)}
          >
            <img
              className="object-contain w-[400px] h-[600px] cursor-pointer"
              src={item[`img${activeImageIndices[item.id] || 1}`]}
              alt={`product-${item.id}`}
            />
          </div>
        ))}
      </div>     
    </div>
  )
}

export default FeaturedProducts
