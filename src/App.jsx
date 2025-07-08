
import { useState } from 'react'
import './App.css'
import { Container } from 'react-bootstrap'
import { Routes , Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Products from './components/Products'
import About from './components/about/About.jsx'
import ShoppingCartProvider from './context/ShoppingCartContext.jsx'
import ContactUs from './components/ContactUs'
import Footer from './components/footer/Footer.jsx'
import ShowProductsPage from './components/ShowProductsPage.jsx'

const App = () => {
  return(
    <ShoppingCartProvider>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />

        <main className="flex-grow-1">
          <Container className='mb-4'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/Products' element={<Products />} />
              <Route path='/about' element={<About />} />
              <Route path='/ShowProductsPage' element={<ShowProductsPage />} />
              <Route path='/ContactUs' element={<ContactUs />} />
            </Routes>
          </Container>
        </main>

        <Footer />
      </div>
    </ShoppingCartProvider>
  )
}

export default App;

