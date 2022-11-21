import React, { useState } from 'react'
import QuestionStyle from "./QuestionStyle.css"


const Question = ({question}) => {
  
  return (
    <div className='question-container'>
      {question.map((item)=>(
        <div className='question-content' key={item.id}>
          <h3>{item.question}</h3>
          <h3>{item.correctAnswer}</h3>
          <h3>{item.incorrectAnswers}</h3>
        </div>
    ))}
    </div>
  )
}

export default Question