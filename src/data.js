<<<<<<< HEAD
const urls = {
  users: '../data/cohorts/lim-2018-03-pre-core-pw/users.json',
  progress: '../data/cohorts/lim2-2018-03-pre-core-pw/progress.json',
  cohorts: '../data/cohorts/cohorts.json'
};

let user = null, progress = null, cohorts = null;

// iniciando llamado a los json
  
/* Promise.all().then(hacer algo en caso de exito, hacer algo en caso de fracaso).then(hacer algo en caso de exito, hacer algo en caso de fracaso)*/
Promise.all([fetch(url.user), fetch(url.progress), fetch(url.cohorts)])
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
const hashValues = (element) => {
  return Object.keys(element).map(object => {
    return element[object];
  });
};

const estadistica = (user, progress) => {
  let coursesProgress = hashValues(progress);
  let percentTotal = coursesProgress.reduce((previousValue, currentValue) => {
    return previousValue + currentValue.percent;
  }, 0);

  let quizzes = [];
  let reads = [];
  let practices = [];

  for (key in coursesProgress) {
    let units = hashValues(coursesProgress[key].units);
    const items = units.reduce((previousValue, currentValue) => {
      return currentValue.concat(hashValues(previousValue.parts));
    }, []);
  }

  quizzes = quizzes.concat(items.filter(item =>{
    return item.type === 'quiz';
  }));
  reads = reads.concat(items.filter(item =>{
    return item.type === 'read';
  }));
  practices = practices.concat(items.filter(item => {
    return item.type === 'practice';
  }));
};

const readCompleted = reads.filter(quizz => {
  return quizz.completed;
}).length;
const readTotal = reads.length;
const readPercent = readCompleted / reads.length;

const exerciseCompleted = practices.filter(exercise => {
  return quizz.completed;
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
  reads: {
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
window.computeUsersStats = (user, progress, courses) =>{
  users.forEach(user => {
    updateUserStat(user, progress[user.id]);
=======
window.onload = () => {
  dataBase();
};
// Funcion para abreviar
const hashValues = (remplace) => {
  return Object.keys(remplace).map(value => {
    return remplace[value]; 
>>>>>>> upstream/master
  });
};
// Declarar variables vacias
let users, progress, courses, coursesProgress; 

// Traer archivos json
const dataBase = () => {
  const urlUsers = '../data/cohorts/lim-2018-03-pre-core-pw/users.json';
  const urlProgress = '../data/cohorts/lim-2018-03-pre-core-pw/progress.json'; 
  const urlCohorts = '../data/cohorts.json';
  Promise.all([fetch(urlUsers), fetch(urlProgress), fetch(urlCohorts)])
    .then((responses) => {
      return Promise.all(responses.map((response) => {
        return response.json();
      }));
    }, reason => {
      console.log(reason);
    }).then((responseJSON) => {
      responseJSON[0].forEach((user) => {
        users = responseJSON[0];
        user = users[0];
        progress = responseJSON[1];
        cohorts = responseJSON[2];
      });
      computeUsersStats(users, progress, courses);  
      evento(cohorts);
    });
};

// Calculo de la estadistica de un usuario
const updateUserStat = (user, progresses) => {
  let coursesProgress = hashValues(progresses);
  let percentTotal = coursesProgress.reduce((first, second) => {
    return first + second.percent;
  }, 0);

  let quizzes = [], reads = [], practices = [];

  for (key in coursesProgress) {
    let units = hashValues(coursesProgress[key].units);

    // hacemos un solo arreglo con los quizzes, reads y practices
    // sin importar de a que unidad corresponden
    const items = units.reduce((first, second) => {
      return first.concat(hashValues(second.parts));
    }, []);


    quizzes = quizzes.concat(items.filter(item => {
      return item.type === 'quiz';
    }));
    reads = reads.concat(items.filter(item => {
      return item.type === 'read';
    }));
    practices = practices.concat(items.filter(item => {
      return item.type === 'practice';
    }));
  }
  // Calculo final para reads
  const readCompleted = reads.filter(quiz => { 
    return quiz.completed; 
  }).length;
  const readTotal = reads.length;
  const readPercent = readCompleted / reads.length;

  // Calculo final para exercises
  const exerciseCompleted = practices.filter(exercise => { 
    return exercise.completed;
  }).length;
  const exerciseTotal = practices.length;
  const exercisePercent = exerciseCompleted / practices.length;

  // Calculo final para quizzed
  const quizCompleted = quizzes.filter(quiz => { 
    return quiz.completed; 
  }).length;
  const quizTotal = quizzes.length;
  const quizPercent = quizCompleted / quizzes.length;
  const scoreSum = quizzes.reduce((first, second) => {
    return first + second.score; 
  }, 0);
  const scoreAvg = scoreSum / quizzes.length;

  user.stats = {
    percent: percentTotal / coursesProgress.length,
    reads: {
      total: readTotal,
      completed: readCompleted,
      percent: readPercent
    },
    exercises: {
      total: exerciseTotal,
      completed: exerciseCompleted,
      percent: exercisePercent
    },
    quizzes: {
      total: exerciseTotal,
      completed: quizCompleted,
      percent: quizPercent,
      scoreSum: scoreSum,
      scoreAvg: scoreAvg
    },
  };
  console.log(user.stats);
};

window.computeUsersStats = (users, progress, courses) => {
  users.forEach(user => {
    updateUserStat(user, progress[user.id]);
  });
};



window.sortUsers = (users, orderBy, orderDirection) => {

};

window.filterUsers = (users, search) => {

};

window.processCohortData = (options) => {

};