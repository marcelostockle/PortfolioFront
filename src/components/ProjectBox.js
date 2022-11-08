import React from 'react'
import styled from 'styled-components'
import { AiFillGithub } from "react-icons/ai";

const TopBox = styled.a`
min-width: 300px;
width: 35vw;
height: fit-content;
background-color: navajowhite;
border-width: 2px;
border-style: outset;
border-color: beige;
display: grid;
justify-items: center;
padding: 0.5rem 0.2rem;
margin: 1.5rem 1.5rem;
text-decoration: none;
color: black;
`
const Title = styled.h2`
width: fit-content;
height: fit-content;
background-color: aliceblue;
padding: 0.2rem 0.4rem;
margin-top: 0.5rem;
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
    if (project.repository) {

    }
    return (
        <TopBox target="_blank" href={project.link}>
            <Thumbnail src={project.thumbnail} alt={project.title}/>
            <Title>{project.title}</Title>
            <CleanParagraph>{project.description}</CleanParagraph>
            { project.repository &&
                <a target="_blank" href={project.repository}><GithubIcon size={36}/></a>
            }
        </TopBox>
    )
}

export default ProjectBox