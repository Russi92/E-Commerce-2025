// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import HomeOffers from '../data/HomeOffers.json';

// function BasicExample() {
//   return (


//       <div className='mt-5'>

//           <h1 className='text-center'>Best Offers</h1>

//           <div className='d-flex gap-5 flex-wrap justify-content-center'>
//             {HomeOffers.map((items) => {
//                 return(
                         
//                     <Card style={{ width: '25rem', border : "none" }} className='shadow-lg'>

//                         <Card.Img variant="top" src={items.img} style={{ width: "100%",height: "260px",objectFit: "cover"}}/>

//                         <Card.Body className="d-flex flex-column justify-content-end align-items-start" style={{ height: '100%' }}>

//                             <Card.Title className="d-flex flex-column justify-content-center align-items-baseline h-100">{items.name}</Card.Title>

//                             <Card.Text className="d-flex flex-column justify-content-end align-items-baseline h-100">{items.description}</Card.Text>
//                             <div className="mt-auto">

//                             <Button variant="primary" className='w-100'>Buy Now</Button>
//                             </div>

//                         </Card.Body>
                        
//                     </Card>
                    
//                     )
//                 })}
//                 </div>
//             </div>
    
//   );
// }

// export default BasicExample;

import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import HomeOffers from '../../data/HomeOffers.json';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import formatCurrency from '../formatCurrency';
import './card.css'

function BasicExample() {
  const [show, setShow] = useState(false);
  const [success, setSuccess] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleClose = () => {
    setShow(false);
    setSuccess(false);
  };
  const handleShow = (item) => {
    setSelectedItem(item);
    setShow(true);
  };

  const handlePayment = (e) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => {
      setShow(false);
      setSuccess(false);
    }, 2000);
  };

  return (
    <div className='mt-5'>
      <h1 className='text-center'>Best Offers</h1>

      <div className='d-flex gap-5 flex-wrap justify-content-center'>
        {HomeOffers.map((items) => (
          <Card style={{ width: '25rem', border: "none" }} className='shadow-lg' key={items.id}>
           <div className="card-image-container">
            <Card.Img
              variant="top"
              src={items.img}
              className="card-image"
            />
          </div>
            <Card.Body className="d-flex flex-column justify-content-end align-items-start">
                <div className='d-flex justify-content-between w-100'>

                <Card.Title>{items.name}</Card.Title>
                <Card.Title style={{ textDecoration: "line-through" , fontSize : "15px"}}>{formatCurrency(items.OldPrice)}</Card.Title>
                </div>

            <div className='d-flex justify-content-between w-100'>
            Discounted Price
              <Card.Title className='fs-5 text-danger'>
                {Math.round(((items.OldPrice - items.NewPrice) / items.OldPrice) * 100)}% Offer
              </Card.Title>

                <Card.Text className='fw-bold text-primary'>
                {formatCurrency(items.NewPrice)}
                </Card.Text>
                </div>
              <Card.Text>{items.description}</Card.Text>
              <Button variant="primary" className='w-100 mt-auto' onClick={() => handleShow(items)}>Buy Now</Button>
            </Card.Body>
          </Card>
        ))}
      </div>

      {/* Payment Modal */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Complete Your Payment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {success && <Alert variant="success">Payment Successful ✅</Alert>}

          <Form onSubmit={handlePayment}>
            <h5 className='mb-3 text-primary'>{selectedItem?.name}</h5>

                  {/* Payment Method Dropdown inside a Card */}
                  <Card className='mb-3'>
              <Card.Body>
                <Form.Group controlId="paymentMethod">
                  <Form.Label className='fw-bold'>Select Payment Method</Form.Label>
                  <Form.Select required>
                    <option value="">Choose a method</option>
                    <option value="fawry">Fawry</option>
                    <option value="instapay">Instapay</option>
                    <option value="hgo">Vodafone Cash (HGO)</option>
                  </Form.Select>
                </Form.Group>
              </Card.Body>
            </Card>

            <Form.Group className="mb-3">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Card Number</Form.Label>
              <Form.Control type="text" placeholder="XXXX XXXX XXXX XXXX" required />
            </Form.Group>

            <Form.Group className="mb-3 d-flex gap-2">
              <Form.Control type="text" placeholder="MM/YY" required />
              <Form.Control type="text" placeholder="CVV" required />
            </Form.Group>

            <Button variant="success" type="submit" className='w-100'>
              Pay Now
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default BasicExample;

