import React, { useState, useEffect, useRef } from 'react'
import { FcAlarmClock } from 'react-icons/fc'
import {auth, db} from "../config/firebase"
import { useAuthState } from 'react-firebase-hooks/auth'


const Question = ({handleAnswer,handleNextQuestion,showAnswer,currentQuestion,data: {question, correctAnswer, answers}}) => {
  const [timer, setTimer] = useState(60); // 25 minutes
  const [start, setStart] = useState(true);
  const [user] = useAuthState(auth)
  const firstStart = useRef(true);
  const tick = useRef();

  useEffect(() => {
    if (firstStart.current) {
      firstStart.current = !firstStart.current;
      return;
    }
    if (start) {
         
      tick.current = setInterval(() => {
        setTimer((timer) => timer - 1);
      }, 1000);
    } else {
      
      clearInterval(tick.current);
    }

    return () => clearInterval(tick.current);
  }, [start]);

  const toggleStart = () => {
    setStart(!start);
  };

  const dispSecondsAsMins = (seconds) => {
    
    const mins = Math.floor(seconds / 60);
    const seconds_ = seconds % 60;
    return mins.toString() + ":" + (seconds_ == 0 ? "00" : seconds_.toString());
  };
 
  return timer > 0 ?(
    <div className='question-container'>
  {user && (
      <>
        <div className='question-content'>
        <h2><FcAlarmClock />{dispSecondsAsMins(timer)}</h2>
          <h2>{question}</h2>
          {answers.map((answer) => {
            const bgColor = showAnswer ? answer === correctAnswer ? 'correct-bg' : 'incorrect-bg' : 'white-bg'
          return(
          <h3 className={`${bgColor}`} onClick={() =>{toggleStart(tick)
           handleAnswer(answer)} }>{answer}</h3> )})}

          {showAnswer &&(
            <div>
             <button className='next-btn' onClick={()=>{toggleStart(tick)
              handleNextQuestion(currentQuestion)}}>Next Question</button>
             </div>
             
          )}
        </div>
        </>)}
    </div>
  ):(
    <div className='end'>
      <h1>You didn't make it to the end! Try again!</h1>
      <li><a href="/game">Play again</a></li>
      <li><a href="/main">Return</a></li>
    </div>
  )
}

export default Question 