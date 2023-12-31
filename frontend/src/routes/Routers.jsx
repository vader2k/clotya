import { Routes , Route } from "react-router-dom"
import { Accessories, Blog, Contact, Home, Men, Shoes, Shop, Women } from "../pages"

const Router = () => {
  return (
    <div>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/accessories" element={<Accessories/>}/>
    <Route path="/blog" element={<Blog/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/men" element={<Men/>}/>
    <Route path="/shoes" element={<Shoes/>}/>
    <Route path="/shop" element={<Shop/>}/>
    <Route path="/women" element={<Women/>}/>
    </Routes>
    </div>
  )
}

export default Router
