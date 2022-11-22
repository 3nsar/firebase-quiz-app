import { style } from '@mui/system'
import React, { useState, useEffect } from 'react'
import QuestionStyle from "./QuestionStyle.css"
import axios from 'axios'


const Question = () => {
  const [score, setScore] = useState(0)
  const [isCorrect, setIsCorrect] = useState(false)
  const [isFalse, setIsFalse] = useState(false)
  
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false)
  const [nextQuestion, setNextQuestion] = useState(1)


//url bei questionm

  const url = `https://opentdb.com/api.php?amount=5&difficulty=medium&type=multiple`



  useEffect(()=>{
    const fetchPosts = async () =>{
     setLoading(true)
      const res = await axios.get(url);
      console.log(res)
      setQuestions(res.data)
      console.log(res.data)
    }
  fetchPosts()
  setLoading(false)
  },[])

  
  const showNextQuestion = () =>{
    setNextQuestion(prev => prev +1)
  }

  const handleScore = () =>{
    setIsCorrect(prev => !prev)
    setScore(prev => prev +1)
  }

  const handleFalse = () =>{
    setIsFalse(prev => !prev)
  }

  return (
    <div className='question-container'>
        <div className='question-content'>
          <h2>{questions[0].question}</h2>
          <h3 onClick={handleScore} style={{backgroundColor: isCorrect ? "green" : ""}}>{questions[0].correct_answer}</h3>
          <h3 onClick={handleFalse} style={{backgroundColor: isFalse ? "red" : ""} }>{questions.incorrect_answers[0]}</h3>
          <h3 onClick={handleFalse} style={{backgroundColor: isFalse ? "red" : ""}}>{questions.incorrect_answers[1]}</h3>
          <h3 onClick={handleFalse} style={{backgroundColor: isFalse ? "red" : ""}}>{questions.incorrect_answers[2]}</h3>
          <button onClick={showNextQuestion}>next</button>
          <h4>You score {score} / 5</h4>
        </div>
    </div>
  )
}

export default Question