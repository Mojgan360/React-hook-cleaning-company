import React from 'react'
import { Link } from 'react-router-dom'
import imgTrash from '../../../images/imgTrash.jpg'
import Title from '../../layout/Title'
import Hero from '../../layout/Hero'
import Banner from '../../layout/Banner'
const Trash = () => {
  return (
    <>
      <Hero img={imgTrash}>
        <Banner title='Bortforsling av skräp'>
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

export default Trash
