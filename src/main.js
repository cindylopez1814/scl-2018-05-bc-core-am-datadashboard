const btn = document.getElementById('boton');
const btnTwo = document.getElementById('botonTwo');
const btnThree = document.getElementById('botonThree');
const btnFour = document.getElementById('botonFour');
const tex = document.getElementById('prueba');
const usuarios = document.getElementById('userReceptor');
const usersJSON = '../data/cohorts/lim-2018-03-pre-core-pw/users.json';
const progressJSON = '../data/cohorts/lim-2018-03-pre-core-pw/progress.json'; 


btn.addEventListener('click', () => {
  tex.innerHTML = '<h2> Veamos que resulta </h2>';
});


/*fetch(usersJSON)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    renderseUsers(data);
  });

const renderseUsers = data => {
  btnTwo.addEventListener('click', () => {
    const render = data.forEach(element => {
      return usuarios.innerHTML += `<p>${element.name}</p>`;
    });
    return render;
  });
};*/
