
import { style } from '@mui/system'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Question from '../questions-answers/Question'

const Main = () => {

  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [finishedGame, setFinishedGame] = useState(false)
  const [loading, setLoading] = useState(false)

  const url = "https://the-trivia-api.com/api/questions?limit=5&difficulty=medium"

  

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
  }, [])

  const handleAnswer  = (answer) =>{
    const newIndex = currentQuestion +1
    setCurrentQuestion(newIndex);
    if(answer === questions[currentQuestion].correctAnswer){
      setScore(prev => prev +1)

    }

    if(newIndex >= questions.length) {
      setFinishedGame(true)
    }

  }

  return finishedGame ? (
    <div>You scored {score}/5</div>
  ) :  questions.length > 0 ? (
    <div>
      <Question data={questions[currentQuestion]} handleAnswer={handleAnswer}/>
    </div>
  ) :(
    <h1>Loading...</h1>
  ); 
}

export default Main