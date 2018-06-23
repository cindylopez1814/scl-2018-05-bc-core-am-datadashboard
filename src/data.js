const urls = {
  users: '../data/cohorts/lim-2018-03-pre-core-pw/users.json',
  progress: '../data/cohorts/lim2-2018-03-pre-core-pw/progress.json',
  cohorts: '../data/cohorts/cohorts.json'
};

let user = null, progress = null, cohorts = null;

window.computeUsersStats = (user, progress, courses) =>{
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
    });
};


window.sortUsers = (users, orderBy, orderDirection) => {

};

window.filterUsers = (users, search) => {

};

window.processCohortData = (options) => {

};