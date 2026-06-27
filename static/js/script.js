function myFunction(){

    const menu = document.getElementById("menu");

    menu.classList.toggle("active");

}

document.querySelectorAll("#menu a").forEach(item => {

    item.addEventListener("click", () => {

        document.getElementById("menu").classList.remove("active");

    });

});