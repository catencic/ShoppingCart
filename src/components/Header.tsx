import { Badge, Container, Dropdown, FormControl, Nav, Navbar, NavbarBrand } from "react-bootstrap"
import DropdownToggle from "react-bootstrap/esm/DropdownToggle"

import {FaShoppingCart} from 'react-icons/fa'


export const Header = () => {
  return (
    <>
    <Navbar bg="dark" variant="dark" style={{height: 80}}>
        <Container>
            <Navbar.Brand>
                <a href="/">Shopping Cart</a>
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
                        <Badge bg="success">10</Badge>
                    </Dropdown.Toggle>

                    <Dropdown.Menu style={{minWidth: 370}}>
                        <span style={{ padding: 10}}>Cart is Empty!</span>

                    </Dropdown.Menu>

                </Dropdown>

            </Nav>


        </Container>


    </Navbar>



    </>
  )
}
