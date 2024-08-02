const Stduent = require("../schema/studentSchema");


exports.updateStduentName = async(request , h)=>{
    try{
        const studentId = request.params.id;
        console.log(studentId)
        const {name} = request.payload;
        const updateStduent = await Stduent.findByIdAndUpdate(studentId , {name: name});
        console.log(updateStduent)
        
        return h.response({message :'stduent name updated' , updateStduent}).code(200)
    }
    catch(error){
        console.log(error);
        return h.response({erorr :"somthing went wrong"}).code(500);
    }
}