const btnOpen = document.querySelector('header > .btn-hamburger');
const btnClose = document.querySelector('.close-button .btn-hamburger');
const nav = document.querySelector('nav');

const btnHamburger = document.querySelector('.btn-hamburger');
const menu = document.querySelector('.menu');
const body = document.body;

btnHamburger.addEventListener('click', () => {
  menu.classList.toggle('active');
  body.classList.toggle('no-scroll');
});

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


// window.addEventListener('scroll', function() {
//   const scrolled = window.pageYOffset;
//   document.querySelector('.baloes-parallax').style.backgroundPositionY = -(scrolled * 0.5) + 'px';
// });

/* window.addEventListener('scroll', function() {
  const scrolled = window.pageYOffset;
  const parallax = document.querySelector('.parallax-camada');
  if (parallax) {
    parallax.style.backgroundPositionY = -(scrolled * 0.4) + 'px';
  }
}); */

