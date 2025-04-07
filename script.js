const images = document.querySelectorAll('.crazy-gallery img');

function randomPosition(img) {
    img.style.top = Math.random() * 90 + "vh";
    img.style.left = Math.random() * 90 + "vw";
}

images.forEach(img => {
    randomPosition(img);

    img.addEventListener('mouseenter', () => {
        randomPosition(img);
    });

    setInterval(() => {
        randomPosition(img);
    }, 5000); 
});