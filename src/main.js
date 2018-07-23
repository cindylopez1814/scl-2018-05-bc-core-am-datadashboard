const btn = document.getElementById('btnLima'); // boton que muestra  a las alumnas
const usuarios = document.getElementById('studentsName'); // aqui se impirme la tabla
const contData = document.getElementById('contData');
let rankingNumber = 0;

// rutas para acceder a los json
const usersJson = '../data/cohorts/lim-2018-03-pre-core-pw/users.json';
const progressJson = '../data/cohorts/lim-2018-03-pre-core-pw/progress.json';
const cohortsJson = '../data/cohorts/cohorts.json';

Promise.all([
  fetch(usersJson),
  fetch(progressJson),
  fetch(cohortsJson)
]).then(
  (responses) => { // engloba todas las promesas
    return Promise.all(responses.map((response) => {
      return response.json();
      console.log(response.json);
    }));
  }
).then((responseJSON)=>{
  users = responseJSON[0];
  progress = Object.entries(responseJSON[1]);
});

