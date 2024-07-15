
const quizData = [
    {
      question: 'Feeling nervous, anxious, or on edge',
      options: ['Not at all', 'Several days', 'More than half the days', 'Nearly every day'],
    },
    {
      question: 'Not being able to stop or control worrying',
      options: ['Not at all', 'Several days', 'More than half the days', 'Nearly every day'],
    },
    {
      question: 'Worrying too much about different things',
      options: ['Not at all', 'Several days', 'More than half the days', 'Nearly every day'],
    },
    {
      question: 'Trouble relaxing',
      options: ['Not at all', 'Several days', 'More than half the days', 'Nearly every day'],
    },
    {
      question: 'Being so restless that it is hard to sit still',
      options: ['Not at all', 'Several days', 'More than half the days', 'Nearly every day'],
    },
    {
      question: 'Becoming easily annoyed or irritable',
      options: ['Not at all', 'Several days', 'More than half the days', 'Nearly every day'],
    },
    {
      question: 'Feeling afraid, as if something awful might happen',
      options: ['Not at all', 'Several days', 'More than half the days', 'Nearly every day'],
    },
  ];
  
  const quizContainer = document.getElementById('quiz');
  const resultContainer = document.getElementById('result');
  const submitButton = document.getElementById('submit');
  const retryButton = document.getElementById('retry');
  const showAnswerButton = document.getElementById('showAnswer');


  const options = ['Not at all', 'Several days', 'More than half the days', 'Nearly every day'];
  
  let currentQuestion = 0;
  let score = 0;
//   let incorrectAnswers = [];
  
//   function shuffleArray(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       [array[i], array[j]] = [array[j], array[i]];
//     }
//   }
  
  function displayQuestion() {
    const questionData = quizData[currentQuestion]; //quizData[0]; displays question
  
    const questionElement = document.createElement('div'); //Creates divider for the question
    questionElement.className = 'question'; // creates class name
    questionElement.innerHTML = questionData.question;
  
    const optionsElement = document.createElement('div');//Creates divider to choose an answer
    optionsElement.className = 'options';
  
    // const options = [...questionData.options];
    // shuffleArray(shuffledOptions);
  
    for (let i = 0; i < options.length; i++) {
      const option = document.createElement('label');
      option.className = 'option';
  
      const radio = document.createElement('input');
      radio.type = 'radio';
      radio.name = 'quiz';
      radio.value = options[i];
  
      const optionText = document.createTextNode(options[i]);
  
      option.appendChild(radio);
      option.appendChild(optionText);
      optionsElement.appendChild(option);
    }
  
    quizContainer.innerHTML = '';
    quizContainer.appendChild(questionElement);
    quizContainer.appendChild(optionsElement);
  }


  
  function checkAnswer() {
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    if (selectedOption) {
      const answer = selectedOption.value;
      if (answer === quizData[currentQuestion].answer) {
        score++;
      } else {
        incorrectAnswers.push({
          question: quizData[currentQuestion].question,
          incorrectAnswer: answer,
          correctAnswer: quizData[currentQuestion].answer,
        });
      }
      currentQuestion++;
      selectedOption.checked = false;
      if (currentQuestion < quizData.length) {
        displayQuestion();
      } else {
        displayResult();
      }
    }
  }
  
  function displayResult() {
    quizContainer.style.display = 'none';
    submitButton.style.display = 'none';
    retryButton.style.display = 'inline-block';
    showAnswerButton.style.display = 'inline-block';
    resultContainer.innerHTML = `You scored ${score} out of ${quizData.length}!`;
  }
  
  function retryQuiz() {
    currentQuestion = 0;
    score = 0;
    incorrectAnswers = [];
    quizContainer.style.display = 'block';
    submitButton.style.display = 'inline-block';
    retryButton.style.display = 'none';
    showAnswerButton.style.display = 'none';
    resultContainer.innerHTML = '';
    displayQuestion();
  }
  
//   function showAnswer() {
//     quizContainer.style.display = 'none';
//     submitButton.style.display = 'none';
//     retryButton.style.display = 'inline-block';
//     showAnswerButton.style.display = 'none';
  
//     let incorrectAnswersHtml = '';
//     for (let i = 0; i < incorrectAnswers.length; i++) {
//       incorrectAnswersHtml += `
//         <p>
//           <strong>Question:</strong> ${incorrectAnswers[i].question}<br>
//           <strong>Your Answer:</strong> ${incorrectAnswers[i].incorrectAnswer}<br>
//           <strong>Correct Answer:</strong> ${incorrectAnswers[i].correctAnswer}
//         </p>
//       `;
//     }
  
//     resultContainer.innerHTML = `
//       <p>You scored ${score} out of ${quizData.length}!</p>
//     `;
//   }
  
  submitButton.addEventListener('click', checkAnswer);
  retryButton.addEventListener('click', retryQuiz);
  showAnswerButton.addEventListener('click', showAnswer);
  
  displayQuestion();
