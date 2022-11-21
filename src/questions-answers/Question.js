import { style } from '@mui/system'
import React, { useState, useEffect } from 'react'
import QuestionStyle from "./QuestionStyle.css"
import axios from 'axios'


const Question = () => {

  const [position, setPosition] = useState(0)
  const [score, setScore] = useState(0)
  const [isCorrect, setIsCorrect] = useState(false)
  const [isFalse, setIsFalse] = useState(false)
  
  const num = 1;

  const url = `https://the-trivia-api.com/api/questions?limit=${num}`
  //const url = "https://opentdb.com/api.php?amount=5&difficulty=medium&type=multiple"
  const [question, setQuestion] = useState([]);
  const [loading, setLoading] = useState(false)
  const [nextQuestion, setNextQuestion] = useState(0)

  useEffect(()=>{
    const fetchPosts = async () =>{
     setLoading(true)
      const res = await axios.get(url);
      console.log(res)
      setQuestion(res.data)
      console.log(res.data)
      }
  fetchPosts()
  setLoading(false)
  },[])

  const handleScore = () =>{
    setIsCorrect(prev => !prev)
    setScore(prev => prev +1)
  }

  const handleFalse = () =>{
    setIsFalse(prev => !prev)
  }
  
  return (
    <div className='question-container'>
      {question.map((item)=>(
        <div className='question-content' key={item.id}>
          <h2>{item.question}</h2>
          <h3 onClick={handleScore} style={{backgroundColor: isCorrect ? "green" : ""}}>{item.correctAnswer}</h3>
          <h3 onClick={handleFalse} style={{backgroundColor: isFalse ? "red" : ""} }>{item.incorrectAnswers[position]}</h3>
          <h3 onClick={handleFalse} style={{backgroundColor: isFalse ? "red" : ""}}>{item.incorrectAnswers[position + 1]}</h3>
          <h3 onClick={handleFalse} style={{backgroundColor: isFalse ? "red" : ""}}>{item.incorrectAnswers[position + 2]}</h3>
          <h4>You score {score} / 5</h4>

        </div>
    ))}
    </div>
  )
}

export default Question