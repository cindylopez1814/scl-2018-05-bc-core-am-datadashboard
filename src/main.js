const btn = document.getElementById('boton');
const btnTwo = document.getElementById('botonTwo');
const btnThree = document.getElementById('botonThree');
const btnFour = document.getElementById('botonFour');
const tex = document.getElementById('prueba');
const usuarios = document.getElementById('userReceptor');
const usersJSON = '../data/cohorts/lim-2018-03-pre-core-pw/users.json';
const progressJSON = '../data/cohorts/lim-2018-03-pre-core-pw/progress.json'; 
const cohortsJSON = '../data/cohorts/cohorts.json';


btn.addEventListener('click', () => {
  tex.innerHTML = '<h2> Veamos que resulta </h2>';
});


