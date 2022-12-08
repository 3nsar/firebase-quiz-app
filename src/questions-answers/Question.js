import React from 'react'



const Question = ({data: {question, correctAnswer, incorrectAnswers}}) => {

  const Button = ({answer}) => {
        return <h3>{answer}</h3>
  }  

  return (
    <div className='question-container'>
        <div className='question-content'>
          <h2>{question}</h2>
          <Button  answer={correctAnswer}/>
          <Button answer={incorrectAnswers[0]}/>
          <Button answer={incorrectAnswers[1]}/>
          <Button answer={incorrectAnswers[2]}/>
          <h4>You score 1 / 5</h4>
        </div>
    </div>
  )
}

export default Question