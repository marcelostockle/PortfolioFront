import React from 'react'
import ProjectBox from './ProjectBox'

const data = require('../projects.json')
const ProjectPage = () => {
  return (
    <div className="App">
      {
        data.map((project) => {
          return <ProjectBox {...project}/>
        })
      }
    </div>
  )
}

export default ProjectPage