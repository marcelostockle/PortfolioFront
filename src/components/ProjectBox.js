import React from 'react'

const ProjectBox = (project) => {
    return (
        <div>
            <img src={project.thumbnail} alt={project.title}/>
            <a href={project.link}><h3>{project.title}</h3></a>
            <p>{project.description}</p>
            <a href={project.repository}>Repository</a>
        </div>
    )
}

export default ProjectBox