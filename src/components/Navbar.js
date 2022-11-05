import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const Navbar = () => {

  const Nav = styled.nav`
  background: #ffb3ff;
  height: 85px;
  display: flex;
  justify-content: space-between;
  padding: 0.2rem calc((100vw - 1000px) / 2);
  z-index: 12;
  `
  const StyledLink = styled(Link)`
  color: #808080;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 0.6rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #4d4dff;
  }`

  return (<Nav>
    <StyledLink to="/">Projects</StyledLink>
    <StyledLink to="/about">About</StyledLink>
  </Nav>)
}

export default Navbar