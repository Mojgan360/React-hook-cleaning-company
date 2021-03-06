import React from 'react'
import Hero from '../layout/Hero'
import Banner from '../layout/Banner'
import { Link } from 'react-router-dom'
const Error = () => {
  return (
    <Hero max='true'>
      <Banner title='404' subtitle='page not found'>
        <Link to='/' className='btn-primary'>
          return home
        </Link>
      </Banner>
    </Hero>
  )
}

export default Error
