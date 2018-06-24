





const urls = {
    user :'../data/cohorts/lim-2018-03-pre-core-pw/users.json',
    progress:'../data/cohorts/lim-2018-03-pre-core-pw/progress.json',
    cohorts:'../data/cohorts.json'

}

let user = null, progress = null , cohorts = null;

//iniciando llamado a los JSON

const init = () => {
  promises.all= ([fetch(urls.user)],[fetch(urls.progress)],[fetch (urls.cohorts)])
  .then (values => {
    return Promise.all(values.map(element => { return element.json()}));
  }
} 

window.onload = () =>{
  dataJson();
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
