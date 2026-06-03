const students = [
    {
        name: "Naina",
        marks: "100",
        class: "12th",
        address: "Delhi"
    },
    {
        name: "Sonali",
        marks: "95",
        class: "11th",
        address: "Delhi"
    },
    {
        name: "Varsha",
        marks: "90",
        class: "10th",
        address: "Delhi"
    },
    {
        name: "Shanti",
        marks: "85",
        class: "9th",
        address: "Delhi"
    },
    {
        name: "Riya",
        marks: "80",
        class: "8th",
        address: "Delhi"
    },
    {
        name: "Lakshita",
        marks: "75",
        class: "7th",
        address: "Delhi"
    },
    {
        name: "Nikhil",
        marks: "70",
        class: "6th",
        address: "Delhi"
    },
    {
        name: "Vaishali",
        marks: "65",
        class: "5th",
        address: "Delhi"
    },
]

const studentContainer = document.getElementById("studentContainer");
const searchInput = document.getElementById("searchinput");

function renderStudents(studentArray) {
  studentContainer.innerHTML = studentArray.map((student) => {
    return `
      <div class="card">
        <h2>${student.name}</h2>
        <p><strong>Marks:</strong> ${student.marks}</p>
        <p><strong>Class:</strong> ${student.class}</p>
        <p><strong>Address:</strong> ${student.address}</p>
      </div>
    `;
  }).join("");
}

renderStudents(students);

searchInput.addEventListener("input", function () {
  const searchText = searchInput.value.toLowerCase();

  const filteredStudents = students.filter((student) => {
    return student.name.toLowerCase().includes(searchText);
  });

  renderStudents(filteredStudents);
});