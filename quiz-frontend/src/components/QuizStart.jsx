import React from 'react';

function QuizStart({ startQuiz }) {
  return (
    <div className="quiz-start" style={{color:'black'}}>
      <h2 >Welcome to the Quiz!</h2>
      <p>Test your knowledge with 10 interesting questions.</p>
      <p>Ready to begin?</p>
      <button onClick={startQuiz} className="start-button">Start Quiz</button>
    </div>
  );
}

export default QuizStart;