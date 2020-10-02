
const loginForm = document.createElement("form");
const nameLabel = document.createElement("label");
const userName = document.createElement("input");
const pwLabel = document.createElement("label");
const password = document.createElement("input");
const loginButton = document.createElement("button");
loginButton.setAttribute("type", "submit");

const secretMSG = document.createElement("h1");
let authorizedUsers = [];

document.body.appendChild(loginForm);
loginForm.appendChild(nameLabel);
loginForm.appendChild(userName);
loginForm.appendChild(pwLabel);
loginForm.appendChild(password);
loginForm.appendChild(loginButton);
document.body.appendChild(secretMSG);

nameLabel.innerText = "User Name: ";
pwLabel.innerText = "Password: ";
password.setAttribute("type", "password");
loginButton.innerText = "Log in";


let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if(this.readyState == 4 && this.status == 200) {
   let users = (JSON.parse(xhttp.responseText).users);
    for(user of users){
      authorizedUsers.push(user);
    }         
  }
 
};
xhttp.open("GET", "users.json", true);
xhttp.send();

loginButton.addEventListener('click', (event) =>{  
  event.preventDefault();      
  checkAuthenticity(userName.value, password.value); 
});



function checkAuthenticity(userName, password){
  console.log("checkAuthenticity");
  authorizedUsers.forEach(user => {    
    if(user.name === userName && user.password === password){
      secretMSG.textContent = user.secret;      
    }
  });
}


