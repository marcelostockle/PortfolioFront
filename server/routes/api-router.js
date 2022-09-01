const express = require('express')
const router = express.Router()

const { getProject, getAllProjects, getProjectsPage } = require('../controllers/project')

router.route('/').get(getAllProjects)
router.route('/:page').get(getAllProjects)
router.route('/project/:pid').get(getProject)
router.route('/category/:filter').get(getProjectsPage)
router.route('/category/:filter/:page').get(getProjectsPage)

module.exports = router