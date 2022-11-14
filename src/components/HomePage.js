import React from 'react'
import styled from 'styled-components'
import { AiOutlineDownload } from 'react-icons/ai'

const TopContainer = styled.div`
  width: 500px;
  margin: 10rem 80px;
  display: grid;
  justify-content: flex-start;
  color: white;
`
const Tagline = styled.div`
  width: fit-content;
  padding: 0.2rem 0.5rem;
  border-color: beige;
  border-style: outset;
  border-width: thin;
`
const DownloadLink = styled.a`
  width: fit-content;
  margin: 1rem 3rem;
  padding: 0.2rem 0.5rem;
  border-color: beige;
  border-style: outset;
  border-width: thin;
  background-color: bisque;
  color: black;
  text-decoration: none;
  font-weight: 300;
  font-size: larger;
  display: flex;
  align-items: center;
`

const HomePage = () => {
  return (
    <TopContainer>
      <Tagline>Freelance Web Developer</Tagline>
      <h1>Hi! I'm Marcelo Stöckle</h1>
      <p>Informatics Engineer. Bachellor of Biochemistry. Job aspirations: full-stack web development (node, ExpressJS, ReactJS, Java Spring), QA-automation, DevOps. Experience in development of scientific applications with Java, Matlab and Python/Jupyter. Fluent English and Spanish, conversational Japanese, basic German, Dutch and French</p>
      <DownloadLink href="/Curriculum-MarceloStockle-eng.pdf" download>
        <AiOutlineDownload/> Download CV
      </DownloadLink>
    </TopContainer>
  )
}

export default HomePage