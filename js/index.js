const button = document.querySelector('[data-js="bookmark"]');

//Toggles the bookmark filled
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
      const questionCard = bookmark.closest(".question-card");
      if (questionCard) {
        questionCard.classList.toggle("active");
      }
    });
  });