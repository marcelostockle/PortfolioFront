const mongoose = require('mongoose')

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    }, description: {
        type: String
    }, disclaimer: {
        type: String
    }, thumbnail: {
        type: String
    }, link: {
        type: String
    }, repository: {
        type: String
    }, tags: {
        type: [String]
    }
})

module.exports = mongoose.model('Project', projectSchema)