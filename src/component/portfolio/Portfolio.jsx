import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.jpg'

const data = [

  {
    id:1,
    image:IMG1,
    title: 'Crypto Payment portal React project',
    demo:'#'
  },

   {
    id:2,
    image:IMG2,
    title: 'B2B Ecommerce admin Portal Next Js',
    demo:'#'
  },
   {
    id:3,
    image:IMG3,
    title: 'Android App for City',
    demo:'http:/#/'
  },
   {
    id:4,
    image:IMG4,
    title: 'Wordpress site NGO',
    demo:'https://allianceforchildrens.org/'
  },
   {
    id:5,
    image:IMG5,
    title: 'Wordpress site Local NGO',
    demo:'http://dawapharmatrade.com/'
  },
]




const Portfolio = () => {
  return (
    <section id='portfolio'>
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>

        <div className='container portfolio_container'>
          
         {
           data.map(({id, image, title, demo}) => {
             return(
                <article className='portfolio_item'>
            <div className='portfolio_item-image'>
              <img src={image} alt={image}/>
              </div>
              <h3>{title}</h3>
              <div className="portfolio_item-cta">
              <a href={demo} className='btn btn-primary' target='_blank'>live Demo</a>
              </div>
          </article>
             )
           })
         }

          </div>
    </section>
  )
}

export default Portfolio