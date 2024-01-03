import { useSwiper } from "swiper/react"

const SwiperNavButton = () => {

    const swiper = useSwiper()

  return (
    <div className="swiper-nav-btns">
        <button onClick={()=> swiper.slidePrev()}>prev</button>
        <button className="cursor-pointer bg-black text-white p-5" onClick={()=> swiper.slideNext()}>next</button>
    </div>
  )
}

export default SwiperNavButton
