import React from 'react'



const Question = ({handleAnswer, data: {question, correctAnswer, incorrectAnswers}}) => {

  const Button = ({answer}) => {
        return <h3>{answer}</h3>
  }  

  const swappedAnswers = [correctAnswer, ...incorrectAnswers];

  return (
    <div className='question-container'>
        <div className='question-content'>
          <h2>{question}</h2>
          <Button onClick= {() => handleAnswer(swappedAnswers[0])} answer={swappedAnswers[0]} />
          <Button onClick= {() => handleAnswer(swappedAnswers[0])} answer={swappedAnswers[1]} />
          <Button onClick= {() => handleAnswer(swappedAnswers[0])} answer={swappedAnswers[2]} />
          <Button onClick= {() => handleAnswer(swappedAnswers[0])} answer={swappedAnswers[3]} />
          <h4>You score 1 / 5</h4>
        </div>
    </div>
  )
}

export default Question