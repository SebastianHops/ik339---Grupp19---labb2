const url = 'http://localhost:3000/users'; //lagrar våran backend data i en variabel

const uListElement = document.createElement('ul'); // skapar ett nytt element
document.body.appendChild(uListElement); // lägger till ul i domträdet i body
uListElement.classList.add('list-group'); // lägger till en class på elementet

// gör ett anrop till url för att hämta användardatan vi har
// använder then för att hantera asynkront, den tilldelas en callbackfunktion som även innehar response som svar för datan vi får tillbaka.
// response json, omvandlar jsonfromatet till en js array(objekt), för att göra det möjligt att göra något med datan
fetch(url)
  .then((response) => {
    console.log(response);
    return response.json();
  })
  // tar emot datan vilket är users med then metod och en callbackfunktion. använder console.log för att säkerställa att vi fått rätt data, sedan loopar vi igenom arrayen users och för varje iteration så skapas ett list-group-item.
  .then((users) => {
    console.log(users);
    users.forEach((user) => {
      const listElement = document.createElement('li');
      listElement.classList.add('list-group-item');
      listElement.textContent = `${user.firstName} ${user.lastName} ${user.username}`; // i textcontent på elementet läggs info för varje user till
      listElement.style.background = user.color; // stylar varje users element med hjälp av style och preferens på users färgval.
      console.log(listElement);
      uListElement.appendChild(listElement); //lägger till li elementet i ul elemenet i domträdet
    });
  });
