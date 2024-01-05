import { Routes , Route } from "react-router-dom"
import { Accessories, Blog, Contact, Home, Products, Details } from "../pages"

const Router = () => {
  return (
    <div>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/accessories" element={<Accessories/>}/>
    <Route path="/blog" element={<Blog/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/products/:id" element={<Products/>}/>
    <Route path="/details" element={<Details/>}/>
    </Routes>
    </div>
  )
}

export default Router
