const btn = document.getElementById('dropdownMenuEnlace');
const container = document.getElementById('menuCohort');
const usuarios = document.getElementById('studentsName');
const contData = document.getElementById('contData');
let cohort;
let rankingNumber = 0;

// Creando evento para vizualisar cohorts
const evento = cohorts => {
  btn.addEventListener('click', () => {
    for (let i = 0; i < cohorts.length; i++) {
      const contenedorCohorts = document.createElement('li');
      container.appendChild(contenedorCohorts);
      const lim = document.createElement('a');
      cohort = document.createTextNode(cohorts[i].id);
      lim.appendChild(cohort);
      contenedorCohorts.appendChild(lim);
    }
  });
  // Este evento no se esta ejecutando
    // Evento para tabla de datos
    container.addEventListener('click', () => { 
      updateUserStat(user, progresses)
      // contData.classList.remove('d-none');
        for (let i = 0; i < users.length; i++) {
          rankingNumber ++;
            usuarios.innerHTML += '<tr>' +
            '<td>' + rankingNumber + '</td>' + 
            '<td>' + users[i].name.toUpperCase() + '</td>' + // nombre
            '<td>' + user.stats.percent + '</td>' + // porcentaje 
            '<td>' + user.stats.reads.total + '</td>' + // total lectura
            '<td>' + user.stats.reads.percent + '</td>' + // % lectura
            '<td>' + user.stats.exercises.total + '</td>' + // total ejercicos
            '<td>' + user.stats.exercises.percent + '</td>' + // % ejercicios
            '<td>' + user.stats.quizzes.total + '</td>' + // total quizes
            '<td>' + user.stats.quizzes.percent + '</td>' + // % quizze
            '<td>' + user.stats.quizzes.scoreSum + '</td>' + // score
            '<td>' + user.stats.quizzes.scoreAvg + '</td>' + // promedio quizzes
            '</tr>';
        }
      });
    
};
