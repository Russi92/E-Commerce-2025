import React from 'react'
import './footer.css'
import Badge from 'react-bootstrap/Badge';

const Footer = () => {
  return (
    <div className='footer pt-5'>

      <div className='container'>
        <div className='d-flex flex-column flex-lg-row justify-content-between align-items-start text-center text-lg-start gap-4'>

          {/* Logo and Description */}
          <div className='flex-grow-1'>
            <h1 className='text-white'>Lion Store</h1>
            <h6 className='text-white'>
              Trusted by thousands to deliver value, variety, and a seamless shopping experience every time. <br />
              Discover the latest trends, hottest deals, and premium products — all at your fingertips.
            </h6>

            <div className='d-flex justify-content-center justify-content-lg-start gap-3 mt-3'>
              <Badge className='rounded-circle bg-white'>
                <a href='https://www.facebook.com/mohamed.nedved.52/' target='_blank' rel='noopener noreferrer'>
                  <i className="fab fa-facebook-f fs-5"></i>
                </a>
              </Badge>
              <Badge className='rounded-circle bg-white'>
                <a href='https://github.com/Russi92' target='_blank' rel='noopener noreferrer'>
                  <i className="fab fa-github fs-5"></i>
                </a>
              </Badge>
              <Badge className='rounded-circle bg-white'>
                <a href='https://www.linkedin.com/in/mohamed-hassan-a83b2a155/' target='_blank' rel='noopener noreferrer'>
                  <i className="fab fa-linkedin-in fs-5"></i>
                </a>
              </Badge>
            </div>
          </div>

          {/* Links */}
          <div className='d-flex flex-sm-row gap-5 justify-content-center justify-content-lg-start mt-3 mt-lg-0'>

            <div>
              <h5 className='text-white'>Product</h5>
              <div>
                <div><a href='#' className="text-decoration-none text-primary">Features</a></div>
                <div><a href='#' className="text-decoration-none text-primary">Pricing</a></div>
                <div><a href='#' className="text-decoration-none text-primary">Documentation</a></div>
                <div><a href='#' className="text-decoration-none text-primary">API Reference</a></div>
              </div>
            </div>

            <div>
              <h5 className='text-white'>Company</h5>
              <div>
                <div><a href='#' className="text-decoration-none text-primary">About Us</a></div>
                <div><a href='#' className="text-decoration-none text-primary">Careers</a></div>
                <div><a href='#' className="text-decoration-none text-primary">Contact</a></div>
                <div><a href='#' className="text-decoration-none text-primary">Blog</a></div>
              </div>
            </div>

          </div>

        </div>

        <hr className='text-white mt-4' />

        <div className='text-white text-center pb-3'>
          Mohamed Hassan. © 2025 All rights reserved. <br />
          Designed & developed by Mohamed Hassan, React.js Developer
        </div>
      </div>

    </div>
  )
}

export default Footer;
