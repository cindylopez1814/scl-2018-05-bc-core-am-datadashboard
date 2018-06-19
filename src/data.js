window.computeUsersStats = (user, progress, courses) =>{
  
<<<<<<< HEAD
=======
  fetch(users)
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
>>>>>>> 2ab577541398ef7b87f5b303fab2ee778e17b0c3
};
window.sortUsers = (users, orderBy, orderDirection) => {

};

window.filterUsers = (users, search) => {

};

window.processCohortData = (options) => {

};