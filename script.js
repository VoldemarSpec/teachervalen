// JavaScript to move the "No" button to a random position on hover
const noButton = document.getElementById("noButton");
noButton.addEventListener("mouseenter", () => {
    const maxX = window.innerWidth - noButton.clientWidth;
    const maxY = window.innerHeight - noButton.clientHeight;
    const newX = Math.floor(Math.random() * maxX);
    const newY = Math.floor(Math.random() * maxY);
    noButton.style.left = newX + "px";
    noButton.style.top = newY + "px";
});

// Добавляем функциональность изменения изображения при наведении на кнопку "No"
const image = document.getElementById("image");
const defaultImageSrc = "img/index.webp"; // Путь к изображению по умолчанию
const newImageSrc = "img/jack_change.jpg"; // Путь к новому изображению

noButton.addEventListener("mouseenter", () => {
    image.src = newImageSrc;
});
