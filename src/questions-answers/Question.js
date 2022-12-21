import React from 'react'



const Question = ({handleAnswer, handleNextQuestion,showAnswer, data: {question, correctAnswer, incorrectAnswers}}) => {

  const swappedAnswers = [correctAnswer, ...incorrectAnswers].sort(() => Math.random() -0.5);

  return (
    <div className='question-container'>
        <div className='question-content'>
          <h4>Time left: 00:00</h4>
          <h2>{question}</h2>
          {swappedAnswers.map((answer) => {
            const bgColor = showAnswer ? answer === correctAnswer ? 'correct-bg' : 'incorrect-bg' : 'white-bg'
          return(
          <h3 className={`${bgColor}`} onClick={() => handleAnswer(answer)}>{answer}</h3>

          )})}

          {showAnswer && (
             <button className='next-btn' onClick={handleNextQuestion}>Next Question</button>
          )}
        </div>
    </div>
  )
}

export default Question