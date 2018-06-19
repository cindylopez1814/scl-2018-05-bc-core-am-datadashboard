window.onload = () =>{
  dataJson();
};

function dataJson() {
  const users = '../data/cohorts/lim-2018-03-pre-core-pw/users.json';
  fetch(users)
    .then(response => response.json())
    .then(dataUsers => {
      console.log(dataUsers);
      renderseUsers(dataUsers);
    });
    
  const progress = '../data/cohorts/lim-2018-03-pre-core-pw/progress.json';
  fetch(progress)
    .then(response => response.json())
    .then(dataProgress => {
      console.log(dataProgress);
      renderseProgress(dataProgress);
    });
}
window.computeUsersStats = (user, progress, courses) =>{
  
};
window.sortUsers = (users, orderBy, orderDirection) => {

};

window.filterUsers = (users, search) => {

};

window.processCohortData = (options) => {

};