import React from 'react'
import styled from 'styled-components'
import { AiFillGithub } from "react-icons/ai";

const TopBox = styled.div`
min-width: 300px;
width: 35vw;
background-color: navajowhite;
border-width: 3px;
border-style: outset;
display: grid;
justify-items: center;
padding: 0.5rem 0.2rem;
margin: 1.5rem 1.5rem;
`
const Title = styled.a`
width: fit-content;
background-color: aliceblue;
padding: 0.2rem 0.4rem;
margin-top: 0.5rem;
text-decoration: none;
font-weight: 300;
font-size: larger;
color: black;
`
const Thumbnail = styled.img`
width: 90%;
`
const GithubIcon = styled(AiFillGithub)`
background-color: white;
color: black;
border-style: solid;
border-width: thin;
border-radius: 10px;
padding: 0.3rem;
`
const CleanParagraph = styled.p`
text-align: justify;
padding: 0.5rem;
`

const ProjectBox = (project) => {
    return (
        <TopBox>
            <Thumbnail src={project.thumbnail} alt={project.title}/>
            <Title target="_blank" href={project.link}>{project.title}</Title>
            <CleanParagraph>{project.description}</CleanParagraph>
            <a target="_blank" href={project.repository}><GithubIcon size={36}/></a>
        </TopBox>
    )
}

export default ProjectBox