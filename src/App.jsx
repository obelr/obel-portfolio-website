import React from 'react'

import Header from './component/Header/Header'
import Nav from './component/Nav/Nav'
import About from './component/About/About'
import Contact from './component/Contact/Contact'
import Experience from './component/Experience/Experience'
import Services from './component/services/Services'
import Portfolio from './component/portfolio/Portfolio'
import Testimonial from './component/Testimonial/Testimonial'
import Footer from './component/Footer/Footer'


const App = () => {
  return (
      <>
      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <Services/>
      <Portfolio/>
      <Testimonial/>
      <Contact/>
      <Footer />
      </>

    
  )
}
export default App