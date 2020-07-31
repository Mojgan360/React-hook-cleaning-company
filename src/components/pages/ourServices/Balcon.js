import React from 'react'
import { Link } from 'react-router-dom'
import imgBalcone from '../../../images/imgBalcon.png'
import Title from '../../layout/Title'
import Hero from '../../layout/Hero'
import Banner from '../../layout/Banner'

const Balcon = () => {
  return (
    <>
      <Hero img={imgBalcone}>
        <Banner title='Balkongstädning'>
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

export default Balcon
