const elementos = document.querySelectorAll('.hidden');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.7,
  rootMargin: "0px 0px -200px 0px"
});

elementos.forEach(elemento => {
  observer.observe(elemento);
});


const perguntas = document.querySelectorAll('.pergunta');

perguntas.forEach(pergunta => {
    const btnAbrir = pergunta.querySelector('.abrir-resposta');
    const btnFechar = pergunta.querySelector('.fechar-resposta');

    btnAbrir.addEventListener('click', () => {
        pergunta.classList.add('ativa');
    });

    btnFechar.addEventListener('click', () => {
        pergunta.classList.remove('ativa');
    });
});