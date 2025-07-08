
import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import SectionLinear from '../sectionLinear/SectionLinear';

const AboutPage = () => {
  return (
    <div style={{ backgroundColor: '#f8f9fa', minHeight: '100vh',padding : "40px 15px" , borderRadius : "20px" }} className='shadow-lg mt-4'>
      <Container>
        <Row className='align-items-center mb-5'>
          <Col md={6}>
            <Image
              src="https://img.freepik.com/free-photo/shopping-concept-close-up-portrait-young-beautiful-attractive-redhair-girl-smiling-looking-camera-holding-colorful-shopping-bags-isolated-pink-background_1258-119162.jpg"
              alt="About Us"
              fluid
              rounded
            />
          </Col>
          <Col md={6}>
            <h1 className="fw-bold">Welcome to Lion Store 🛍️</h1>
            <p className='lead text-muted'>
              At Lion Store, we’re passionate about bringing you the best products at unbeatable prices.
              From the latest tech to everyday essentials, we’re here to make shopping easier, smarter, and more rewarding.
            </p>
            <p>
              Our mission is to deliver a seamless and enjoyable online shopping experience.
              Trusted by thousands of customers, we pride ourselves on premium quality, fast delivery, and top-tier customer service.
            </p>
          </Col>
        </Row>

        <Row className='text-center'>
          <SectionLinear />
          {/* <Col md={4}>
            <h2 className='fw-bold text-primary'>50K+</h2>
            <p>Happy Customers</p>
          </Col>
          <Col md={4}>
            <h2 className='fw-bold text-primary'>99.9%</h2>
            <p>Uptime & Fast Delivery</p>
          </Col>
          <Col md={4}>
            <h2 className='fw-bold text-primary'>24/7</h2>
            <p>Support & Assistance</p>
          </Col> */}
        </Row>
      </Container>
    </div>
  );
};

export default AboutPage;
