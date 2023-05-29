import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import{SiCodechef} from 'react-icons/si'
import{VscFolderLibrary} from 'react-icons/vsc'
import {AiTwotoneStar} from 'react-icons/ai'
import {MdSchool} from 'react-icons/md'
import {SiLeetcode} from 'react-icons/si'
import {BsCameraFill}from 'react-icons/bs'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About-Image" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <FaAward className='about_icon'></FaAward>
              <h5>Experience</h5>
              <small>Summer Intern </small>
              <small>at CDAC, Silchar</small>
            </article>
            <article className='about_card'>
              <SiCodechef className='about_icon'></SiCodechef>
              <h5>Competitive Programmer</h5>
             <small>2  <AiTwotoneStar></AiTwotoneStar> at CodeChef    
                  </small>
            </article>
            <article className='about_card'>
              <VscFolderLibrary className='about_icon'></VscFolderLibrary>
              <h5>Projects</h5>
              <small>10  </small> <br />
              <small>(MERN Stack)</small>
            </article>

            <article className='about_card'>
              <MdSchool className='about_icon'></MdSchool>
              <h5>Education</h5>
              <small>Undergrad at</small> <br />
              <small>NIT- SILCHAR  (ECE)</small>
            
            </article>
            <article className='about_card'>
              <SiLeetcode className='about_icon'></SiLeetcode>
              <h5>DSA Profile</h5>
              <small>200+ Questions</small> <br />
              <small>at Leetcode</small>
            </article>
            <article className='about_card'>
              <BsCameraFill className='about_icon'></BsCameraFill>
              <h5>P.O.R.</h5>
              <small>Senior-Executive Member </small> <br />
              <small>Photography club</small>
            </article>
          </div>
          <p>
            Hola Everyone! This is Suman, a 3 <sup>rd</sup>  year undergrad at NIT- Silchar in the department of Electronics & Communication Engineering. I'm a Fullstack Web developer
            and also a competitive programmer. Apart from coding I also persue Photography as my hobby
            and I'm also the Senior member of the Photography club, Obiettivo, NIT-S.
             
          </p>
          <p>Connect with me to know more :)</p>
          <div className="about-btn">

          <a href="https://www.linkedin.com/in/suman-das-82480a224/" target='_blank' className='btn'>Connect With Me</a>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About