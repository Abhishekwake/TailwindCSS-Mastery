import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Container from './components/Container.jsx'
import Navbar from './components/Navbar.jsx' 
import Hero from './components/Hero.jsx' 
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='layout'>
      <Container> 
      <div className='layout-lines-container'>      
      <div className='left-line'></div>
      <div className='right-line'></div>
      </div>
      <Navbar/>
      <Hero/>
      </Container>
      <div className='hero-image-container'>
         <img src="hero-ui-v6.webp" className='hero-image'/>
      </div>
    </div>

  </StrictMode>,
)
