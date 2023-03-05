const img = ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg'];
const randomIdx = Math.floor(Math.random() * img.length);

document.body.style.backgroundImage = `URL(img/${img[randomIdx]})`;