function myFunction(){

    const menu = document.getElementById("menu");

    menu.classList.toggle("active");

}

document.querySelectorAll("#menu a").forEach(item => {

    item.addEventListener("click", () => {

        document.getElementById("menu").classList.remove("active");

    });

});




const elementos = document.querySelectorAll('.hidden');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.2
});

elementos.forEach(elemento => {
  observer.observe(elemento);
});

function toggleFaq(btn){

    const item = btn.parentElement;

    item.classList.toggle("active");

}