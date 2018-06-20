<<<<<<< HEAD
window.computeUsersStats = (user, progress, courses) =>{

=======
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
  
>>>>>>> 5efa72d15825cb83d9cd8a35ba50f2d564dca12c
};
window.sortUsers = (users, orderBy, orderDirection) => {

};

window.filterUsers = (users, search) => {

};

window.processCohortData = (options) => {

};

/*fetch(users)
.then(response => response.json())
.then(data => {
  console.log(data);
  renderseUsers(data);
});

const renderseUsers = data => {
btnTwo.addEventListener('click', () => {
  const render = data.forEach(element => {
    return usuarios.innerHTML += `<p>${element.name}</p>`;
  });
  return render;
});
};*/