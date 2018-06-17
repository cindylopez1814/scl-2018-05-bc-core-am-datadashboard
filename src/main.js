const usersJSON = '../data/cohorts/lim-2018-03-pre-core-pwd/users.json';
const progressJSON = '../data/cohorts/lim-2018-03-pre-core-pwd/progress.json'; 

const btn = document.getElementById('boton');
const tex = document.getElementById('prueba');
btn.addEventListener('click', () => {
  tex.innerHTML = '<h2> Veamos que resulta </h2>';
});