const students = require("../data/mock_data.json");

const getAllStudents = (term, valueTerm) =>
  new Promise((resolve) => {
    let data = students;

    if(term) {

        switch(term) {
            case "first_name":
                data = data.filter((student) => student.first_name.toLowerCase().includes(valueTerm));
                break;
            case "last_name":
                data = data.filter((student) => student.last_name.toLowerCase().includes(valueTerm));
                break;
            case "gender":
                data = data.filter((student) => student.gender.toLowerCase() === valueTerm.toLowerCase());
                break;
            case "email":
                data = data.filter((student) => student.email.toLowerCase().includes(valueTerm));
                break;
            case "birth_date":
                data = data.filter((student) => student.birth_date.toLowerCase().includes(valueTerm));
                break;
            case "language":
                data = data.filter((student) => student.language.toLowerCase().includes(valueTerm));
                break;   
            default:
                //Pass it empty
                break;
        }
    }
    
    resolve({ code: 200, data: data });
  });

const getStudentById = (id) =>
  new Promise((resolve) => {
    const student = students.find((student) => student.id === Number(id.trim()));

    if (student) {
        resolve({ code: 200, data: Array(student) });
    } else {
        resolve({
            code: 404,
            data: { message: `No car found for id ${id}` },
        });
    }
  });

module.exports = {
  getAllStudents,
  getStudentById,
};