document.addEventListener('DOMContentLoaded', () => {
    const buyOutfitBoxBtn = document.getElementById('buyOutfitBoxBtn');
    const moreMinisBtn = document.getElementById('moreMinisBtn');

    buyOutfitBoxBtn.addEventListener('click', () => {
        alert('Outfit box added to cart!');
    });

    moreMinisBtn.addEventListener('click', () => {
        alert('Loading more minis...');
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const carouselInner = document.querySelector(".carousel-inner");
    const images = carouselInner.querySelectorAll("img");
    const totalImages = images.length;
    let index = 0;
  
    setInterval(function() {
      index = (index + 1) % totalImages;
      carouselInner.style.transform = `translateX(-${index * 100}%)`;
    }, 5000); // Change image every 5 seconds (adjust as needed)
  });
  