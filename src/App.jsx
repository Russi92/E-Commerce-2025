import { useState } from 'react'
import './App.css'
import { Container } from 'react-bootstrap'
import { Routes , Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Products from './components/Products'
import About from './components/about/About.jsx'
import ShoppingCartProvider from './context/ShoppingCartContext.jsx'
import Footer from './components/footer/Footer.jsx'
import ShowProductsPage from './components/ShowProductsPage.jsx'



const App = () => {
  return(


  <ShoppingCartProvider>

      <Navbar />

      <Container className='mb-4'>

        <Routes>

          <Route path='/' element={<Home />} />

          <Route path='/Products' element={<Products />} />

          <Route path='/about' element={<About />} />

          <Route path='/ShowProductsPage' element={<ShowProductsPage />} />

        </Routes>

      </Container>

      <Footer />

      </ShoppingCartProvider>

   
  )
}

export default App
