import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import { AiOutlineLinkedin, AiFillGithub } from 'react-icons/ai'

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
const RoundedIcon = styled.a`
  width: fit-content;
  height: fit-content;
  border-style: solid;
  border-width: thin;
  border-radius: 10px;
  color: #808080;
  padding: 0.3rem 0.3rem;
  margin-left: 0.3rem;
`

const Navbar = () => {

  return (<Nav>
    <StyledLink to="/">Home</StyledLink>
    <StyledLink to="/projects">Projects</StyledLink>
    <StyledLink to="/about">About</StyledLink>
    <RoundedIcon href="https://www.linkedin.com/in/marcelo-st%C3%B6ckle-113479237/"><AiOutlineLinkedin size={30}/></RoundedIcon>
    <RoundedIcon href="https://github.com/marcelostockle"><AiFillGithub size={30}/></RoundedIcon>
  </Nav>)
}

export default Navbar