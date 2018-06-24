<<<<<<< HEAD

const btn = document.getElementById('boton');
const btnTwo = document.getElementById('botonTwo');
const btnThree = document.getElementById('botonThree');
const btnFour = document.getElementById('botonFour');
const tex = document.getElementById('prueba');
const usuarios = document.getElementById('studentsName');
   
const urls = {
  users: '../data/cohorts/lim-2018-03-pre-core-pw/users.json',
  progress: '../data/cohorts/lim-2018-03-pre-core-pw/progress.json',
  cohorts: '../data/cohorts.json'
};
  
let user = null, progress = null, cohorts = null;
  
// iniciando llamado a los json
    
/* Promise.all().then(hacer algo en caso de exito, hacer algo en caso de fracaso).then(hacer algo en caso de exito, hacer algo en caso de fracaso)*/
Promise.all([fetch(urls.users), fetch(urls.progress), fetch(urls.cohorts)])
  .then(values => { // then de  la promesa de los fetch
    // EXITO !!!
    return Promise.all(values.map(element => {
      return element.json();
    }));
  }, reason => {
    // Fracaso: problemas al hacer la llamada a los json
    console.log(reason);
  }).then(values => { // es la promesa de los json
    // Exito!!
    // cuando termino de procesar (convertir a json) oculto el mensaje loading
    const loading = document.getElementById('loading');
    loading.style.display = 'none'; // en caso de ser correcto, proceso termina correctamente: oculta el texto que dice cargando
    
    user = values [0];
    progress = values[1];
    console.log(progress);
    cohorts = values [2];
    console.log(cohorts);
    
    computeUsersStats(user, progress, cohorts);
    
    btn.addEventListener('click', () => {
      let text = users.map(user =>{
        return usuarios.innerHTML += '<tr>' +
        '<td>' + rankingNumber + '</td>' +
        '<td>' + user.name.toUpperCase() + '</td>' +
        '<td>' + user.stats.percent + '</td>' +
        '<td>' + +'</td>' +
        '<td>' + +'</td>' +
        '<td>' + +'</td>' +
        '<td>' + +'</td>' +
        '</tr>';
      });
    });
  });
  
  
// calculando la estadistica de los usuarios
const hasValues = (element) => {
  return Object.keys(element).map(objec => {
    return element[objec];
  });
};
  
const updateUserStat = (user, progress) => {
  let coursesProgress = hasValues(progress);
  let percentTotal = coursesProgress.reduce((previousValue, currentValue) => {
    return previousValue + currentValue.percent;
  }, 0);
  
  let quizzes = [];
  let read = [];
  let practices = [];
  
  for (key in coursesProgress) {
    let units = hasValues(coursesProgress[key].units);
    const items = units.reduce((previousValue, currentValue) => {
      return currentValue.concat(hasValues(previousValue.parts));
    }, []);
  
  
    quizzes = quizzes.concat(items.filter(item =>{
      return item.type === 'quiz';
    }));
    read = read.concat(items.filter(item =>{
      return item.type === 'read';
    }));
    practices = practices.concat(items.filter(item => {
      return item.type === 'practice';
    }));
  }
  let readCompleted = read.filter(read => {
    return read.completed;
  }).length;
  const readTotal = read.length;
  const readPercent = readCompleted / read.length;
    
  const exerciseCompleted = practices.filter(exercise => {
    return exercise.completed;
  }).length;
  const exerciseTotal = practices.length;
  const exercisePercent = exerciseCompleted / practices.length;
    
  const quizzCompleted = quizzes.filter(quizz => {
    return quizz.completed
    ;
  }).length;
  const quizzTotal = quizzes.length;
  const quizzPercent = quizzCompleted / quizzes.length;
  const sumTotal = quizzes.reduce((previousValue, currentValue) => {
    return previousValue + currentValue++;
  }, 0);
  const score = sumTotal / quizzes.length;
    
  user.stats = {
    percent: percentTotal / coursesProgress.length,
    read: {
      total: readTotal,
      completed: readCompleted,
      percent: readPercent
    },
    exercise: {
      total: exerciseTotal,
      completed: exerciseCompleted,
      percent: exercisePercent
    },
    quizzes: {
      total: quizzTotal,
      completed: quizzCompleted,
      percent: quizzPercent,
      sumTotal: sumTotal,
      score: score
    },
  };
};
  
window.computeUsersStats = (user, progress, courses) =>{
  user.forEach(user => {
    updateUserStat(user, progress[user.id]);
  });
};
/* fetch(urlUsers)
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
  };*/
=======
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

// Este evento no se esta ejecutando
// Evento para tabla de 
const draw = (user) => {     
  container.addEventListener('click', () => { 
    updateUserStat(user, progresses);
    // contData.classList.remove('d-none');
    for (let i = 0; i < users.length; i++) {
      rankingNumber ++;
      usuarios.innerHTML += '<tr>' +
            '<td>' + rankingNumber + '</td>' + 
            '<td>' + users[i].name.toUpperCase() + '</td>' + // nombre
            '<td>' + user.stats.percent + '</td>' + // porcentaje 
            '<td>' + user.stats.reads.total + '</td>' + // total lectura
            '<td>' + user.stats.reads.percent + '</td>' + // % lectura
            '<td>' + user.stats.exercises.total + '</td>' + // total ejercicos
            '<td>' + user.stats.exercises.percent + '</td>' + // % ejercicios
            '<td>' + user.stats.quizzes.total + '</td>' + // total quizes
            '<td>' + user.stats.quizzes.percent + '</td>' + // % quizze
            '<td>' + user.stats.quizzes.scoreSum + '</td>' + // score
            '<td>' + user.stats.quizzes.scoreAvg + '</td>' + // promedio quizzes
            '</tr>';
    }
  });
};
>>>>>>> upstream/master
