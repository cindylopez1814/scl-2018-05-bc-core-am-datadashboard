const btn = document.getElementById('boton');
const btnTwo = document.getElementById('botonTwo');
const btnThree = document.getElementById('botonThree');
const btnFour = document.getElementById('botonFour');
const tex = document.getElementById('prueba');
const usuarios = document.getElementById('userReceptor');
<<<<<<< HEAD
const usersJSON = '../data/cohorts/lim-2018-03-pre-core-pw/users.json';
const progressJSON = '../data/cohorts/lim-2018-03-pre-core-pw/progress.json'; 
const cohortsJSON = '../data/cohorts/cohorts.json';
=======
const users = '../data/cohorts/lim-2018-03-pre-core-pw/users.json';
const progress = '../data/cohorts/lim-2018-03-pre-core-pw/progress.json'; 
>>>>>>> 5efa72d15825cb83d9cd8a35ba50f2d564dca12c


btn.addEventListener('click', () => {
  tex.innerHTML = '<h2> Veamos que resulta </h2>';
});

<<<<<<< HEAD

=======
fetch(users)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    renderseUsers(data);
  });

const renderseUsers = data => {
  btnTwo.addEventListener('click', () => {
    const render = data.forEach(element => {
      return usuarios.innerHTML += `<p>${' Nombre: ' + element.name + ' Sede: ' + element.timezone}</p>`;
    });
    return render;
  });
};

fetch(progress)
  .then(response => response.json())
  .then(dataProgress => {
    console.log(dataProgress);
    renderseProgress(dataProgress);
  });

const renderseProgress = dataProgress => {
  btnThree.addEventListener('click', () => {
    const render = Object.entries(dataProgress).forEach(elemento => {
      return usuarios.innerHTML += `<p>${elemento}</p>`;
    });
    return render;
  });
};
>>>>>>> 5efa72d15825cb83d9cd8a35ba50f2d564dca12c
