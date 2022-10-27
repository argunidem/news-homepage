document.querySelector('.hamburger-btn').addEventListener('click', () => {
  document.querySelector('.hamburger-btn').style.transform =
    'translateY(-200px)';
  // document.querySelector('.nav-menu').style.transform = 'translateX(0)';
  document.querySelector('.nav-menu').style.opacity = '1';
});

document.querySelector('.nav-menu').addEventListener('click', () => {
  document.querySelector('.hamburger-btn').style.transform = 'translateY(0)';
  // document.querySelector('.nav-menu').style.transform = 'translateX(100%)';
  document.querySelector('.nav-menu').style.opacity = '0';
});
