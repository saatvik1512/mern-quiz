import React from 'react';

function Question({ question, questionNumber, totalQuestions, onAnswerSelected }) {
  return (
    <div className="question-container">
      <div className="progress">
        Question {questionNumber} of {totalQuestions}
      </div>
      <h2 style={{color:'black'}}>{question.text}</h2>
      <div className="options">
        {question.options.map((option, index) => (
          <button style={{color:'black'}}
            key={index} 
            onClick={() => onAnswerSelected(option)}
            className="option-button"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Question;