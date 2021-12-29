// create variables to access page elements
var playerScore = 0;
// create timer elements
var timerEl = document.getElementById('timer');
var timeRemaining = 60;

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
// set total score
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
        correctAnswer: "1993"
    },
    {
        question: "Which tag is used to create a button?",
        answers: {
            a: "<type = 'checkbox'>",
            b: "<button>",
            c: "<input type = 'button'>",
            d: "none of the above"
        },
        correctAnswer: "<button>"
    },
    {
        question: "Which tag is used to link javascript code?",
        answers: {
            a: "<javascript>",
            b: "<js>",
            c: "<javascr>",
            d: "<script>"
        },
        correctAnswer: "<script>"
    },
    {
        question: "What does CSS stand for?",
        answers: {
            a: "Center Style Sheets",
            b: "Cascading Style Sheets",
            c: "Cascading Style Set",
            d: "Cascading Sheet Styling"
        },
        correctAnswer: "Cascading Style Sheets"
    },
    {
        question: "Which of the following ways would you comment code in JavaScript?",
        answers: {
            a: "<!-- -->",
            b: "/* */",
            c: "//",
            d: "all of the above"
        },
        correctAnswer: "//"
    }

];
// run start quiz function on start button click
startQuizBtn.onclick = function () {
    startQuiz();
    setTimer();
};

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
        reduceTime();
        q2();
    };

    btn2.onclick = function () {
        window.alert("Incorrect!");
        reduceTime();
        q2();
    };

    btn3.onclick = function () {
        window.alert("Correct!");
        playerScore += 20;
        q2();
    };

    btn4.onclick = function () {
        window.alert("Incorrect!");
        reduceTime();
        q2();
    };
};

var q2 = function () {

    // hide start quiz button
    startQuizBtn.style.display = "none";

    questionText.innerHTML = questions[1].question;

    btn1.textContent = "a: " + questions[1].answers.a;
    answerText.appendChild(btn1);

    btn2.textContent = "b: " + questions[1].answers.b;
    answerText.appendChild(btn2);

    btn3.textContent = "c: " + questions[1].answers.c;
    answerText.appendChild(btn3);

    btn4.textContent = "d: " + questions[1].answers.d;
    answerText.appendChild(btn4);

    btn1.onclick = function () {
        window.alert("Incorrect!");
        reduceTime();
        q3();
    };

    btn2.onclick = function () {
        window.alert("Correct!");
        playerScore += 20;
        q3();
    };

    btn3.onclick = function () {
        window.alert("Incorrect!");
        reduceTime();
        q3();
    };

    btn4.onclick = function () {
        window.alert("Incorrect!");
        reduceTime();
        q3();
    };
}

var q3 = function () {
    startQuizBtn.style.display = "none";

    questionText.innerHTML = questions[2].question;

    btn1.textContent = "a: " + questions[2].answers.a;
    answerText.appendChild(btn1);

    btn2.textContent = "b: " + questions[2].answers.b;
    answerText.appendChild(btn2);

    btn3.textContent = "c: " + questions[2].answers.c;
    answerText.appendChild(btn3);

    btn4.textContent = "d: " + questions[2].answers.d;
    answerText.appendChild(btn4);

    btn1.onclick = function () {
        window.alert("Incorrect!");
        reduceTime();
        q4();
    };

    btn2.onclick = function () {
        window.alert("Incorrect!");
        reduceTime();
        q4();
    };

    btn3.onclick = function () {
        window.alert("Incorrect!");
        reduceTime();
        q4();
    };

    btn4.onclick = function () {
        window.alert("Correct!");
        playerScore += 20;
        q4();
    };
}

