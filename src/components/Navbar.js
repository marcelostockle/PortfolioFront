import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const Nav = styled.nav`
background: aliceblue;
height: 45px;
display: flex;
justify-content: flex-start;
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

const Navbar = () => {

  return (<Nav>
    <StyledLink to="/">Home</StyledLink>
    <StyledLink to="/projects">Projects</StyledLink>
    <StyledLink to="/about">About</StyledLink>
  </Nav>)
}

export default Navbar