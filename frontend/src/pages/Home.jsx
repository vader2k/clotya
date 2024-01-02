import { HeroSlider, Categories, Featured, TopBrand, Collections, News, } from "../components"
import styles from '../style'
import Card from "../ui/Card"

const Home = () => {
  return (
    <div>
      <HeroSlider/>
      <div className={`${styles.boxWidth}, ${styles.padding} m-auto`}>
        <Categories/>
        <Card/>
        <Featured />
        <TopBrand />
        <Collections />
        <News/>
      </div>
    </div>
  )
}

export default Home
