import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

const Home = () => {
  return (
    <div className='mt-5'>

    {/* <h1>Home</h1> */}
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100" style={{height : "400px" , borderRadius : "20px"}}
          src="https://external-preview.redd.it/gurman-airpods-4-still-coming-this-fall-in-two-new-variants-v0-oJJyX9-k-9zhbZsV9pgmKRrTnbYJPt6bulzW8BK9d08.jpg?width=1080&crop=smart&auto=webp&s=8f52b1f2fc6f9675d3f2aabead5f98826a25a56f"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100" style={{height : "400px" , borderRadius : "20px"}}
          src="https://tech-offer.com/media/2025/05/Website-msi-v15.jpg"
          alt="Second slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100" style={{height : "400px" , borderRadius : "20px"}}
          src="https://cdn.shopify.com/s/files/1/2227/7667/files/MSI_Month_Offers.jpg?v=1740561887&width=1400"
          alt="Third slide"
        />

      </Carousel.Item>
    </Carousel>

    </div>
  )
}

export default Home;