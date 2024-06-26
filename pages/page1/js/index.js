let banner = document.querySelector('#banner');
let ActiveBannerImage = '../pages/asessts/epicgraphy-shot-of-rainy-season-background-enjoying-nature-rainfall-and-happy-life-concept-generative-ai-free-photo.jpeg';

let bannerImages = ['../pages/asessts/wp9805879.jpg', '../pages/asessts/sunset.jpg', '../pages/asessts/romantic-rainy-day-hd-7.jpg', '../pages/asessts/epicgraphy-shot-of-rainy-season-background-enjoying-nature-rainfall-and-happy-life-concept-generative-ai-free-photo.jpeg'];


function changeBannerImage() {
    let randomIndex = Math.floor(Math.random() * bannerImages.length); 
    banner.src = bannerImages[randomIndex];
    banner.style.opacity = 0;


  setTimeout(() => {
    banner.style.opacity = 1;
  }, 100);
  }

  banner.src = ActiveBannerImage;

  
  setInterval(changeBannerImage, 3000);