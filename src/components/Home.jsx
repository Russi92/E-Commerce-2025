import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Card from './card/Card'
import { Link } from 'react-router-dom';
import SectionLinear from './sectionLinear/SectionLinear';
import { Container, Row, Col } from 'react-bootstrap';

const Home = () => {
  return (
    <div className='mt-3'>

<section className="text-white py-5 text-center mb-3 shadow-lg" style={{ borderRadius: "20px", background: "linear-gradient(90deg, #111 0%, #222 100%)" }}>

<Container>
  <Row className="align-items-center text-center text-md-start mb-4">

    <Col xs={12} md={4} className="mb-3 mb-md-0">
      <h1 className="fw-bold">Welcome to</h1>
    </Col>

    <Col xs={12} md={4} className="d-flex justify-content-center">
      <img
        src="https://t4.ftcdn.net/jpg/07/07/66/55/360_F_707665525_3PUcntaSU9U3XxwXZ47unl2coRtK8HsE.jpg"
        alt="Logo"
        style={{ width: "150px", height: "150px", borderRadius: "50%", objectFit: "cover" }}
      />
    </Col>

    <Col xs={12} md={4}>
      <h1 className="fw-bold">Lions Store</h1>
    </Col>

  </Row>

  <Row>
    <Col>
      <h1 className="display-5 fw-bold">🔥 Discover Top Deals This Month! 🔥</h1>
      <p className="lead">
        Shop the latest in electronics, accessories, and more — all in one place.
      </p>
      <Link to="/products" className="btn btn-primary btn-lg mt-3">Shop Now</Link>
    </Col>
  </Row>
</Container>

</section>
      
      


    {/* <h1>Home</h1> */}
    <Carousel data-bs-theme="white">
      <Carousel.Item>
        <img
          className="d-block w-100" style={{height : "500px" , borderRadius : "20px"}}
          src="https://external-preview.redd.it/gurman-airpods-4-still-coming-this-fall-in-two-new-variants-v0-oJJyX9-k-9zhbZsV9pgmKRrTnbYJPt6bulzW8BK9d08.jpg?width=1080&crop=smart&auto=webp&s=8f52b1f2fc6f9675d3f2aabead5f98826a25a56f"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100" style={{height : "500px" , borderRadius : "20px"}}
          src="https://tech-offer.com/media/2025/05/Website-msi-v15.jpg"
          alt="Second slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100" style={{height : "500px" , borderRadius : "20px"}}
          src="https://cdn.shopify.com/s/files/1/2227/7667/files/MSI_Month_Offers.jpg?v=1740561887&width=1400"
          alt="Third slide"
        />

      </Carousel.Item>
    </Carousel>

    <Card />

    <SectionLinear />

    </div>
  )
}

export default Home;