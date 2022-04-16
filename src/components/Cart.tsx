import { useContext, useEffect, useState } from "react";
import { Button, Col, Form, Image, ListGroup, Row } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import { CartContext } from "../context/cartContext";
import { Rating } from "./Rating";




export const Cart = () => {

  const {cartState: { cart}, dispatch} = useContext(CartContext);

  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(cart.reduce((acc : any , curr: any)=> acc + Number(curr.price) * curr.qty , 0));
  }, [cart]);
  

  return (
    <div className="home">
      <div className="productContainer">
        <ListGroup>
          {
            cart.map((cartItem: any)=>(
              <ListGroup.Item key={cartItem.id}>

              <Row>
                <Col md={2}>
                    <Image src={cartItem.image} alt={cartItem.name} fluid rounded />
                </Col>
                <Col md={2}>
                  <span>{cartItem.name}</span>
                </Col>
                <Col md={2}>
                  <span>₹ {cartItem.price}</span>
                </Col>
                <Col md={2}>
                   <Rating rating={cartItem.rating} />
                </Col>
                <Col md={2}>
                   <Form.Control 
                   as="select" 
                   value={cartItem.qty}
                   onChange={(e: any)=> dispatch({
                     type: 'changeCartQty',
                     payload: {
                       id: cartItem.id,
                       qty: e.target.value
                     }
                   })}
                   
                   >
                     {
                       [...Array(cartItem.inStock).keys()].map((x: number)=>(
                         <option key={x + 1}>{x + 1}</option>
                       ))
                     }

                   </Form.Control>
                </Col>
                <Col md={2}>
                  <Button
                    type="button"
                    variant="light"
                    onClick={() =>
                      dispatch({
                        type: 'removeFromCart',
                        payload: cartItem,
                      })
                    }
                  >
                    <AiFillDelete fontSize="20px" />
                  </Button>
                </Col>

              </Row>
              </ListGroup.Item>
            ))
          }
        </ListGroup>
      </div>
      <div className="filters summary">
        <span className="title">Subtotal ({cart.length}) items</span>
        <span style={{ fontWeight: 700, fontSize: 20 }}>Total: ₹ {total}</span>
        <Button type="button" disabled={cart.length === 0}>
          Proceed to Checkout
        </Button>
      </div>

    </div>
  )
}
