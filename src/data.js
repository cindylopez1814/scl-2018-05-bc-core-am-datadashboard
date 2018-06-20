window.computeUsersStats = (user, progress, courses) =>{
  
  fetch(users)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    renderseUsers(data);
  });

  
};

window.sortUsers = (users, orderBy, orderDirection) => {

};

window.filterUsers = (users, search) => {

};

window.processCohortData = (options) => {

};