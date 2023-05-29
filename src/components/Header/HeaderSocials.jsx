import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiLeetcode} from 'react-icons/si'
import {SiGeeksforgeeks} from 'react-icons/si'
const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/suman-das-82480a224/" target='_blank'> <BsLinkedin/> </a>
        <a href="https://github.com/sumandas0404" target='_blank'> <FaGithub></FaGithub></a>
        <a href="https://leetcode.com/Sumandas/" target='_blank'> <SiLeetcode></SiLeetcode></a>
        <a href="https://auth.geeksforgeeks.org/user/sumondas0404/practice" target='_blank'> <SiGeeksforgeeks></SiGeeksforgeeks></a>
        
    </div>
  )
}

export default HeaderSocials