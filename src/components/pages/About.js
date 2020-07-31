import React from 'react'
import { Link } from 'react-router-dom'

import imgAbout from '../../images/imgAbout.jpg'
import Title from '../layout/Title'
import Hero from '../layout/Hero'
import Banner from '../layout/Banner'

const About = () => {
  return (
    <>
      <Hero img={imgAbout}>
        <Banner title='About Us'>
          <Link to='/' className='btn-primary'>
            return home
          </Link>
        </Banner>
      </Hero>
      <section className='py-5'>
        <Title title='about us' />
        <p className='item'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
          impedit ab deleniti doloremque quia quis libero deserunt repellendus
          sint earum?
        </p>
      </section>
    </>
  )
}

export default About
