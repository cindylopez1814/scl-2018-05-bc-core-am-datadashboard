const btn = document.getElementById('boton');
const btnTwo = document.getElementById('botonTwo');
const btnThree = document.getElementById('botonThree');
const btnFour = document.getElementById('botonFour');
const tex = document.getElementById('prueba');



fetch(urls.User)
  .then(response => response.json())
  .then(users => {
    // se carga segundo

    fetch(urls.Progress)
      .then(response => response.json())
      .then(Progress => {
        console.log(Progress);
        renderseUsers(users, Progress);
      });
  });

// se carga primero
const renderseUsers = (users, Progress) => {
  let rankingNumber = 0;
  btn.addEventListener('click', () => {
    const render = users.forEach(user => {
      rankingNumber ++;
      let userProgress = Progress[user.id]; // aqui se hace el match de users.json con progress.json
      // Cuando se cumpla la condicion entragara el valor correspondiente, si la condicion es falsa, entregara 'sin   info'
      let percent = 'Sin info';
      if (userProgress.intro) {
        percent = userProgress.intro.percent;
      }
      return usuarios.innerHTML += '<tr>' +
      '<td>' + rankingNumber + '</td>' +
      '<td>' + user.name.toUpperCase() + '</td>' +
      '<td>' + percent + '</td>' +
      '<td>' + +'</td>' +
      '<td>' + +'</td>' +
      '<td>' + +'</td>' +
      '<td>' + +'</td>' +
      '</tr>';
    });
    return render;
  });
};

const progressPerson= (userProgress) => {//promedio del curso por persona
  let cursos = userProgress.entriees (userProgress)
  return cursos.reduce (
    (x,y) => {
      return x+y [1].percent
    },0)/cursos.length;
};console.log (progressPerson);


const PromedioCurso = arrProgress.reduce(//promedio del curso
  (x,y) => {
    return x + progressPerson(y[1]);
  },0)/arrProgress.length;
  consolge.log(arrProgress)
