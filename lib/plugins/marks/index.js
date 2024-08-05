const addMarksRoute = require('./routes/addmarks')
const updateMarkRoute = require('./routes/updateMarks')
const getMarksByTest = require('./routes/getMarkforTest')
const getMarkBySubject = require('./routes/getMarkforSubject')
const getAvgOfStudnet = require('./routes/getAvgOfStudent');
const getAvgOfStudentforTest = require('./routes/getStudentTestavg')
const getAllAvg = require('./routes/getAllAvg')

const getArraysOfStduent = require('./routes/getAvgOfNStduent')
const MarksPlugin = {
    name:'Mark',
    version :'1.0.0',
    register :(server , options)=>{
        server.route(addMarksRoute)
        server.route(updateMarkRoute)
        server.route(getMarksByTest)
        server.route(getMarkBySubject)
        server.route(getAvgOfStudnet)
        server.route(getAvgOfStudentforTest)
        server.route(getArraysOfStduent)
        server.route(getAllAvg)
    }
}
module.exports = MarksPlugin