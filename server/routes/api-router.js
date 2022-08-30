const express = require('express')
const router = express.Router()

const { getProject, getAllProjects } = require('../controllers/project')

router.route('/').get(getAllProjects)
router.route('/:pid').get(getProject)

module.exports = router