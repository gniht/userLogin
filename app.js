const loginForm = document.createElement("form");
const nameLabel = document.createElement("label");
const userName = document.createElement("input");
const pwLabel = document.createElement("label");
const password = document.createElement("input");
const loginButton = document.createElement("button");
const secretMSG = document.createElement("h1");
let users;

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
    users = (JSON.parse(xhttp.responseText));
  } 
};
xhttp.open("GET", "users.json", true);
xhttp.send();

loginButton.addEventListener('click', () =>{  
  checkAuthenticity(userName.innerText, password.innerText);
  console.log(userName.value, password.value);
});


function checkAuthenticity(userName, password){
  
  users.forEach(user => {
    console.log(user);
    if(user.name === userName && user.password === password){
      secretMSG.textContent = user.secret;      
      console.log(secretMSG);
    }
  });
}


