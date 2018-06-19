window.computeUsersStats = (user, progress, courses) =>{
  
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
};

window.sortUsers = (users, orderBy, orderDirection) => {

};

window.filterUsers = (users, search) => {

};

window.processCohortData = (options) => {

};