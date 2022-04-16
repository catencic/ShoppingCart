import { useContext } from "react"
import { CartContext } from "../context/cartContext"
import { SingleProducts } from "./SingleProducts";

import '../styles/styles.css'
import { Filters } from "./Filters";

export const Home = () => {


  const {products , filtersState: {byStock, byFastDelivery , byRating , sort , searchQuery}} = useContext(CartContext);

  const transformProduct = ()=>{
    let sortedProducts = products;

    if(sort){
      sortedProducts = sortedProducts.sort((a: any ,b: any)=>
        sort === 'lowToLow' ? a.price - b.price : b.price - a.price
       
      );
    }

    if (!byStock) {
      sortedProducts = sortedProducts.filter((prod) => prod.inStock);
    }

    if (byFastDelivery) {
      sortedProducts = sortedProducts.filter((prod) => prod.fastDelivery);
    }

    if (byRating) {
      sortedProducts = sortedProducts.filter(
        (prod) => prod.ratings >= byRating
      );
    }

    if (searchQuery) {
      sortedProducts = sortedProducts.filter((prod) =>
        prod.name.toLowerCase().includes(searchQuery)
      ); 

    }

    return sortedProducts;
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
