import React from 'react'
import { Link } from 'react-router-dom'

import Hero from '../layout/Hero'
import Banner from '../layout/Banner'
import Title from '../layout/Title'

import imgStocholm from '../../images/imgStocholm.jpg'
import Services from '../service/Services'
//imgStocholm.jpg
const Stockholm = () => {
  return (
    <>
      <Hero img={imgStocholm}>
        <Banner title='Our Services In Stockolm'>
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

export default Stockholm
