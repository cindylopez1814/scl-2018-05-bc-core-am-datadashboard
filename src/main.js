const btnLima = document.getElementById('btnLima'); // boton que muestra  a las alumnas
const dataAlumnas = document.getElementById('studentsName'); // aqui se impirme la tabla
const contData = document.getElementById('contData');
let rankingNumber = 0;

let users = null;
let progress = null;
let courses = null;

// rutas para acceder a los json
const usersJson = '../data/cohorts/lim-2018-03-pre-core-pw/users.json';
const progressJson = '../data/cohorts/lim-2018-03-pre-core-pw/progress.json';
const cohortsJson = '../data/cohorts.json';

Promise.all([
  fetch(usersJson),
  fetch(progressJson),
  fetch(cohortsJson)
]).then(
  (responses) => { // engloba todas las promesas
    return Promise.all(responses.map((response) => {
      return response.json();
    }));
  }
).then((responseJSON)=>{
  users = responseJSON[0];
  progress = Object.entries(responseJSON[1]);
  courses = Object.entries(responseJSON[2]);
});

btnLima.addEventListener('click', () => {
  computeUsersStats(users, progress, courses);
  users.forEach((user) => {
    if (user.stats.exercises.length === 0 && user.stats.quizzes.length === 0 && user.stats.reads.length === 0 && user.stats.percentTotal.length === 0) {
      user.stats.percentTotal = 0;
      user.stats.reads = {};
      user.stats.exercises = {};
      user.stats.quizzes = {};
    } else {
      dataAlumnas.innerHTML += `<p>${user.name.toUpperCase()} ${user.stats.percentTotal}  ${JSON.stringify(user.stats.reads.total)}  ${JSON.stringify(user.stats.exercises.total)}  ${JSON.stringify(user.stats.quizzes.total)}</p>`;
    }
  });
});

function searchStudents() {
  const search = searchAlumnas.value;
  const filteredUsers = window.filterUsers(users, search);
  dataAlumnas.innerHTML = '';
  filteredUsers.forEach(user => {
    dataAlumnas.innerHTML += `<p>${user.name}</p>`;
  });
}
