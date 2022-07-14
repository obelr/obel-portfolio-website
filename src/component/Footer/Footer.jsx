import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer_logo'>ROBEL DEBEBE</a>

      <ul className='permalinks'>
          <li><a href='#'>Home </a></li>  
           <li><a href='#about'>About </a></li>  
           <li><a href='#expeirience'>Expeirience</a></li>  
           <li><a href='#services'>Services</a></li>  
           <li><a href='#portfolio'>Portfolio</a></li>
           <li><a href='#testimonials'>Testimonials</a></li>
           <li><a href='#contact'>Contact</a></li>  
      </ul>


       <div className="footer_socials">
       <a href='https://linkedin.com'><BsLinkedin/></a>
       <a href='https://github.com'><FaGithub/></a>
       <a href='https://instagram.com'><BsInstagram/></a> 
       </div>
         
         <div className="footer_copyright">
           <small>&copy; Robel Debebe, All right Reserved</small>
         </div>
    </footer>
  )
}

export default Footer