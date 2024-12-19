


    // Define image arrays
    const originalImages = [
      "images_1/Unicorn_with_apple.webp",
      "images_1/Unicorn_with_ball.webp",
      "images_1/Unicorn_with_car.webp",
      "images_1/Unicorn_with_dog.webp",
      "images_1/unicorn_with_elephant.webp",
      "images_1/unicorn_with_fish.webp",
    ];

    const alternateImages = [
      "images_2/unicornA.webp",
      "images_2/unicornB.webp",
      "images_2/unicornC.webp",
      "images_2/unicornD.webp",
      "images_2/unicornE.webp",
      "images_2/unicornF.webp",
    ];

    // Function to toggle images
    function toggleImage(button, index) {
      const img = button.querySelector("img");

      // Toggle the image source
      if (img.src.endsWith(originalImages[index])) {
        img.src = alternateImages[index];
        img.alt = `Alternate image ${index + 1}`;
      } else {
        img.src = originalImages[index];
        img.alt = `Original image ${index + 1}`;
      }
    }


// Array to track active cards
const activeCards = [];

// Function to toggle bookmark and active state
function toggleBookmark(bookmark, cardIndex) {
  const card = bookmark.closest(".question-card");

  // Toggle the bookmark icon
  if (bookmark.src.includes("bookmark.svg")) {
    bookmark.src = "./assets/bookmark-filled.svg";
  } else {
    bookmark.src = "./assets/bookmark.svg";
  }

  // Toggle the active state of the card
  if (card.classList.contains("active")) {
    card.classList.remove("active");

    // Remove card index from activeCards
    const index = activeCards.indexOf(cardIndex);
    if (index > -1) {
      activeCards.splice(index, 1);
    }
  } else {
    card.classList.add("active");

    // Add card index to activeCards
    if (!activeCards.includes(cardIndex)) {
      activeCards.push(cardIndex);
    }
  }

  console.log("Active cards:", activeCards); // Debugging active card indices
}
