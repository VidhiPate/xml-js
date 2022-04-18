const { getAllStudents, getStudentById } = require("./api/student");

const renderTable = (data) => {
  const tableBody = document.getElementById("table-body");

  if (!tableBody) {
    throw new Error("No table element found");
  }
  
  const rows = data.reduce(
    (acc, { id, first_name, last_name, email, gender, birth_date, language}) =>
      acc +
      `<tr>
        <td>${id}</td>
        <td>${first_name}</td>
        <td>${last_name}</td>
        <td>${email}</td>
        <td>${gender}</td>
        <td>${birth_date}</td>
        <td>${language}</td>
    </tr>`,
    ``
  );

  tableBody.innerHTML = rows;
};



getAllStudents().then(({ data }) => renderTable(data));  

const onSubmit = (event) => {
  event.preventDefault();
  const term = event.target.filters.value;
  const valueTerm = event.target.input.value;
  
  if(term === `id`) {
    getStudentById(valueTerm).then(({ data }) => renderTable(data));
  } else {
    getAllStudents(term, valueTerm.toLowerCase()).then(({ data }) => renderTable(data));
  }
};

const onReset = () => {
  window.location.replace(window.location.pathname);
  getAllStudents().then(({ data }) => renderTable(data));
};

const form = document.getElementById(`myForm`);

form.onSubmit = onSubmit;

document.getElementById("myForm").addEventListener("submit", onSubmit);
document.getElementById("myForm").addEventListener("reset", onReset);