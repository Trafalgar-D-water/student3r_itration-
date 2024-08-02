const addStudentRoute = require('./Routes/addStudent')
const updateStduentName = require('./Routes/updateStduentName')
const StudentPlugin  = {
    name:'student',
    version:'1.0.0',
    register :(server , options)=>{
        server.route(addStudentRoute)
        server.route(updateStduentName)
    }
}

module.exports = StudentPlugin;