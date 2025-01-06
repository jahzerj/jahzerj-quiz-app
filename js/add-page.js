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

  // Create a new question card
  const card = document.createElement("card");
  card.classList.add("question-card");

  // Bookmark
  const bookmark = document.createElement("img");
  bookmark.classList.add("bookmark");
  bookmark.src = "./assets/bookmark.svg";
  bookmark.setAttribute("data-initial", "./assets/bookmark.svg");
  bookmark.setAttribute("data-toggled", "./assets/bookmark-filled.svg");
  bookmark.alt = "Bookmark";

  // Question
  const questionParagraph = document.createElement("p");
  questionParagraph.classList.add("question");
  questionParagraph.textContent = data.question;

  // Answer
  const answerButton = document.createElement("button");
  answerButton.classList.add("button");
  answerButton.textContent = "SHOW THE ANSWER!";

  const answerParagraph = document.createElement("p");
  answerParagraph.classList.add("answer", "hidden");
  answerParagraph.textContent = data.answer;

  // Categories
  const categoryList = document.createElement("ul");
  categoryList.classList.add("categories");

  const categoryItem = document.createElement("li");
  categoryItem.classList.add("category");
  categoryItem.textContent = `#${data.tag}`;
  categoryList.appendChild(categoryItem);

  // Append elements to the card
  card.append(
    bookmark,
    questionParagraph,
    answerButton,
    answerParagraph,
    categoryList
  );

  // Add the card to the container
  container.appendChild(card);

  // Reset the form
  form.reset();
});
