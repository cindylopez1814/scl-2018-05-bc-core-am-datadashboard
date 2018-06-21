const btn = document.getElementById('boton');
const btnTwo = document.getElementById('botonTwo');
const btnThree = document.getElementById('botonThree');
const btnFour = document.getElementById('botonFour');
const tex = document.getElementById('prueba');
const usuarios = document.getElementById('userReceptor');
const urlUsers = '../data/cohorts/lim-2018-03-pre-core-pw/users.json';
const urlProgress = '../data/cohorts/lim-2018-03-pre-core-pw/progress.json'; 
const urlCourses = '../data/cohorts/cohorts.json';


btn.addEventListener('click', () => {
  tex.innerHTML = '<h2> Veamos que resulta </h2>';
});

fetch(urlCourses)
  .then(response => response.json())
  .then(courses => {
    renderCourses(courses);
  });

fetch(urlUsers)
  .then(response => response.json())
  .then(users => {
    console.log('primero');
  });

fetch(urlProgress)
  .then(response => response.json())
  .then(Progress => {
    console.log(Progress);
    renderseUsers(users, Progress);
  });

console.log('segundo');
const renderseUsers = (users, Progress) => {
  btnTwo.addEventListener('click', () => {
    const render = users.forEach(user => {
      let userProgress = Progress[user.id]; // aqui se hace el match de users.json con progress.json

      // Cuando se cumpla la condicion entragara el valor correspondiente, si la condicion es falsa, entregara 'sin   info'
      let totalDuration = 'Sin info';
      if (userProgress.intro) {
        totalDuration = userProgress.intro.totalDuration;
      }
      let percent = 'Sin info';
      if (userProgress.intro) {
        percent = userProgress.intro.percent;
      }
      
      
      return usuarios.innerHTML += `<p>${' NOMBRE: ' + user.name + ' SEDE: ' + user.timezone + ' DURACION TOTAL:' + totalDuration + ' PORCENTAJE:' + percent }</p>`;
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
