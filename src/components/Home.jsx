import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

const Home = () => {
  return (
    <div className='mt-5'>

    {/* <h1>Home</h1> */}
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.shutterstock.com/image-vector/3d-shopping-sale-promotion-banner-600nw-2056851833.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://tech-offer.com/media/2025/05/Website-msi-v15.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.shopify.com/s/files/1/2227/7667/files/MSI_Month_Offers.jpg?v=1740561887&width=1400"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    </div>
  )
}

export default Home;