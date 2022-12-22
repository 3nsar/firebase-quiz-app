import React, { useState } from 'react'
import { FcAlarmClock } from 'react-icons/fc'



const Question = ({handleAnswer, handleNextQuestion,showAnswer, data: {question, correctAnswer, answers}}) => {
  const [counter, setCounter] = useState(10)

  React.useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);


  return (
    <div className='question-container'>
      <h2><FcAlarmClock />{counter}</h2>
        <div className='question-content'>
          <h2>{question}</h2>
          {answers.map((answer) => {
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