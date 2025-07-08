import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { useShoppingCart } from '../context/ShoppingCartContext'
import storeItems from '../data/storeItems.json'
import StoreItem from '../components/StoreItem'
import EmptyCartMessage from './EmptyCartMessage'

const ShowProductsPage = () => {
  const { cartItems } = useShoppingCart()

  // نجيب المنتجات اللي موجودة في الكارت فقط
  const cartProducts = cartItems.map(cartItem => {
    const product = storeItems.find(item => item.id === cartItem.id)
    return product ? { ...product, quantity: cartItem.quantity } : null
  }).filter(Boolean) // نشيل أي null لو منتج مش موجود في storeItems

  return (
    <div className="container mt-5">
      {cartProducts.length > 0 ? (
        <>
          <h2 className="mb-4">Products in Your Cart 🛒</h2>
          <Row xs={1} md={2} lg={3} className="g-4">
            {cartProducts.map(item => (
              <Col key={item.id}>
                <StoreItem {...item} quantity={item.quantity} />
              </Col>
            ))}
          </Row>
        </>
      ) : (
       <EmptyCartMessage/>
      )}
    </div>
  )
}

export default ShowProductsPage;
