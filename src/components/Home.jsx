import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Card from './card/Card'
import { Link } from 'react-router-dom';
import SectionLinear from './sectionLinear/SectionLinear';
import { Container, Row, Col } from 'react-bootstrap';

const Home = () => {
  return (
    <div className='mt-3'>

<section
  className="text-white py-5 text-center mb-3 shadow-lg"
  style={{
    borderRadius: "20px",
    background: "linear-gradient(90deg, #111 0%, #222 100%)",
  }}
>
  <Container>

    {/* Header Row */}
    <Row className="align-items-center justify-content-center mb-4 text-center">
      <Col xs={12} lg={3} className="mb-3 mb-lg-0">
        <h1 className="fw-bold m-0">Welcome to</h1>
      </Col>

      <Col xs={12} lg={3} className="d-flex justify-content-center mb-3 mb-lg-0">
        <img
          src="https://t4.ftcdn.net/jpg/07/07/66/55/360_F_707665525_3PUcntaSU9U3XxwXZ47unl2coRtK8HsE.jpg"
          alt="Logo"
          style={{
            width: "150px",
            height: "150px",
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
      </Col>

      <Col xs={12} lg={3}>
        <h1 className="fw-bold m-0">Lions Store</h1>
      </Col>
    </Row>

    {/* Tagline + CTA */}
    <Row className="justify-content-center text-center">
      <Col md={10} lg={8}>
        <h1 className="display-5 fw-bold">
          🔥 Discover Top Deals This Month! 🔥
        </h1>
        <p className="lead">
          Shop the latest in electronics, accessories, and more — all in one place.
        </p>
        <Link to="/products" className="btn btn-primary btn-lg mt-3">
          Shop Now
        </Link>
      </Col>
    </Row>

  </Container>
</section>
      
      


    {/* <h1>Home</h1> */}
    <Carousel data-bs-theme="white">
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src="https://external-preview.redd.it/gurman-airpods-4-still-coming-this-fall-in-two-new-variants-v0-oJJyX9-k-9zhbZsV9pgmKRrTnbYJPt6bulzW8BK9d08.jpg?width=1080&crop=smart&auto=webp&s=8f52b1f2fc6f9675d3f2aabead5f98826a25a56f"
          alt="First slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src="https://m.media-amazon.com/images/G/31/Pritam_cepc/boativypro/WhatsApp_Image_2025-07-01_at_12.07.57_PM._SX1242_QL85_.jpg"
          alt="Second slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
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