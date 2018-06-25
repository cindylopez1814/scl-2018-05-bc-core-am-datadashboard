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
};