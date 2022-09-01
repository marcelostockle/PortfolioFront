const express = require('express')
const router = express.Router()

const { getProject,
    getAllProjects,
    getProjectsPage,
    getCount
} = require('../controllers/project')

router.route('/').get(getAllProjects)
router.route('/:page').get(getAllProjects)
router.route('/project/:pid').get(getProject)
router.route('/category/:filter').get(getProjectsPage)
router.route('/category/:filter/:page').get(getProjectsPage)
router.route('/count/count').get(getCount)

module.exports = router