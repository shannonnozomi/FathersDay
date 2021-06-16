function buildQuiz(){
    const output =[];
    myQuestions.forEach(
        (currentQuestion,questionNumber) =>{
            const answers =[];
            for(letter in currentQuestion.answers){
                answers.push(
                   `<label>
                        <input type="radio" name="question${questionNumber}" value="${letter}">
                            ${letter} :
                            ${currentQuestion.answers[letter]}
                    </label>`
                );
            }
            output.push(
                `<div class="slide">
                <div class="questions"> ${currentQuestion.question}</div>
                <div class="answers"> ${answers.join('')}</div>
                </div>`
            );
        }
    );
    quizContainer.innerHTML = output.join('');
};

function showResults(){
    const answerContainers = quizContainer.querySelectorAll('.answers');
    let numCorrect = 0;
    myQuestions.forEach((currentQuestion, questionNumber)=>{
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        if(userAnswer === currentQuestion.correctAnswer){
            numCorrect++;
            answerContainers[questionNumber].style.color='lightgreen';
        }
        else {
            answerContainers[questionNumber].style.color='red';
        }
    });
resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
};


function showSlide(n) {
    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    currentSlide = n;
    if(currentSlide === 0){
      previousButton.style.display = 'none';
    }
    else{
      previousButton.style.display = 'inline-block';
    }
    if(currentSlide === slides.length-1){
      nextButton.style.display = 'none';
      submitButton.style.display = 'inline-block';
    }
    else{
      nextButton.style.display = 'inline-block';
      submitButton.style.display = 'none';
    }
  }
  function showNextSlide() {
    showSlide(currentSlide + 1);
  }
  
  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }


const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');


const myQuestions = [
    {
        question:"How old is Dada?",
        answers: {
            a: "32.",
            b: "100.",
            c:"10."
        },
        correctAnswer: "c"
    },
    {
        question:"How tall is Dada?",
        answers: {
            a: "10 feet.",
            b: "4 feet.",
            c:"8 feet."
        },
        correctAnswer: "a"
    },
    {
        question:"What is Dada good at?",
        answers: {
            a: "Building Airplanes and こまかいこと(nimble).",
            b: "Cooking and えいご(English).",
            c:"Games and はしるの (running)."
        },
        correctAnswer: "a"
    },
    {
        question:"Dada loves it when I?",
        answers: {
            a: "Sleep.",
            b: "Play.",
            c:"Hug."
        },
        correctAnswer: "c"
    },
    {
        question:"My favorite thing my Dad does is?",
        answers: {
            a: "Make Pizza.",
            b: "Super Hero ごっこ。",
            c:"Play outside."
        },
        correctAnswer: "b"
    },
    {
        question:"What does Dada like to eat?",
        answers: {
            a: "Hamburger.",
            b: "Ramen.",
            c:"Curry."
        },
        correctAnswer: "c"
    },
    {
        question:"What is Dadas favorite TV show?",
        answers: {
            a: "Spongebob.",
            b: "Pokemon.",
            c:"Paw Patrol."
        },
        correctAnswer: "a"
    },
    {
        question:"I love my Dad because...",
        answers: {
            a: "かっこいいから。",
            b: "たのしいから。",
            c:"げんきだから。"
        },
        correctAnswer: "a"
    }
];

buildQuiz();

const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;


showSlide(currentSlide);



submitButton.addEventListener('click', showResults);

previousButton.addEventListener("click", showPreviousSlide);
nextButton.addEventListener("click", showNextSlide);
