const mongoose = require('mongoose')

const projectSchema = new mongoose.Schema({
    _id: {
        type: Number
    }, title: {
        type: String
    }, thumbnail: {
        type: String
    }, tags: {
        type: [String]
    }
})

module.exports = mongoose.model('Project', projectSchema)