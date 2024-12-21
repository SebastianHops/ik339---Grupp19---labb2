const url = 'http://localhost:3000/users';

const uListElement = document.createElement('ul');
document.body.appendChild(uListElement);
uListElement.classList.add('list-group');

fetch(url)
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then((users) => {
    console.log(users);
    users.forEach((user) => {
      const listElement = document.createElement('li');
      listElement.classList.add('list-group-item');
      listElement.textContent = `${user.firstName} ${user.lastName} ${user.username}`;
      listElement.style.background = user.color;
      /*const html = `<p>${user.firstName + ' ' + user.lastName}</p>`;
      document.body.insertAdjacentHTML('beforeend', html); */
      console.log(listElement);
      /*document.body.appendChild(listElement);*/
      uListElement.appendChild(listElement);
    });
  });

/*
 fetch(url).then((response) => console.log(response));

const request = new Request('http://localhost:3000/users');

console.log(request);

async function fetchData() {
  const response = await fetch(request);
} */
