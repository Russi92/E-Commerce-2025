import React from 'react'
import { Offcanvas, Stack } from 'react-bootstrap'
import { useShoppingCart } from '../context/ShoppingCartContext'
import CartItem from './CartItem'
import formatCurrency from './formatCurrency';
import StoreItem from '../data/storeItems.json';
import { Link } from 'react-router-dom';


const ShowShoppingCart = ({isOpen}) => {
    const { cartItems , closeCart} = useShoppingCart();

    return (
        <Offcanvas show={isOpen} onHide={closeCart} placement='end'>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Cart</Offcanvas.Title>
            </Offcanvas.Header>

            <Offcanvas.Body>
                <Stack gap={3}>
                {cartItems.map((item) => (
                    <CartItem key={item.id} {...item} />
                ))}
                
                <div className='ms-auto fw-bold fs-5'>
                    Total {" "}  {formatCurrency(
                    cartItems.reduce((total , cartItem) => {
                        const item = StoreItem.find((i) => i.id === cartItem.id);
                        return total + (item?.price || 0) * cartItem.quantity
                    },0)
                )}
                </div>
            <Link to='/ShowProductsPage' style={{textDecoration : "none" , color : "gray"}}>See All Products</Link>

                </Stack>
                
            </Offcanvas.Body>

        </Offcanvas>
    );
};

export default ShowShoppingCart;
