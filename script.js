let questions = [

    {
        "question": "Wer hat HTML erfunden?",
        "answer_1": "Robbie Williams",
        "answer_2": "Lady Gaga",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "Justin Bieber",
        "right_answer": 3
    },

    {
        "question": "Was ist das schönste Dorf?",
        "answer_1": "Langenaubach",
        "answer_2": "Sechshelden",
        "answer_3": "Breitscheid",
        "answer_4": "Rabenscheid",
        "right_answer": 1
    },

    {
        "question": "Welcher Verein hat die besten Fans?",
        "answer_1": "Eintracht Frankfurt",
        "answer_2": "Bayern München",
        "answer_3": "Borussia Dortmund",
        "answer_4": "VFL Fellerdilln",
        "right_answer": 3
    },

    {
        "question": "Welcher Verein hat die schlechtesten Fans?",
        "answer_1": "Eintracht Frankfurt",
        "answer_2": "Bayern München",
        "answer_3": "Borussia Dortmund",
        "answer_4": "VFL Fellerdilln",
        "right_answer": 4
    },

    {
        "question": "Welcher Verein hat spielt nicht in der zweiten DFB Pokalrunde?",
        "answer_1": "Eintracht Frankfurt",
        "answer_2": "Bayern München",
        "answer_3": "Borussia Dortmund",
        "answer_4": "FC Köln",
        "right_answer": 1
    },


];

let currentQuestion = 0;

function init() {
    document.getElementById('amount-questions').innerHTML = questions.length;

    showQuestion();
}


function showQuestion() {
    let question = questions[currentQuestion];

    document.getElementById('questiontext').innerHTML = question['question'];

    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];


}

function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);

    if(selectedQuestionNumber == question['right_answer']) {
        document.getElementById(selection).parentNode.classList.add('bg-success');
    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');

    }
}