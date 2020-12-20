const signUpButtom = document.getElementById("popUpButtom");
const container = document.getElementById("popUpContainer");
const mainFlex = document.getElementById("main");

function createPopUp() {
  let container = document.createElement("div");
  let signUpValidation = document.createElement("p");

  container.classList.add("popUpContainer");
  signUpValidation.classList.add("popUp");
  signUpValidation.innerText =
    "Hello, your account has been save in our database.";

  container.appendChild(signUpValidation);

  mainFlex.appendChild(container);

  setTimeout(() => signUpValidation.remove(), 3000);
}

signUpButtom.addEventListener("click", () => createPopUp());
