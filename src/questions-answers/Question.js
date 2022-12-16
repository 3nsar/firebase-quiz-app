import React from 'react'



const Question = ({handleAnswer, showAnswer, data: {question, correctAnswer, incorrectAnswers}}) => {

  const swappedAnswers = [correctAnswer, ...incorrectAnswers].sort(() => Math.random() -0.5);


  return (
    <div className='question-container'>
        <div className='question-content'>
          <h2>{question}</h2>
          {swappedAnswers.map((answer) => (
            
          <h3 onClick={() => handleAnswer(answer)}>{answer}</h3>

          ))}
          <button>Next Question</button>
          <h4>You score 1 / 5</h4>
        </div>
    </div>
  )
}

export default Question