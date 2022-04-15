import { useContext } from "react"
import { CartContext } from "../context/cartContext"
import { SingleProducts } from "./SingleProducts";

import '../styles/styles.css'
import { Filters } from "./Filters";

export const Home = () => {


  const {products} = useContext(CartContext);



  return (
    <>
    <div className="home">
      <Filters />
      <div className="productContainer">
        {
          products.map(product =>(
             <SingleProducts product={product} key={product.id}/>
          ))
        }

      </div>


    </div>
    
    
    
    
    </>
  )
}
