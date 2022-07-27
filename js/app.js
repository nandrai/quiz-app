const quizData = [
  {
    question: "Which of the following is a client site language?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
  {
    question: "What does CSS stands for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "b",
  },
];

const question = document.querySelector(".question");
const options = document.querySelectorAll(".option");
const submit = document.querySelector("#submit");
const restart = document.querySelector("#restart");
const box = document.querySelector(".box");
const result = document.querySelector("#result");

let index = 0;
let right = 0;
let wrong = 0;

const loadQuestion = () => {
  question.innerText = `${index + 1}) ${quizData[index].question}`;
  options[0].nextElementSibling.innerText = quizData[index].a;
  options[1].nextElementSibling.innerText = quizData[index].b;
  options[2].nextElementSibling.innerText = quizData[index].c;
  options[3].nextElementSibling.innerText = quizData[index].d;
  for (i of options) {
    i.checked = false;
  }
};

loadQuestion();

submit.addEventListener("click", () => {
  for (i of options) {
    if (i.checked == true) {
      if (i.value == quizData[index].correct) {
        right++;
      } else {
        wrong++;
      }
    } else {
      continue;
    }
  }

  if (index === quizData.length - 1) {
    box.style.display = "none";
    result.style.display = "block";
    restart.style.display = "block";
    result.innerText = `You answered ${right + wrong} of ${
      quizData.length
    } questions out of which ${right} were correct.`;
    restart.addEventListener("click", () => {
      box.style.display = "flex";
      result.style.display = "none";
      restart.style.display = "none";
      index = 0;
      loadQuestion();
    });
  } else {
    index++;
    loadQuestion();
  }
});
