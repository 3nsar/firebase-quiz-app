
import { style } from '@mui/system'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Question from '../questions-answers/Question'

const Main = () => {

  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [finishedGame, setFinishedGame] = useState(false)
  const [showAnswer, setShowAnswer] = useState(false)
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
    if(!showAnswer){
    if(answer === questions[currentQuestion].correctAnswer){
      setScore(prev => prev +1)
    }
  }
  setShowAnswer(true)
};

  const handleNextQuestion = () =>{
    setCurrentQuestion(currentQuestion +1)
    setShowAnswer(false)
  }

  return questions.length > 0 ? (
    <div>{currentQuestion >= questions.length ?(
      <h1>you score is : {score}</h1>
    ): (
      <Question 
      data={questions[currentQuestion]}
      showAnswer={showAnswer}
      handleAnswer={handleAnswer}
      handleNextQuestion={handleNextQuestion}
      />
    )}</div>
  ) : (
    <h3>Loading...</h3>
  );
}


export default Main