import React from 'react'
import { useHistory } from 'react-router-dom'

import styled from 'styled-components'

const Navbar = () => {
  const history = useHistory()

  return (
    <StyledUl>
      <StyledLi>
        <StyledA onClick={() => history.push('/')}>Hem</StyledA>
      </StyledLi>
      <StyledLi>
        <StyledA onClick={() => history.push('about')}>About</StyledA>
      </StyledLi>
      <DropDownLi>
        <Dropbtn>Stad</Dropbtn>
        <DropDownContent>
          {' '}
          <SubA onClick={() => history.push('stockholm')}>Stockholm</SubA>
          <SubA onClick={() => history.push('uppsala')}>Uppsala</SubA>
        </DropDownContent>
      </DropDownLi>
      <DropDownLi>
        <Dropbtn>Our Services</Dropbtn>
        <DropDownContent>
          <SubA onClick={() => history.push('windows')}>Fönsterputs</SubA>
          <SubA onClick={() => history.push('balcon')}>Balkongstädning</SubA>
          <SubA onClick={() => history.push('trash')}>
            Bortforsling av skräp
          </SubA>
        </DropDownContent>
      </DropDownLi>
    </StyledUl>
  )
}

export default Navbar

const StyledUl = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #214530;
`

const StyledLi = styled.li`
  float: left;
`

const Dropbtn = styled.div`
  display: inline-block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  &:hover {
    background-color: Pink;
    color: #214530;
  }
`

const DropDownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`

const DropDownLi = styled(StyledLi)`
  display: inline-block;
  &:hover {
    background-color: pink;
  }
  &:hover ${DropDownContent} {
    display: block;
  }
`

const StyledA = styled.a`
  display: inline-block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  &:hover {
    background-color: Pink;
    color: #214530;
  }
`

const SubA = styled.a`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
  &:hover {
    background-color: #f1f1f1;
    color: #214530;
  }
`
