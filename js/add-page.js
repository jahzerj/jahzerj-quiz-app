console.clear();

const form = document.querySelector('[data-js="card-form"]');
const container = document.querySelector('[data-js="card-container"]');

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

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Grabbing only the information from my form.
  const formData = new FormData(event.target);
  // Converting my info to an Object that we can work with
  const data = Object.fromEntries(formData);

  console.log("data", data);
  console.log('Text from my input: ', data['answer']);
});
