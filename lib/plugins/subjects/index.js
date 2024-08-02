const addSubjectRoute = require("./Routes/addsubject");
const SubjectPlugin = {
  name: "Subject",
  version: "1.0.0",
  register: (server, options) => {
    server.route(addSubjectRoute);
  },
};

module.exports = SubjectPlugin