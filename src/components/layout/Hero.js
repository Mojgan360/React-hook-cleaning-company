import React from 'react'
import styled from 'styled-components'
import mainBcg from '../../images/imgHome.png'

const Hero = ({ img, max, children }) => {
  return (
    <div>
      <HeroWrapper img={img} max={max}>
        {children}
      </HeroWrapper>
    </div>
  )
}

export default Hero

const HeroWrapper = styled.div`
  text-align: center;
  min-height: ${(props) => (props.max ? '100vh' : '60vh')};
  background: linear-gradient(pink, #ccc) no-repeat center center/cover;
  background-image: url(${(props) => props.img});

  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--mainWhite);
  .title {
    font-size: 3.5rem;
    text-shadow: 4px 4px 2px rgba(0, 0, 0, 0.3);
    text-transform: uppercase;
    letter-spacing: var(--mainSpacing);
  }
`

Hero.defaultProps = {
  img: mainBcg,
}
