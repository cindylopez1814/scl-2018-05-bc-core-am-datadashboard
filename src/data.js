window.onload = () => {
  dataBase();
};
// Funcion para abreviar
const hashValues = (remplace) => {
  return Object.keys(remplace).map(value => {
    return remplace[value]; 
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
  container.addEventListener('click', () => { 
    for (let i = 0; i < users.length; i++) {
      rankingNumber ++;
      usuarios.innerHTML += '<tr>' +
            '<td>' + rankingNumber + '</td>' + 
            '<td>' + user.stats.percent + '</td>' + // porcentaje 
            '<td>' + user.stats.exercises.percent + '</td>' + // % ejercicios
            '<td>' + user.stats.quizzes.total + '</td>' + // total quizes
            '<td>' + Math.round(user.stats.quizzes.percent) + '</td>' + // % quizze
            '<td>' + user.stats.quizzes.scoreSum + '</td>' + // score
            '<td>' + Math.round(user.stats.quizzes.scoreAvg) + '</td>' + // promedio quizzes
            '</tr>';
    };
  });
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
const computeUsersStats = (users, progress, courses) => {

  users.forEach(user => {
    updateUserStat(user, progress[user.id]);
  });

}

init();
