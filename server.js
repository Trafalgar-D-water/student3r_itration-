const Hapi = require('@hapi/hapi');
const connectToDb = require('./db')
const StudentPlugin = require('./lib/plugins/student/index')
const TestPlugin = require('./lib/plugins/test/index')
const SubjectPlugin = require('./lib/plugins/subjects/index')
const MarkPlugin = require('./lib/plugins/marks/index')
const ClassPlugin = require('./lib/plugins/classs/index')

const init =  async () =>{
    const server = Hapi.server({
        port: 3000,
        host: 'localhost',
    })
    // connection to database 
    connectToDb();

    
    await server.register(StudentPlugin)
    await server.register(TestPlugin)
    await server.register(SubjectPlugin)
    await server.register(MarkPlugin)
    await server.register(ClassPlugin)
    await server.start();
    console.log(`server is listning on ${server.info.port}`);
}

init();