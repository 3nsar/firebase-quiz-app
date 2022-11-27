import React from 'react'



const Question = ({questions}) => {

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
          <Button answer = {questions[0].correctAnswer} />
          <Button answer = {questions[0].incorrectAnswers[0]} />
          <Button answer = {questions[0].incorrectAnswers[1]} />
          <Button answer = {questions[0].incorrectAnswers[2]} />
          <h4>You score 1 / 5</h4>
        </div>
    </div>
  )
}

export default Question