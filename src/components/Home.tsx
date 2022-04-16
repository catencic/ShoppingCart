import { useContext } from "react"
import { CartContext } from "../context/cartContext"
import { SingleProducts } from "./SingleProducts";

import '../styles/styles.css'
import { Filters } from "./Filters";

export const Home = () => {


  const {products , filtersState: {sort}} = useContext(CartContext);

  const transformProduct = ()=>{
    let sortdProducts = products;

    if(sort){
      sortdProducts = sortdProducts.sort((a: any ,b: any)=>
        sort === 'lowToLow' ? a.price - b.price : b.price - a.price
       
      );
    }

    return sortdProducts;
  }



  return (
    <>
    <div className="home">
      <Filters />
      <div className="productContainer">
        {
          transformProduct().map(product =>(
             <SingleProducts product={product} key={product.id}/>
          ))
        }

      </div>


    </div>
    
    
    
    
    </>
  )
}
