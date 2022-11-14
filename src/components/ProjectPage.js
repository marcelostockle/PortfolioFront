import React from 'react'
import ProjectBox from './ProjectBox'
import styled from 'styled-components'

const data = require('../projects.json')
const ProjectGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: slategray;
  margin-top: 3rem;
`
const ProjectPage = () => {
  return (
    <ProjectGrid>
      {
        data.map((project) => {
          return <ProjectBox {...project}/>
        })
      }
    </ProjectGrid>
  )
}

export default ProjectPage