require('dotenv').config()

const connectDB = require('./db/connect')
const Project = require('./models/project')

const jsonProjects = require('./populate-data.json')

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URI)
    await Project.deleteMany()
    await Project.create(jsonProjects)
    console.log('Success!!!!')
    process.exit(0)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

start()
