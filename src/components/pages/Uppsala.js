import React from 'react'
import { Link } from 'react-router-dom'
import Services from '../service/Services'
import imgUppsala from '../../images/imgUppsala.jpg'
import Title from '../layout/Title'
import Hero from '../layout/Hero'
import Banner from '../layout/Banner'

const Uppsala = () => {
  return (
    <>
      <Hero img={imgUppsala}>
        <Banner title='Our Services In Uppsala'>
          <Link to='/' className='btn-primary'>
            return home
          </Link>
        </Banner>
      </Hero>
      <Title title='Price of Servives' center />
      <Services city={true} />
    </>
  )
}

export default Uppsala
