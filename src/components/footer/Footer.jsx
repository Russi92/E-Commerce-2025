

import React from 'react'
import './footer.css'
import Badge from 'react-bootstrap/Badge';


const Footer = () => {
  return (
    <div className='footer'>

            <div className='d-flex justify-content-evenly align-items-center h-100'>

                <div className='d-flex flex-column justify-content-around h-100'>

                    <h1 className='text-white'>Lion Store</h1>

                    <h6 className='text-white'>Trusted by thousands to deliver value, variety, and a seamless shopping , experience every time <br />
                    Discover the latest trends, hottest deals, and premium products — all at your fingertips .
                    </h6>

                    <div className='d-flex gap-3'>

                        <Badge className='rounded-circle bg-white'>
                        <a href='https://www.facebook.com/mohamed.nedved.52/' target='_blank'><i className="fab fa-facebook-f fs-5"></i></a>
                        </Badge>

                        <Badge className='rounded-circle bg-white'>
                        <a href='https://github.com/Russi92' target='_blank'><i className="fab fa-github fs-5"></i></a>
                        </Badge>

                        <Badge className='rounded-circle bg-white'>
                        <a href='https://www.linkedin.com/in/mohamed-hassan-a83b2a155/' target='_blank'><i className="fab fa-linkedin-in fs-5"></i></a>
                        </Badge>

                    </div>
                    
                </div>

                <div className='d-flex'>

                    <div className='me-5'>

                        <h5 className='text-white'>Product</h5>
                        <div>
                            <div><a href='' className="text-decoration-none text-primary">Features</a></div>
                            <div><a href='' className="text-decoration-none text-primary">Pricing</a></div>
                            <div><a href='' className="text-decoration-none text-primary">Documentation</a></div>
                            <div><a href='' className="text-decoration-none text-primary">API Reference</a></div>
                        </div>

                    </div>

                    <div>

                        <h5 className='text-white'>Company</h5>
                        <div>
                        <div> <a href='' className="text-decoration-none text-primary">About Us</a></div>
                            <div><a href='' className="text-decoration-none text-primary">Careers</a></div>
                            <div><a href='' className="text-decoration-none text-primary">Contact</a></div>
                            <div><a href='' className="text-decoration-none text-primary">Blog</a></div>
                        </div>

                    </div>

                </div>

            </div>

    </div>
  )
}

export default Footer;