const { addSubject } = require("../handlers/addSubjectHandler");

module.exports = {
    method :'POST',
    path :'/api/subject',
    handler :addSubject
}