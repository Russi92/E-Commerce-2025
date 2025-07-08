// import React from 'react'
// import { Row, Col } from 'react-bootstrap'
// import { useShoppingCart } from '../context/ShoppingCartContext'
// import storeItems from '../data/storeItems.json'
// import StoreItem from '../components/StoreItem'
// import EmptyCartMessage from './EmptyCartMessage'

// const ShowProductsPage = () => {
//   const { cartItems } = useShoppingCart()

//   // نجيب المنتجات اللي موجودة في الكارت فقط
//   const cartProducts = cartItems.map(cartItem => {
//     const product = storeItems.find(item => item.id === cartItem.id)
//     return product ? { ...product, quantity: cartItem.quantity } : null
//   }).filter(Boolean) // نشيل أي null لو منتج مش موجود في storeItems

//   return (
//     <div className="container mt-5">
//       {cartProducts.length > 0 ? (
//         <>
//           <h2 className="mb-4">Products in Your Cart 🛒</h2>
//           <Row xs={1} md={2} lg={3} className="g-4">
//             {cartProducts.map(item => (
//               <Col key={item.id}>
//                 <StoreItem {...item} quantity={item.quantity} />
//               </Col>
//             ))}
//           </Row>
//         </>
//       ) : (
//        <EmptyCartMessage/>
//       )}
//     </div>
//   )
// }

// export default ShowProductsPage;

import React, { useState } from 'react'
import { Row, Col, Button, Modal, Form } from 'react-bootstrap'
import { useShoppingCart } from '../context/ShoppingCartContext'
import storeItems from '../data/storeItems.json'
import StoreItem from '../components/StoreItem'
import EmptyCartMessage from './EmptyCartMessage'

const ShowProductsPage = () => {
  const { cartItems } = useShoppingCart()
  const [showModal, setShowModal] = useState(false)
  const [confirmed, setConfirmed] = useState(false)

  const cartProducts = cartItems.map(cartItem => {
    const product = storeItems.find(item => item.id === cartItem.id)
    return product ? { ...product, quantity: cartItem.quantity } : null
  }).filter(Boolean)

  const handleConfirmOrder = (e) => {
    e.preventDefault()
    setConfirmed(true)

    setTimeout(() => {
      setShowModal(false)
      setConfirmed(false)
    }, 2000)
  }

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

          {/* زر تأكيد الطلب */}
          <div className="text-center mt-4">
            <Button variant="primary" onClick={() => setShowModal(true)}>
              Confirm Order
            </Button>
          </div>

          {/* Modal */}
          <Modal show={showModal} onHide={() => setShowModal(false)} centered>
            <Modal.Header closeButton>
              <Modal.Title>Complete Payment</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {!confirmed ? (
                <Form onSubmit={handleConfirmOrder}>
                  <Form.Group className="mb-3">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" required placeholder="Enter your name" />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" required placeholder="Enter your address" />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="tel" required placeholder="Enter your phone" />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Payment Method</Form.Label>
                    <Form.Select required>
                      <option value="">Select a method</option>
                      <option>Fawry</option>
                      <option>Vodafone Cash</option>
                      <option>InstaPay</option>
                    </Form.Select>
                  </Form.Group>

                  <Button type="submit" variant="primary" className="w-100">
                    Pay Now
                  </Button>
                </Form>
              ) : (
                <div className="text-center text-success fw-bold">
                  Your order has been successfully confirmed! ✅
                </div>
              )}
            </Modal.Body>
          </Modal>
        </>
      ) : (
        <EmptyCartMessage />
      )}
    </div>
  )
}

export default ShowProductsPage;

