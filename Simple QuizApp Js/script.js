const quizDB = [
    {
        question: "Q1: What is HTML?",
        a:"HELLO TO MY LAND",
        b:"HYPER TASK MARK LANGUAGE",
        c:"HYPERTEXT MAKEUP LANGUAGE",
        d:"HYPERTEXT MARKUP LANGUAGE",
        ans:"ans4"
    },
    {
        question: "Q2: What is CSS?",
        a:"CASCADING STYLE SHEETS",
        b:"CASCADING STYLE SHEEP",
        c:"CARTOON STYLE SHEETS",
        d:"CASCADING SUPER SHEETS",
        ans:"ans1"
    },
    {
        question: "Q3: What is CSS?",
        a:"CASCADING STYLE SHEETS",
        b:"CASCADING STYLE SHEEP",
        c:"CARTOON STYLE SHEETS",
        d:"CASCADING SUPER SHEETS",
        ans:"ans1"
    },
    {
        question: "Q4: What is HTTP?",
        a:"HYPERTEXT TRANSFER PRODUCT",
        b:"HYPERTEXT TEST PROTOCOL",
        c:"HIPERTEXT TRANSFER PROTOCOL",
        d:"HYPERTEXT TRANSFER PROTOCOL",
        ans:"ans4"
    },
    {
        question: "Q5: What is JS?",
        a:"JAVASCRIPT",
        b:"JAVASUPER",
        c:"JUSTSCRIPT",
        d:"JAVASHARP",
        ans:"ans1"
    } 
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const select = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');

const showScore = document.querySelector('#showScore');

let questCount = 0;
let score= 0;

const loadQuestion = () => {

    const questionList = quizDB[questCount];

   question.innerHTML = questionList.question;

    option1.innerHTML = questionList.a;
    option2.innerHTML = questionList.b;
    option3.innerHTML = questionList.c;
    option4.innerHTML = questionList.d;
}

loadQuestion();

const getCheckAnswer = () => {
    let answer;

        answers.forEach((curAnsElem) => {
            if(curAnsElem.checked){
            answer = curAnsElem.id;
            }
        });

        return answer;

};

const deselectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false );
}
 


submit.addEventListener('click',() => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer == quizDB[questCount].ans){
        score++;
    };

    questCount++;

    deselectAll();

    if(questCount  < quizDB.length){
        loadQuestion();
    }else{

        showScore.innerHTML = `
            <h3> You scored ${score}/${quizDB.length} 
            <button class ="btn" onclick="location.reload()"> Play Again  </button>
        `;

        showScore.classList.remove('scoreArea');
    }
        

});