document.querySelector('.hamburger-btn').addEventListener('click', () => {
  document.querySelector('.hamburger-btn').style.transform =
    'translateY(-200px)';
  document.querySelector('.nav-menu').style.opacity = '1';
});

document.querySelector('.nav-menu').addEventListener('click', () => {
  document.querySelector('.hamburger-btn').style.transform = 'translateY(0)';
  document.querySelector('.nav-menu').style.opacity = '0';
});

window.addEventListener('resize', () => {
  if (window.innerWidth >= 1024) {
    document.querySelector('.nav-menu').style.opacity = '1';
  } else {
    document.querySelector('.nav-menu').style.opacity = '0';
  }
});
