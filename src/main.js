const btn = document.getElementById('btnLima'); // boton que muestra  a las alumnas
const usuarios = document.getElementById('studentsName'); // aqui se impirme la tabla
const contData = document.getElementById('contData');
let rankingNumber = 0;


const userJson = '../data/cohorts/lim-2018-03-pre-core-pw/users.json';
const progresJson = '../data/cohorts/lim-2018-03-pre-core-pw/progress.json';
const cohortsJson = '../data/cohorts/cohorts.json';
