const btn = document.getElementById('boton');
const btnTwo = document.getElementById('botonTwo');
const btnThree = document.getElementById('botonThree');
const btnFour = document.getElementById('botonFour');
const tex = document.getElementById('prueba');
const usuarios = document.getElementById('studentsName');
let rankingNumber = 0;
const urlUsers = '../data/cohorts/lim-2018-03-pre-core-pw/users.json';
const urlProgress = '../data/cohorts/lim-2018-03-pre-core-pw/progress.json'; 

btn.addEventListener('click', () => {
  tex.innerHTML = '<h2> Veamos que resulta </h2>';
});

fetch(urlUsers)
  .then(response => response.json())
  .then(users => {
    // se carga segundo

    fetch(urlProgress)
      .then(response => response.json())
      .then(Progress => {
        console.log(Progress);
        renderseUsers(users, Progress);
      });
  });

// se carga primero
const renderseUsers = (users, Progress) => {
  btnTwo.addEventListener('click', () => {
    const render = users.forEach(user => {
      let userProgress = Progress[user.id]; // aqui se hace el match de users.json con progress.json
      rankingNumber++;
      // Cuando se cumpla la condicion entragara el valor correspondiente, si la condicion es falsa, entregara 'sin   info'
      let percent = 'Sin info';
      if (userProgress.intro) {
        percent = userProgress.intro.percent;
        let rankingNumber = 0;
      }
      return usuarios.innerHTML += '<tr>' +
      '<td>' + rankingNumber + '</td>' +
      '<td>' + user[rankingNumber - 1].name.toUpperCase() + '</td>' +
      '<td>' + percent + '</td>' +
      '<td>' + +'</td>' +
      '<td>' + +'</td>' +
      '<td>' + +'</td>' +
      '<td>' + +'</td>' +
      '</tr>'
    });
    return render;
  });
};


// Evento de boton para el progreso
/* let test = null;
const renderseProgress = dataProgress => {
  btnThree.addEventListener('click', () => {
    const render = Object.entries(dataProgress).forEach(elemento => {
      window.test = elemento;
      let userProgress = elemento[1];
      // console.log(elemento);
    });
    return render;
  });
};*/
//<p>${' Nombre: ' + user.name.toUpperCase() + ' Sede: ' + user.timezone + ' Porcentaje:' + percent}</p>`;
