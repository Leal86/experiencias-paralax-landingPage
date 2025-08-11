const btnOpen = document.querySelector('header > .btn-hamburger');
const btnClose = document.querySelector('.close-button .btn-hamburger');
const nav = document.querySelector('nav');

// Abrir menu
btnOpen.addEventListener('click', () => {
  nav.classList.add('active');
  document.body.classList.add('no-scroll');
  btnOpen.classList.add('active');
  btnClose.classList.add('active');
});

// Fechar menu
btnClose.addEventListener('click', () => {
  nav.classList.remove('active');
  document.body.classList.remove('no-scroll');
  btnOpen.classList.remove('active');
  btnClose.classList.remove('active');
});

// Fechar menu ao clicar em qualquer link do menu
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
    document.body.classList.remove('no-scroll');
    btnOpen.classList.remove('active');
    btnClose.classList.remove('active');
  });
});