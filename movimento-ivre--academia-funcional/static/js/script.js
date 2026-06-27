function myFunction() {
  const menu = document.getElementById("menu");
  const menu2 = document.getElementById("menu2");
  const botaoX = document.getElementById("button-ham-x");

  if (menu.classList.contains("menu")) {
    console.log(menu.classList);
    menu.classList.remove("menu");
    menu.classList.add("menu2");

    botaoX.style.display = "block";
  } else {
    menu.classList.remove("menu2");
    menu.classList.add("menu");

    botaoX.style.display = "none";
  }
}

function fecharMenu() {
  const menu = document.getElementById("menu");
  const botaoX = document.getElementById(".button-ham-x");

  menu.classList.remove("menu2");
  menu.classList.add("menu");

  botaoX.style.display = "none";
}

document.querySelectorAll("#menuOculto a").forEach(item => {
  item.addEventListener("click", fecharMenu);
});