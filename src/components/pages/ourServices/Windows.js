import React from 'react'
import { Link } from 'react-router-dom'
import imgWindow from '../../../images/imgWindows.jpg'
import Title from '../../layout/Title'
import Hero from '../../layout/Hero'
import Banner from '../../layout/Banner'

const Windows = () => {
  return (
    <>
      <Hero img={imgWindow}>
        <Banner title='Fönsterputs'>
          <Link to='/' className='btn-primary'>
            return home
          </Link>
        </Banner>
      </Hero>
      <Title title='Mer Info Om Our Services' center />
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur
        dicta numquam accusantium delectus optio iusto fuga id! Eaque temporibus
        eligendi nam voluptate! Natus corrupti omnis distinctio libero
        temporibus nesciunt magni.
      </p>
    </>
  )
}

export default Windows
