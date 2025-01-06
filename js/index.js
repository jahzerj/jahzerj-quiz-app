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

// Toggle answer visibility and update button text
document.querySelectorAll(".button").forEach((button) => {
  button.addEventListener("click", () => {
    // Find the parent card element
    const questionCard = button.closest(".question-card");

    //find answer element
    const answer = questionCard.querySelector(".answer");

    if (answer) {
      // Toggle the "hidden" class
      answer.classList.toggle("hidden");

      //change buttons text
      button.textContent = answer.classList.contains("hidden")
        ? "SHOW THE ANSWER!"
        : "HIDE THE ANSWER!";
    }
  });
});
