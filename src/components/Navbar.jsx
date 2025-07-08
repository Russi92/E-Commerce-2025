// import React from 'react'
// import { Nav, Navbar as NavbarBs , Container, Button } from 'react-bootstrap';
// import { NavLink} from 'react-router-dom';
// import { useShoppingCart } from '../context/ShoppingCartContext'; 




// const Navbar = () => {

//     const {openCart , cartQuantity} = useShoppingCart();

//   return (
//     <NavbarBs sticky='top' className='shadow-sm' style={{background :" rgb(16 21 31)"}}>
//         <Container>
//             <Nav className='me-auto d-flex align-items-center'>
//                 <Nav.Link as={NavLink} to='/'>
//                     <img style={{width : "50px" , borderRadius : "50%" ,height : "50px"}} src="https://t4.ftcdn.net/jpg/07/07/66/55/360_F_707665525_3PUcntaSU9U3XxwXZ47unl2coRtK8HsE.jpg" alt="" />
//                 </Nav.Link>
//                 <Nav.Link as={NavLink} to='/' className='text-white'>Home</Nav.Link>
//                 <Nav.Link as={NavLink} to='/Products' className='text-white'>Products</Nav.Link>
//                 <Nav.Link as={NavLink} to ='/about' className='text-white'>About</Nav.Link>
//             </Nav>

//             <Button variant='outline-primary' className='rounded-circle' style={{position : "relative"}} onClick={openCart}>
//                 <i className="fa-solid fa-cart-plus text-white"></i>

//                 <div style={{position : "absolute" , bottom : -7 , right : 0 ,fontSize : "11px" , padding : "1px 6px"}}
//                 className='rounded-circle bg-danger text-white d-flex justify-content-center align-items-center'>
//                     {cartQuantity}
//                 </div>

//             </Button>

//         </Container>
//     </NavbarBs>
//   )
// }

// export default Navbar;

import React from 'react'
import { Nav, Navbar as NavbarBs, Container, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useShoppingCart } from '../context/ShoppingCartContext';

const Navbar = () => {
  const { openCart, cartItems } = useShoppingCart();

  return (
    <NavbarBs
      sticky='top'
      expand='lg'  // ✅ هنا المفتاح لجعل الـ Navbar responsive
      className='shadow-sm'
      style={{ background: "rgb(16 21 31)" }}
    >
      <Container>
        <NavbarBs.Brand as={NavLink} to='/'>
          <img
            style={{ width: "50px", borderRadius: "50%", height: "50px" }}
            src="https://t4.ftcdn.net/jpg/07/07/66/55/360_F_707665525_3PUcntaSU9U3XxwXZ47unl2coRtK8HsE.jpg"
            alt=""
          />
        </NavbarBs.Brand>

        {/* ✅ زرار الـ Toggle للموبايل */}
        <NavbarBs.Toggle aria-controls="responsive-navbar-nav" className='bg-light' />

        {/* ✅ العناصر اللي هتتفتح وتقفل في الموبايل */}
        <NavbarBs.Collapse id="responsive-navbar-nav">
          <Nav className='me-auto d-flex align-items-center'>
            <Nav.Link as={NavLink} to='/' className='text-white'>Home</Nav.Link>
            <Nav.Link as={NavLink} to='/Products' className='text-white'>Products</Nav.Link>
            <Nav.Link as={NavLink} to='/about' className='text-white'>About</Nav.Link>
            <Nav.Link as={NavLink} to='/ContactUs' className='text-white'>Contact Us</Nav.Link>
          </Nav>
        </NavbarBs.Collapse>

        {/* ✅ أي عناصر خارج القائمة زي زرار الكارت */}
        <Button variant='outline-primary' className='rounded-circle' style={{ position: "relative" }} onClick={openCart}>
          <i className="fa-solid fa-cart-plus text-white"></i>
          {cartItems.length > 0 && (
            <div
              style={{
                position: "absolute",
                bottom: -7,
                right: 0,
                fontSize: "11px",
                padding: "1px 6px"
              }}
              className='rounded-circle bg-danger text-white d-flex justify-content-center align-items-center'
            >
              {cartItems.length}
            </div>
          )}
        </Button>

      </Container>
    </NavbarBs>
  );
};

export default Navbar;

