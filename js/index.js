const button = document.querySelector('[data-js="bookmark"]');

// // Define image arrays
// const originalImages = [
//   "images_1/Unicorn_with_apple.webp",
//   "images_1/Unicorn_with_ball.webp",
//   "images_1/Unicorn_with_car.webp",
//   "images_1/Unicorn_with_dog.webp",
//   "images_1/unicorn_with_elephant.webp",
//   "images_1/unicorn_with_fish.webp",
// ];

// const alternateImages = [
//   "images_2/unicornA.webp",
//   "images_2/unicornB.webp",
//   "images_2/unicornC.webp",
//   "images_2/unicornD.webp",
//   "images_2/unicornE.webp",
//   "images_2/unicornF.webp",
// ];

document.querySelectorAll(".click-image").forEach((image) => {
  image.addEventListener("click", () => {
    const currentSrc = image.getAttribute("src");
    const initialSrc = image.getAttribute("data-initial");
    const letterSrc = image.getAttribute("data-letter");
    image.setAttribute(
      "src",
      currentSrc === initialSrc ? letterSrc : initialSrc
    );
  });
});

/*Toggles the bookmark filled*/
document.querySelectorAll(".bookmark").forEach((bookmark) => {
  bookmark.addEventListener("click", () => {
    const currentSrc = bookmark.getAttribute("src");
    const initialSrc = bookmark.getAttribute("data-initial");
    const toggledSrc = bookmark.getAttribute("data-toggled");

    // Toggle image source
    bookmark.setAttribute(
      "src",
      currentSrc === initialSrc ? toggledSrc : initialSrc
    );

    //Toggle active state on the parent question card
    const card = bookmark.closest(".question-card");
    card.classList.toggle("active");
  });
});


