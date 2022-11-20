import React from 'react'


const Question = ({question}) => {

  return (
    <div>{question.map((item)=>(
        <div key={item.id}>
          <h1>{item.question}</h1>
          <h3>{item.correctAnswer}</h3>
          <h3>{item.incorrectAnswers}</h3>
        </div>
    ))}</div>
  )
}

export default Question