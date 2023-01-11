import React, { useState, useEffect, useRef } from 'react'
import { FcAlarmClock } from 'react-icons/fc'
import {auth, db} from "../config/firebase"
import { useAuthState } from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router'


const Question = ({handleAnswer,handleNextQuestion,showAnswer,currentQuestion,data: {question, correctAnswer, answers}}) => {
  const [timer, setTimer] = useState(60); // 25 minutes
  const [start, setStart] = useState(true);
  const [user] = useAuthState(auth)

  const navigate = useNavigate()
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
        <h2 className='clock'><>&#x1F559;</>{dispSecondsAsMins(timer)}</h2>
          <p className='show-question'>{question}</p>
          {answers.map((answer) => {
            const bgColor = showAnswer ? answer === correctAnswer ? 'correct-bg' : 'incorrect-bg' : 'white-bg'
          return(
          <h4 className={`${bgColor}`} onClick={() =>{toggleStart(tick)
           handleAnswer(answer)} }>{answer}</h4> )})}

          {showAnswer &&(
            <div>
             <button className='next-btn' onClick={()=>{toggleStart(tick)
              handleNextQuestion(currentQuestion)}}>NEXT</button>
             </div>
             
          )}
        </div>
        </>)}
    </div>
  ):(
    <div className='end'>
      <h1>You didn't make it to the end! Try again!</h1>
      <button className='start-btn' onClick={()=>{
        window.location.reload(false)}}>PLAY AGAIN</button>

      <button className='start-btn' onClick={()=>{
        navigate("/main")}}>RETURN</button>
    </div>
  )
}

export default Question 