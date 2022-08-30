const Project = require('../models/project')

const getProject = async (req, res) => {
    query_result = await Project.findById(req.params.pid)
    res.status(200).json(query_result)
}
const getAllProjects = async (req, res) => {
    query_result = await Project.find()
    res.status(200).json(query_result)
}

module.exports = {
    getProject,
    getAllProjects
}