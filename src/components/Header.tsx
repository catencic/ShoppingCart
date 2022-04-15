import { useContext } from "react";
import { Badge, Container, Dropdown, FormControl, Nav, Navbar } from "react-bootstrap"
import { AiFillDelete } from "react-icons/ai";


import {FaShoppingCart} from 'react-icons/fa'
import { Link } from "react-router-dom"
import { CartContext } from "../context/cartContext";


export const Header = () => {

    const {cartState: { cart}, dispatch} = useContext(CartContext);

  return (
    <>
    <Navbar bg="dark" variant="dark" style={{height: 80}}>
        <Container>
            <Navbar.Brand>
                <Link to="/">Shopping Cart</Link>
            </Navbar.Brand>
            <Navbar.Text className="search">
                <FormControl style={{
                    width: 500
                }}
                placeholder="Search"
                className="m-auto"
                />
            </Navbar.Text>
            <Nav>
                <Dropdown>
                    <Dropdown.Toggle variant="success">
                    <FaShoppingCart color="white" fontSize="25px"/>
                        <Badge bg="none">{cart.length}</Badge>
                    </Dropdown.Toggle>

                    <Dropdown.Menu style={{minWidth: 370}}>
                        {
                           cart.length > 0 ?
                            (<>
                            {
                                cart.map((prod: any) => (
                                    <span className="cartitem" key={prod.id}>
                                    <img
                                      src={prod.image}
                                      className="cartItemImg"
                                      alt={prod.name}
                                    />
                                    <div className="cartItemDetail">
                                      <span>{prod.name}</span>
                                      <span>₹ {prod.price.split(".")[0]}</span>
                                    </div>
                                    <AiFillDelete
                                      fontSize="20px"
                                      style={{ cursor: "pointer" }}
                                      onClick={() =>
                                        dispatch({
                                          type: 'removeFromCart',
                                          payload: prod,
                                        })
                                      }
                                    />
                                  </span>
                                ))
                            }
                            </>):
                            (<span style={{ padding: 10}}>Cart is Empty!</span>)
                        }
                       

                    </Dropdown.Menu>

                </Dropdown>

            </Nav>


        </Container>


    </Navbar>



    </>
  )
}
