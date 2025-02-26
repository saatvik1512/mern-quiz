import React from 'react';

function Result({ score, totalQuestions, restartQuiz, questions, userAnswers }) {
  const percentage = Math.round((score / totalQuestions) * 100);
  
  let message = '';
  if (percentage >= 90) {
    message = "Excellent! You're a genius!";
  } else if (percentage >= 70) {
    message = 'Great job! You know your stuff!';
  } else if (percentage >= 50) {
    message = 'Good effort! Room for improvement.';
  } else {
    message = "Keep practicing, you'll get better!";
  }

  return (
    <div className="result-container">
      <h2 style={{color:'black'}}>Quiz Completed!</h2>
      <div className="score-display">
        <div className="score-circle">
          <div className="score-number">{score}</div>
          <div className="score-text">out of {totalQuestions}</div>
        </div>
      </div>
      <p className="percentage">{percentage}%</p>
      <p className="message">{message}</p>
      
      <div className="answers-review">
        <h3 style={{color:'black'}}>Review Your Answers</h3>
        {questions.map((question, index) => (
          <div style={{color:'black'}} key={index} className={`answer-item ${userAnswers[index] === question.correctAnswer ? 'correct' : 'incorrect'}`}>
            <p style={{color:'black'}}><strong>Q{index + 1}:</strong> {question.text}</p>
            <p style={{color:'black'}}>Your answer: {userAnswers[index]}</p>
            <p style={{color:'black'}}>Correct answer: {question.correctAnswer}</p>
          </div>
        ))}
      </div>
      
      <button onClick={restartQuiz} className="restart-button">Take Quiz Again</button>
    </div>
  );
}

export default Result;