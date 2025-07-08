import React from 'react'
import './sectionLinear.css'
import { Link } from 'react-router-dom'

const SectionLinear = () => {
  return (
    <div className='sectionLinear mt-5'>

      <div className='d-flex justify-content-evenly align-items-center h-100 flex-column'>

        <div>
        <i className="fas fa-star" style={{ color: '#FFD43B' }}></i>
        <i className="fas fa-star" style={{ color: '#FFD43B' }}></i>
        <i className="fas fa-star" style={{ color: '#FFD43B' }}></i>
        <i className="fas fa-star" style={{ color: '#FFD43B' }}></i>
        <i className="fas fa-star" style={{ color: '#FFD43B' }}></i>
        </div>

        <h1 className='fw-bold text-white'>Ready to Shop the Best Deals</h1>

        <h3 className='fw-bold text-white'>Thousands saved big on their favorite products — you can too! Start shopping now.</h3>

        <div className='d-flex justify-content-evenly w-100 fw-bold'>

          <div className='text-center text-white'>
            <h2 className='fw-bold'>50K+</h2>
            <h4>Happy Customers</h4>
          </div>
          
          <div className='text-center text-white'>
            <h2 className='fw-bold'>99.9%</h2>
            <h4>Uptime Guarantee</h4>
          </div>

          <div className='text-center text-white'>
            <h2 className='fw-bold' >24/7</h2>
            <h4>Expert Support</h4>
          </div>

        </div>

        <Link to='/products' className="btn btn-light mt-4 fw-bold animated-btn">Shop Now</Link>

      </div>

    </div>
  )
}

export default SectionLinear;