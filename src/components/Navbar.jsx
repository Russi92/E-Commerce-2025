import React from 'react'
import { Nav, Navbar as NavbarBs , Container, Button } from 'react-bootstrap';
import { NavLink} from 'react-router-dom';


const Navbar = () => {
  return (
    <NavbarBs sticky='top' className='bg-white shadow-sm '>
        <Container>
            <Nav className='me-auto d-flex align-items-center'>
                <Nav.Link as={NavLink} to='/'>
                    <img style={{width : "50px" , borderRadius : "50%"}} src="https://i.etsystatic.com/44198296/r/il/f51e96/5382755183/il_340x270.5382755183_qbns.jpg" alt="" />
                </Nav.Link>
                <Nav.Link as={NavLink} to='/'>Home</Nav.Link>
                <Nav.Link as={NavLink} to='/store'>Store</Nav.Link>
                <Nav.Link as={NavLink} to ='/about'>About</Nav.Link>
            </Nav>

            <Button variant='outline-primary' className='rounded-circle' style={{position : "relative"}}>
                <i className="fa-solid fa-cart-plus"></i>

                <div style={{position : "absolute" , bottom : -7 , right : 0 ,fontSize : "11px" , padding : "1px 6px"}}
                className='rounded-circle bg-danger text-white d-flex justify-content-center align-items-center'>
                    3
                </div>

            </Button>

        </Container>
    </NavbarBs>
  )
}

export default Navbar;