// Create variables to access page elements

var startQuizBtn = document.getElementById("start-quiz");
var questionText = document.getElementById("question-area");
var answerText = document.getElementById("answer-area");

// create button elements
var btn1 = document.createElement("button");
var btn2 = document.createElement("button");
var btn3 = document.createElement("button");
var btn4 = document.createElement("button");
// add button styling
btn1.className = "answer-btn";
btn2.className = "answer-btn";
btn3.className = "answer-btn";
btn4.className = "answer-btn";

var totalScore = 0;

// Create array to hold quiz questions
var questions = [
    {
        question: "When was HTML first introduced?",
        answers: {
            a: "1968",
            b: "1990",
            c: "1993",
            d: "1998"
        },
        correctAnswer: "c"
    },
    {
        question: "Which tag is used to create a button?",
        answers: {
            a: "<type = 'checkbox'>",
            b: "<button>",
            c: "<input type = 'button'>",
            d: "none of the above"
        },
        correctAnswer: "b"
    },
    {
        question: "Which tag is used to link javascript code?",
        answers: {
            a: "<javascript>",
            b: "<js>",
            c: "<javascr>",
            d: "<script>"
        },
        correctAnswer: "d"
    }

];

startQuizBtn.onclick = function () {

    startQuiz();

};

// var startQuiz = function () {

//     startQuizBtn.classList.add("hide");
// };

var startQuiz = function () {

    // hide start quiz button
    startQuizBtn.style.display = "none";

    questionText.innerHTML = questions[0].question;

    btn1.textContent = "a:" + questions[0].answers.a;
    answerText.appendChild(btn1);

    btn2.textContent = "b:" + questions[0].answers.b;
    answerText.appendChild(btn2);

    btn3.textContent = "c:" + questions[0].answers.c;
    answerText.appendChild(btn3);

    btn4.textContent = "d:" + questions[0].answers.d;
    answerText.appendChild(btn4);

    btn1.onclick = function () {
        window.alert("Incorrect!");
        resetQuestion();
    };

};

var resetQuestion = function () {

    //console.log("yayyyy");
    questionText.innerHTML = "";
    answerText.innerHTML = "";


    for (i = 1; i < questions.length; i++) {

        questionText.innerHTML = questions[i].question;

        btn1.textContent = "a:" + questions[i].answers.a;
        answerText.appendChild(btn1);

        btn2.textContent = "b:" + questions[i].answers.b;
        answerText.appendChild(btn2);

        btn3.textContent = "c:" + questions[i].answers.c;
        answerText.appendChild(btn3);

        btn4.textContent = "d:" + questions[i].answers.d;
        answerText.appendChild(btn4);

    }

    btn1.onclick = function () {
        window.alert("Incorrect!");
        resetQuestion();
    };

    //resetQuestion();
};

var setTimer = function () {

};




