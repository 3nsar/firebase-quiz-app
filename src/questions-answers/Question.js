import React, { useState } from 'react'
import QuestionStyle from "./QuestionStyle.css"


const Question = ({question}) => {

  const [position, setPosition] = useState(0)
  const [score, setScore] = useState(0)
  const [isCorrect, setIsCorrect] = useState(false)
  const [isFalse, setIsFalse] = useState(false)

  const handleScore = () =>{
    setIsCorrect(prev => !prev)
    setScore(prev => prev +1)
    setIsFalse(prev => !prev)
  }
  
  return (
    <div className='question-container'>
      {question.map((item)=>(
        <div className='question-content' key={item.id}>
          <h2>{item.question}</h2>
          <h3 onClick={handleScore} style={{backgroundColor: isCorrect ? "green" : ""}}>{item.correctAnswer}</h3>
          <h3 onClick={handleScore} style={{backgroundColor: isFalse ? "red" : ""}}>{item.incorrectAnswers[position]}</h3>
          <h3 onClick={handleScore} style={{backgroundColor: isFalse ? "red" : ""}}>{item.incorrectAnswers[position + 1]}</h3>
          <h3 onClick={handleScore} style={{backgroundColor: isFalse ? "red" : ""}}>{item.incorrectAnswers[position + 2]}</h3>
          <h4>You score {score} / 5</h4>

        </div>
    ))}
    </div>
  )
}

export default Question