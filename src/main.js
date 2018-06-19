const btn = document.getElementById('boton');
const btnTwo = document.getElementById('botonTwo');
const btnThree = document.getElementById('botonThree');
const btnFour = document.getElementById('botonFour');
const tex = document.getElementById('prueba');
const usuarios = document.getElementById('userReceptor');
<<<<<<< HEAD
const user = '../data/cohorts/lim-2018-03-pre-core-pw/users.json';
=======
const users = '../data/cohorts/lim-2018-03-pre-core-pw/users.json';
>>>>>>> 2ab577541398ef7b87f5b303fab2ee778e17b0c3
const progressJSON = '../data/cohorts/lim-2018-03-pre-core-pw/progress.json'; 


btn.addEventListener('click', () => {
  tex.innerHTML = '<h2> Veamos que resulta </h2>';
});


<<<<<<< HEAD

=======
<<<<<<< HEAD
fetch(user)
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
};
=======

>>>>>>> 2ab577541398ef7b87f5b303fab2ee778e17b0c3
>>>>>>> upstream/master