var q4 = function () {
    startQuizBtn.style.display = "none";

    questionText.innerHTML = questions[3].question;

    btn1.textContent = "a: " + questions[3].answers.a;
    answerText.appendChild(btn1);

    btn2.textContent = "b: " + questions[3].answers.b;
    answerText.appendChild(btn2);

    btn3.textContent = "c: " + questions[3].answers.c;
    answerText.appendChild(btn3);

    btn4.textContent = "d: " + questions[3].answers.d;
    answerText.appendChild(btn4);

    btn1.onclick = function () {
        window.alert("Incorrect!");
        reduceTime();
        q5();
    };

    btn2.onclick = function () {
        window.alert("Correct!");
        playerScore += 20;
        q5();
    };

    btn3.onclick = function () {
        window.alert("Incorrect!");
        reduceTime();
        q5();
    };

    btn4.onclick = function () {
        window.alert("Incorrect!");
        reduceTime();
        q5();
    };
}

var q5 = function () {
    startQuizBtn.style.display = "none";

    questionText.innerHTML = questions[4].question;

    btn1.textContent = "a: " + questions[4].answers.a;
    answerText.appendChild(btn1);

    btn2.textContent = "b: " + questions[4].answers.b;
    answerText.appendChild(btn2);

    btn3.textContent = "c: " + questions[4].answers.c;
    answerText.appendChild(btn3);

    btn4.textContent = "d: " + questions[4].answers.d;
    answerText.appendChild(btn4);

    btn1.onclick = function () {
        window.alert("Incorrect!");
        reduceTime();
        quizEnd();
    };

    btn2.onclick = function () {
        window.alert("Incorrect!");
        reduceTime();
        quizEnd();
    };

    btn3.onclick = function () {
        window.alert("Correct!");
        playerScore += 20;
        quizEnd();
    };

    btn4.onclick = function () {
        window.alert("Incorrect!");
        reduceTime();
        quizEnd();
    };
}


var quizEnd = function () {

    timerEl.textContent = 0;
    // create input field for user initials
    var playerInitial = document.createElement("input");
    playerInitial.setAttribute("type", "text");
    playerInitial.id = "initials";
    // create button to submit score
    var scoreBtn = document.createElement("button");
    scoreBtn.textContent = "Submit";
    scoreBtn.className = "answer-btn";

    questionText.innerHTML = "Finished!" + "<br>" + "Your Score: " + playerScore + "%";

    answerText.innerHTML = "Please enter your initials: ";
    //answerText.appendChild(scoreDiv);
    answerText.appendChild(playerInitial);
    answerText.appendChild(scoreBtn);

    scoreBtn.onclick = function () {
        saveHighScore(playerInitial.value, playerScore);
        showScores();
    };

}


var setTimer = function () {
    time = setInterval(function () {
        if (timeRemaining > 1) {
            timerEl.textContent = "Time: " + timeRemaining;
            timeRemaining--;
        }
        else {
            timerEl.textContent = 0;
            quizEnd();
        }
    }, 1000);

};

var reduceTime = function () {

    if (timeRemaining >= 10) {
        timeRemaining -= 10;
    }
};

var saveHighScore = function (playerInitial, playerScore) {

    var playerInfo = JSON.parse(localStorage.getItem("highScores")) || [];
    var initials = playerInitial;
    playerInfo.push(initials, playerScore);
    console.log(playerInfo);
}

var showScores = function () {
    questionText.innerHTML = "High Scores";
    answerText.innerHTML = "";
    var scoreArea = document.createElement("textarea");
    scoreArea.setAttribute("style", "display:block;");
    answerText.appendChild(scoreArea);

    var retakeBtn = document.createElement("button");
    retakeBtn.textContent = "Retake Quiz";
    retakeBtn.className = "answer-btn";
    retakeBtn.setAttribute("style", "display:inline;");

    answerText.appendChild(retakeBtn);

    var clearScoresBtn = document.createElement("button");
    clearScoresBtn.textContent = "Clear High Scores";
    clearScoresBtn.className = "answer-btn";
    clearScoresBtn.setAttribute("style", "display:inline;");
    answerText.appendChild(clearScoresBtn);

    retakeBtn.onclick = function () {
        questionText.innerHTML = "";
        answerText.innerHTML = "";
        startQuiz();
    }
}



