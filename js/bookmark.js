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

  if (!Object.values(bookmarks).some((isActive) => isActive)) {
    bookmarksContainer.innerHTML = "<p>No bookmarks yet!</p>";
  }
});

