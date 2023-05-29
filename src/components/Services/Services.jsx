import React from 'react'
import './services.css'
import {BsCheck} from 'react-icons/bs'
const services = () => {
  return (
    <section id='services'>
      <h5>Something More:</h5>
      <h2>Extras</h2>

      <div className='container services_container'>
      <article className='service'>
          <div className="service_head">
            <h3>Extra-Curricular</h3>
          </div>
          <ul className='service_list'>
          <li>
              <BsCheck className='service_list-icon'>

              </BsCheck>
              <p>A passonate Photograper with indermediate level skills.</p>
              
            </li>
            <li>
              <BsCheck className='service_list-icon'>

              </BsCheck>
              <p>Knowledge of video editing and Graphic design.</p>
              
            </li>
            <li>
              <BsCheck className='service_list-icon'>

              </BsCheck>
              <p>Interested in Diplomatic case studies at National and International Levels.</p>
              
            </li>
            <li>
              <BsCheck className='service_list-icon'>

              </BsCheck>
              <p>An Intermediate level Public Speaker.</p>
              
            </li>
       
           
          </ul>
        </article>


        <article className='service'>
          <div className="service_head">
            <h3>Experience</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BsCheck className='service_list-icon'>

              </BsCheck>
              <p> Software Developer Intern at CDAC, Silchar. A Real life project developing an E-Waste Management Platform connecting stakeholders and sellers. </p>
              
            </li>
            <li>
              <BsCheck className='service_list-icon'>

              </BsCheck>
              <p>Participated in Solving for India Hackathon (GeeksForGeeks).</p>
              
            </li>
            <li>
              <BsCheck className='service_list-icon'>

              </BsCheck>
              <p>College-Level Finalist at GDSC Explore Hackathon</p>
              
            </li>
            <li>
              <BsCheck className='service_list-icon'>

              </BsCheck>
              <p>Finalist in CSS Hacks Hackthon conducted by CSS under Abacus.</p>
              
            </li>
      
          </ul>
        </article>

       



        <article className='service'>
          <div className="service_head">
            <h3>Academics</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BsCheck className='service_list-icon'>

              </BsCheck>
              <p>3rd Yr Undergrad at NIT- Silchar with 8.65 CGPA (till 3rd SEM)</p>
              
            </li>
            <li>
              <BsCheck className='service_list-icon'>

              </BsCheck>
              <p>Jee Mains and Advanced Qualifier(National Level Exams)</p>
              
            </li>
            <li>
              <BsCheck className='service_list-icon'>

              </BsCheck>
              <p>AISSCE class Topper with 91% in CBSE Boards.</p>
              
            </li>
            <li>
              <BsCheck className='service_list-icon'>

              </BsCheck>
              <p>AISSE class Topper with 94% in CBSE Board</p>
              
            </li>
        
          </ul>
        </article>

      </div>

    </section>
  )
}

export default services