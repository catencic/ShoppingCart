import { useContext } from 'react';
import { Button, Card } from 'react-bootstrap';
import { CartContext } from '../context/cartContext';
import { ProductProps } from '../interfaces/interfaces';
import { Rating } from './Rating';


export const SingleProducts = ({product}: any) => {

    const {cartState: { cart}, dispatch} = useContext(CartContext);

    const addToCart = ()=>{
        dispatch({
            type: 'addToCart',
            payload: product
        })
    }

    const removeFromCart = ()=>{
        dispatch({
            type: 'removeFromCart',
            payload: product
        })
    }


    

  return (
    <div className="products">
        <Card>
            <Card.Img variant="top" src={product.image} alt={product.name}/>
            <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Subtitle style={{ paddingBottom: 10 }}>
                <span>₹ {product.price.split(".")[0]}</span>
                {product.fastDelivery? 
                ( <div>Fast Delivery</div>) : ( <div>4 days delivery</div>)
                }
                  <Rating rating={product.ratings} />
                </Card.Subtitle>
                {
                    cart.some((p: any)=> p.id === product.id)?
                    (
                        <Button 
                        variant="danger"
                        onClick={removeFromCart}
                        >
                        Remove from cart
                        </Button>
                    )
                    :
                    (
                        <Button 
                        disabled={!product.inStock}
                        onClick={addToCart}
                        >
                        {!product.inStock ? "Out of Stock" : "Add to Cart"}
                        </Button>
                    )
                }
               
                

            </Card.Body>

        </Card>
    </div>
  )
}
