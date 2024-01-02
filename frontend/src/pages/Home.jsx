import { HeroSlider, Categories, Featured, TopBrand, Collections, News, } from "../components"
import styles from '../style'

const Home = () => {
  return (
    <div>
      <HeroSlider/>
      <div className={`${styles.boxWidth}, ${styles.padding} m-auto`}>
        <Categories/>
        <Featured />
        <TopBrand />
        <Collections />
        <News/>
      </div>
    </div>
  )
}

export default Home
