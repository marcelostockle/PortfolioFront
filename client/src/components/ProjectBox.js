import React, {useEffect, useState, useRef} from 'react'
import axios from 'axios'

const ProjectBox = (props) => {
    const {pID} = props
    const [project, setProject] = useState({_id: pID})
    // const [expand, setExpand] = useState(false)
    
    async function fetchProject() {
        const api_prefix = "/api/project/project/"
        await axios.get(`${api_prefix.concat(pID)}`)
            .then(res => setProject(res.data))
            .catch(err => console.log(err))
    }
    useEffect(() => {
        fetchProject()
    }, [])

    const fetchedProject = project ? 
        project : {_id: pID, title: "Loading...", thumbnail: "./public/loading.png"}
    const link = useRef(fetchedProject.link)
    const repository = useRef(fetchedProject.repository)
    const thumbnail = useRef(fetchedProject.thumbnail)
    return (
        <div
            key={`p${pID}`}
            className="project-box"
        >
            <a href={link}>
                <img ref={thumbnail} alt={fetchedProject.title}/>
            </a>
            <a href={link}><h3>{fetchedProject.title}</h3></a>
            <p>{fetchedProject.description}</p>
            <a href={repository}><p>View source</p></a>
        </div>
    )
}

export default ProjectBox