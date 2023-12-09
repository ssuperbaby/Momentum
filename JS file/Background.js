const images = [
  "image (1).jpg",
  "image (2).jpg",
  "image (3).jpg",
  "image (4).jpg",
  "image (5).jpg",
  "image (6).jpg",
  "image (7).jpg",
  "image (8).jpg",
  "image (9).jpg",
  "image (10).jpg",
  "image (11).jpg",
];

const RandomImage = images[Math.floor(Math.random() * images.length)];
const Image = document.querySelector("img");

Image.src = `image/${RandomImage}`;
