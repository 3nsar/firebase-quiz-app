import React from 'react'



const Question = ({questions, handleAnswer}) => {

  const Button = ({answer}) => {
        return <h3>{answer}</h3>
  }  

  const sortAnswers = [questions[0].correctAnswer, ...questions[0].incorrectAnswers].sort(() => Math.random() - 0.5)

  const random = (arr)=>{
    for(let i = 0;i<100;i++){
        const a = Math.floor(Math.random() * arr.length);
        const b = Math.floor(Math.random() * arr.length);
    }
  }


    
  return (
    <div className='question-container'>
        <div className='question-content'>
          <h2>{questions[0].question}</h2>
          <Button onClick= {() => handleAnswer(true)} answer = {sortAnswers[0]} />
          <Button onClick= {() => handleAnswer(false)} answer = {sortAnswers[1]} />
          <Button onClick= {() => handleAnswer(false)} answer = {sortAnswers[2]} />
          <Button onClick= {() => handleAnswer(false)} answer = {sortAnswers[3]} />
          <h4>You score 1 / 5</h4>
        </div>
    </div>
  )
}

export default Question