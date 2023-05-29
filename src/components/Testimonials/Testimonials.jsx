import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/gfg.png'
import AVTR2 from '../../assets/leetcode.png'
import AVTR3 from '../../assets/codechef.png'
import AVTR4 from '../../assets/python.png'
import a1 from '../../assets/1.png'
import a2 from '../../assets/2.png'
import a3 from '../../assets/3.png'
import a4 from '../../assets/4.png'



// import Swiper core and required modules
import {Pagination} from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data=[
  {
    avatar: AVTR1,
    name: 'GFG | 250+ Scrore | 50+ Day Streak',
    review: a1

  },
  {
    avatar: AVTR2,
    name: 'LeetCode | 200+ Questions | 50+ Day Streak ',
    review: a2

  },
  {
    avatar: AVTR3,
    name: '2 Star at CodeChef',
    review: a3

  },
  {
    avatar: AVTR4,
    name: 'Python Programming Certification',
    review: a4

  }
  
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>My Procurement</h5>
      <h2>Achievements</h2>
      <Swiper className='container testimonials_container'
            // install Swiper modules
            modules={[Pagination]}
            spaceBetween={40}
            slidesPerView={1}
          
            pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}>
          {
            data.map(({avatar,name,review},index)=>{
              return (
                <SwiperSlide key={index} className='testimonial'>
              <div className="client_avatar">
                <img src={avatar} />
              </div>
                <h5 className='client_name'>{name}</h5> <br/>
              <div className="achievement-img">
                <img src={review} />
              </div>

                  </SwiperSlide>
                )
          })
          }
          </Swiper>
    </section>
  )
}

export default Testimonials