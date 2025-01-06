function addCharCountListeners() {
  const questionTextarea = document.querySelector('textarea[name="question"]');
  const answerTextarea = document.querySelector('textarea[name="answer"]');

  questionTextarea.addEventListener("input", handleInputEvent);
  answerTextarea.addEventListener("input", handleInputEvent);
}

function handleInputEvent(event) {
  const textarea = event.target;
  const maxLength = textarea.getAttribute("maxlength");
  const currentLength = textarea.value.length;

  const parent = textarea.closest(".form-field");
  const countDisplay = parent.querySelector(".char-count");

  if (countDisplay) {
    countDisplay.textContent =
      `${currentLength}/${maxLength}` + "characters left";
  }
}

addCharCountListeners();
