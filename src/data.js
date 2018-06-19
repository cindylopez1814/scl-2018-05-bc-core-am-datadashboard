window.computeUsersStats = (user, progress, courses) =>{
<<<<<<< HEAD
  fetch(usersJSON)
=======
  
<<<<<<< HEAD
=======
  fetch(users)
>>>>>>> upstream/master
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
};
<<<<<<< HEAD
=======
>>>>>>> 2ab577541398ef7b87f5b303fab2ee778e17b0c3
>>>>>>> upstream/master
};
window.sortUsers = (users, orderBy, orderDirection) => {

};

window.filterUsers = (users, search) => {

};

window.processCohortData = (options) => {

};