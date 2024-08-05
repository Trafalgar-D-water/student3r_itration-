const Joi = require('joi')

const studentSchema  =Joi.object( {
    name : Joi.string().min(1).max(100).required()
})

module.exports = {studentSchema}