import React from 'react'
import './testimonial.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'

import {  Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';




const data =[
  {
    avatar : AVTR1,
    name : 'Harting Degu',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi aut consequatur nam, sed '
  },

    {
    avatar : AVTR2,
    name : 'Harting Degu',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi aut consequatur nam, sed '
  },


    {
    avatar : AVTR3,
    Name : 'Harting Degu',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi aut consequatur nam, sed '
  },
]

const Testimonial = () => {
  return (
    <section id='testimonial'>
      <h5>Review From Client</h5>
      <h2>Testimonials</h2>

      <Swiper className='container testimonials_container'
      modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
       
        {
          data.map(({avatar, name, review} , index) => {
            return(
              <SwiperSlide key={index} className='testimonial'>
          <div className='client_avatar'>
            <img src={avatar}/>
           </div>
           <h5 className='client_name'>{name}</h5>
            <small className='client_review'>{review}</small>
        </SwiperSlide>
            )
          })
        }

      </Swiper>
    </section>
  )
}

export default Testimonial