import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.png'

const data=[
  {
    id:1,
    image:IMG1,
    title:'StudyNotion App (Login - Sign-Up Page)',
    github:'https://github.com/sumandas0404/Study_Notion_App',
    demo:'https://study-notion-eight.vercel.app/'
  },
  {
    id:2,
    image:IMG2,
    title:'RazorPay UI Clone- Frontend',
    github:'https://github.com/sumandas0404/RazorPay_Clone',
    demo:'https://razor-pay-iota.vercel.app/'
  },
  {
    id:3,
    image:IMG3,
    title:'Discord UI Clone- Frontend',
    github:'https://github.com/sumandas0404/Discord_Clone',
    demo:'https://github.com/sumandas0404/Discord_Clone'
  },
  {
    id:4,
    image:IMG4,
    title:'Top Courses cards',
    github:'https://github.com/sumandas0404/Top_Courses',
    demo:'https://top-courses-cards.vercel.app/'
  },
  {
    id:5,
    image:IMG5,
    title:'Weather App_ using OpenWeather_api',
    github:'https://github.com/sumandas0404/Weather_App/tree/main/Weather_App',
    demo:'https://github.com/sumandas0404/Weather_App/tree/main/Weather_App'
  },
  {
    id:6,
    image:IMG6,
    title:'Plan with Love: Tour Destination cards seletion',
    github:'https://github.com/sumandas0404/Play_with_Love',
    demo:'https://plan-with-love-two.vercel.app/'
  }
]

const portfolio = () => {
  return (
    <section id='portfolio'>
        <h5>My Recent Work</h5>
        <h2>Projects</h2>
        <div className='container portfolio_container'>
          {
            data.map(({id,image,title,github,demo})=>{
              return(
                <article key={id} className='portfolio_item'>
            <div className="portfolio_item-image">
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className="portfolio_item-cta">
            <a href={github} className='btn' target='_blank'>GitHub</a>
            <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
           


          </article>
              )
            })
          }
        
        </div>


    </section>
  )
}

export default portfolio