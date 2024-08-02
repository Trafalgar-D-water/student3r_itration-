const Stduent = require('../schema/studentSchema')
exports.addStduent = async(request , h) =>{
    try{
        const data = request.payload;
        console.log(data)
        const newStduent = new Stduent(data);
        const savedStudent = await newStduent.save();
        return h.response(savedStudent).code(201);
    }
    catch(error){
        console.log(error);
        return h.response({error : 'somthing went wrong'}).code(500);
    }
}