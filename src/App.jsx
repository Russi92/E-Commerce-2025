import { useState } from 'react'
import './App.css'
import { Container } from 'react-bootstrap'
import { Routes , Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Products from './components/Products'
import About from './components/About'
import ShoppingCartProvider from './context/ShoppingCartContext.jsx'


const App = () => {
  return(


  <ShoppingCartProvider>

      <Navbar />

      <Container className='mb-4'>

        <Routes>

          <Route path='/' element={<Home />} />

          <Route path='/Products' element={<Products />} />

          <Route path='/about' element={<About />} />

        </Routes>

      </Container>

      </ShoppingCartProvider>

   
  )
}

export default App
