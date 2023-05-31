document.getElementById('getUsersBtn').addEventListener('click', function() {
    showLoader();
  
    fetch('https://reqres.in/api/users?page=1')
      .then(response => response.json())
      .then(data => {
        hideLoader();
        displayUsers(data.data);
      })
      .catch(error => {
        hideLoader();
        console.log('Error:', error);
      });
  });
  
  function showLoader() {
    document.getElementById('loader').style.display = 'block';
  }
  
  function hideLoader() {
    document.getElementById('loader').style.display = 'none';
  }
  
  function displayUsers(users) {
    const userGrid = document.getElementById('userGrid');
    userGrid.innerHTML = '';
  
    users.forEach(user => {
      const card = document.createElement('div');
      card.classList.add('card');
  
      const avatar = document.createElement('img');
      avatar.src = user.avatar;
  
      const name = document.createElement('h3');
      name.textContent = user.first_name + ' ' + user.last_name;
  
      const email = document.createElement('p');
      email.textContent = user.email;
  
      card.appendChild(avatar);
      card.appendChild(name);
      card.appendChild(email);
  
      userGrid.appendChild(card);
    });
  }
  