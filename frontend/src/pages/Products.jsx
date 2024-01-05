import { useParams } from "react-router-dom"

const Products = () => {

    const catId = parseInt(useParams().id)

  return (
    <div>
      products
    </div>
  )
}

export default Products
