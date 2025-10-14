let quizData = [
  {
    question: "What is HTML",
    options: [
      "Language",
      "Markup Language",
      "Programming Language",
      "Not Language",
    ],
    correct: 1,
  },
  {
    question: "What is CSS",
    options: [
      "Casecading Style Sheet",
      "Use for Styling something",
      "Coding Language",
      "Not Language",
    ],
    correct: 0,
  },
  {
    question: "What is MERN",
    options: [
      "MongoDB React Express.js Node.js",
      "It a stack for development",
      "It's a technology",
      "Not Language",
    ],
    correct: 3,
  },
];

let selectedOptionValue = "";
let questionNum = 0;
let curPage = 0;
let score = 0;
let container = document.querySelector(".container");
let quizSection = document.querySelector(".quiz-section");
let resultSection = document.querySelector(".result-section");
let scoreHeading = document.querySelector(".result-section #question");
let question = document.getElementById("question");
let labelArr = document.querySelectorAll("li label");
let submitBtn = document.getElementById("submitBtn");
let optionCont = document.querySelectorAll(".options-cont li");
console.log(optionCont);
let playBtn = document.querySelector("#play-again-btn");

function changeListBackground(optionCont) {
  optionCont.forEach((li) => {
    li.style.backgroundColor = "white";
    li.firstElementChild.checked = false;
  });
}

let countScore = (quesNo, value, quizData) => {
  let correctOptionIndex = quizData[quesNo].correct;
  console.log("correctIndex = ", correctOptionIndex);
  if (value == quizData[quesNo].options[correctOptionIndex]) {
    score++;
    console.log("Score = " + score);
  } else {
    console.log(
      "option is wrong " + quizData[quesNo].options[correctOptionIndex]
    );
  }
};

optionCont.forEach((li) => {
  li.addEventListener(
    "click",
    (e) => {
      changeListBackground(optionCont);
      submitBtn.disabled = false;

      submitBtn.style.backgroundColor = "rgb(48, 150, 214)";
      e.stopPropagation();
      if (e.target.type == "radio") {
        e.target.parentElement.style.backgroundColor = "pink";
        let radio = e.target;
        radio.checked = true;
        selectedOptionValue = e.target.nextElementSibling.textContent;
        questionNum =
          e.target.parentElement.parentElement.previousElementSibling.previousElementSibling.className.split(
            "_"
          )[1];
      } else if (e.target.tagName.toLowerCase() == "li") {
        e.target.style.backgroundColor = "pink";
        let radio = e.target.querySelector('input[type="radio"]');
        if (radio) {
          radio.checked = true;
        }
        selectedOptionValue = e.target.lastElementChild.textContent;
        questionNum =
          e.target.parentElement.previousElementSibling.previousElementSibling.className.split(
            "_"
          )[1];
      } else if (e.target.tagName.toLowerCase() == "label") {
        selectedOptionValue = e.target.textContent;
        questionNum =
          e.target.parentElement.parentElement.previousElementSibling.previousElementSibling.className.split(
            "_"
          )[1];
      } else {
        alert("Please click on the correct option.");
      }
    },
    true
  );
});
playBtn.addEventListener("click", () => {
  resultSection.style.display = "none";
  quizSection.style.display = "block";
  changeListBackground(optionCont);
  curPage = 0;
  score = 0;
  loadQuestion(curPage, quizData);
});

let loadQuestion = (curPage, quizData) => {
  submitBtn.disabled = true;
  submitBtn.style.backgroundColor = "rgba(48, 150, 214, 0.5)";
  let data = quizData[curPage];
  if (data) {
    question.innerText = data.question;
    question.className = `question_${curPage}`;
    question.style.color = "red";
    labelArr.forEach((curEle, index) => {
      curEle.innerText = data.options?.[index];
    });
  } else {
    scoreHeading.innerHTML = `Your Score : ${score}/${quizData.length}`;
    quizSection.style.display = "none";
    resultSection.style.display = "block";
  }
};

loadQuestion(curPage, quizData);

submitBtn.addEventListener("click", () => {
  curPage++;
  countScore(questionNum, selectedOptionValue, quizData);
  changeListBackground(optionCont);
  loadQuestion(curPage, quizData);
});
