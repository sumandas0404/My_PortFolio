import React from 'react'
import './footer.css'
import {FaFacebook} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {SiGeeksforgeeks} from 'react-icons/si'

const footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'></a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Skills</a></li>
        <li><a href="#services">Extras</a></li>
        <li><a href="#portfolio">Projects</a></li>
        <li><a href="#testimonials">Achievements</a></li>
        <li><a href="#contact">Contact</a></li>
        
      </ul>
      <div className="footer_socials">
        <a href="https://www.facebook.com/profile.php?id=100075867442618&mibextid=ZbWKwL" target='_blank'>
            <FaFacebook></FaFacebook>
        </a>
        <a href="https://www.instagram.com/sumondas0404/" target='_blank'>
            <FiInstagram></FiInstagram>
        </a>
        <a href="https://auth.geeksforgeeks.org/user/sumondas0404/practice" target='_blank'>
            <SiGeeksforgeeks></SiGeeksforgeeks>
        </a>
      </div>
      <div className='footer_copyright'>
          <small>&copy; Suman Das. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default footer