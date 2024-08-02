const addTestRoute = require('./routes/addTest')

const TestPlugin= {
    name :'Test',
    version :'1.0.0',
    register : (server , options)=>{
        server.route(addTestRoute)
    }
}

module.exports = TestPlugin