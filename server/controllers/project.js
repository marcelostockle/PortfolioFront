const Project = require('../models/project')

const limit = 12
const getProject = async (req, res) => {
    const query_result = await Project.findById(req.params.pid).exec()
    res.status(200).json(query_result)
}
const getAllProjects = async (req, res) => {
    const skip = req.params.page ? req.params.page * limit : 0
    const query_result = await Project.find({}, null, {limit, skip}).exec()
    res.status(200).json(query_result)
}
const getCount = async (req, res) => {
    const query_result = await Project.estimatedDocumentCount()
    res.status(200).json({count: query_result})
}
const getProjectsPage = async (req, res) => {
    const skip = req.params.page ? req.params.page * limit : 0
    const queryFilter = req.params.filter
    const query_result = await Project.find({tags: queryFilter}, null, {limit, skip}).exec()
    res.status(200).json(query_result)
}

module.exports = {
    getProject,
    getAllProjects,
    getProjectsPage,
    getCount
}