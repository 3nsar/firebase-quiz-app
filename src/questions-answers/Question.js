import React from 'react'

const Question = ({questions}) => {
  return (
    <div className='question-container'>
        <div className='question-content'>
          <h2>{questions[0].question}</h2>
          <h3>{questions[0].correctAnswer}</h3>
          <h3>{questions[0].incorrectAnswers[0]}</h3>
          <h3 >{questions[0].incorrectAnswers[1]}</h3>
          <h3>{questions[0].incorrectAnswers[2]}</h3>
          <h4>You score 1 / 5</h4>
        </div>
    </div>
  )
}

export default Question