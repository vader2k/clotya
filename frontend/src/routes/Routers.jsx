import { Routes , Route } from "react-router-dom"
import { Accessories, Blog, Contact, Home, Products, Details } from "../pages"
import Clothing from "../pages/News/Clothing"
import Collection from "../pages/News/Collection"
import Fashion from '../pages/News/Fashion'

const Router = () => {
  return (
    <div>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/accessories" element={<Accessories/>}/>
    <Route path="/blog" element={<Blog/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/products/:id" element={<Products/>}/>
    <Route path="/details/:id" element={<Details/>}/>
    <Route path="clothing" element={<Clothing/>}/>
    <Route path="collection" element={<Collection/>}/>
    <Route path="fashion" element={<Fashion/>}/>
    </Routes>
    </div>
  )
}

export default Router
