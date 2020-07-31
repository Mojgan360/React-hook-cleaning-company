// import React from 'react'
// import { Link } from 'react-router-dom'

// import Hero from '../layout/Hero'
// import Banner from '../layout/Banner'

// const Home = () => {
//   return (
//     <>
//       <Hero className='dark-overlaydiv'>

//       </Hero>
//     </>
//   )
// }

// export default Home
import React from 'react'
import { Link } from 'react-router-dom'

import Hero from '../layout/Hero'
import Banner from '../layout/Banner'

const Home = () => {
  return (
    <div>
      <Hero title='awesome gadgets' max='true'>
        <Banner title='our services' subtitle='Please choice your city'>
          <Link to='/stockholm' className='btn-primary'>
            Stockholm
          </Link>
          <p> </p>
          <Link to='/uppsala' className='btn-primary'>
            uppsala
          </Link>
        </Banner>
      </Hero>
    </div>
  )
}

export default Home
