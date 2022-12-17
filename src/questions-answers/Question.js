import React from 'react'



const Question = ({handleAnswer, showAnswer,handleNextQuestion, data: {question, correctAnswer, incorrectAnswers}}) => {

  const swappedAnswers = [correctAnswer, ...incorrectAnswers].sort(() => Math.random() -0.5);

  return (
    <div className='question-container'>
        <div className='question-content'>
          <h2>{question}</h2>
          {swappedAnswers.map((answer) => (

          <h3 onClick={() => handleAnswer(answer)}>{answer}</h3>

          ))}

          {showAnswer && (
             <button className='next-btn' onClick={handleNextQuestion}>Next Question</button>
          )}
        </div>
    </div>
  )
}

export default Question