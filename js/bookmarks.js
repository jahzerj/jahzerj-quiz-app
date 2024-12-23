document.addEventListener("DOMContentLoaded", () => {
  const bookmarksContainer = document.querySelector(".bookmarks-container");
  const bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || {};

  Object.entries(bookmarks).forEach(([cardId, isActive]) => {
    if (isActive) {
      // Get HTML content of the card from 'index.html'
      const storedCardHtml = localStorage.getItem(`card-${cardId}`);
      if (storedCardHtml) {
        //Create a container element and append the stored card HTML
        const cardElement = document.createElement("div");
        cardElement.innerHTML = storedCardHtml;
        bookmarksContainer.appendChild(cardElement.firstElementChild);
      }
    }
  });

  // If no bookmarks are found, show a message
  if (!Object.values(bookmarks).some((isActive) => isActive)) {
    bookmarksContainer.innerHTML = "<p>No bookmarks yet!</p>";
  }

  // Clear bookmarks functionality
  const clearButton = document.getElementById("clear-bookmarks");
  if (clearButton) {
    clearButton.addEventListener("click", () => {
      // Clear localStorage entries related to bookmarks
      const bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || {};
      Object.keys(bookmarks).forEach((cardId) => {
        localStorage.removeItem(`card-${cardId}`);
      });
      localStorage.removeItem("bookmarks");

      // Clear bookmarks container and show a message
      bookmarksContainer.innerHTML = "<p>No bookmarks yet!</p>";
    });
  }
});
