import React from 'react'
import styled from 'styled-components'

const TopContainer = styled.div`
  width: 500px;
  margin: 10rem 80px;
  display: grid;
  justify-content: flex-start;
`
const Tagline = styled.div`
  width: fit-content;
  padding: 0.2rem 0.5rem;
  border-color: beige;
  border-style: outset;
  border-width: thin;
  color: white;
`
const Title = styled.h1`
  color: white;
`
const HomePage = () => {
  return (
    <TopContainer>
      <Tagline>Freelance Web Developer</Tagline>
      <Title>Hi! I'm Marcelo Stöckle</Title>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </TopContainer>
  )
}

export default HomePage