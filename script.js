const images = document.querySelectorAll('.crazy-gallery img');

images.forEach((img, index) => {

  const top = Math.random() * window.innerHeight;
  const left = Math.random() * window.innerWidth;
  img.style.top = `${top}px`;
  img.style.left = `${left}px`;


  img.style.animationDuration = `${15 + Math.random() * 15}s`;
});
