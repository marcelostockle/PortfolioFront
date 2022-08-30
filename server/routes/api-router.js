const express = require('express')
const router = express.Router()

const { getProject } = require('../controllers/project')

router.route('/').get(getProject)
router.route('/:pid').get(getProject)

module.exports = router