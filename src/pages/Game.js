
import { style } from '@mui/system'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Question from '../questions-answers/Question'

const Game = () => {

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
  
      const questions = res.data.map((question)=>
      ({
        ...question,
        answers:[
          question.correctAnswer,
          ... question.incorrectAnswers
        ].sort(()=>Math.random())
      }))
     
      setQuestions(questions)
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
      <div>
         <h1>You scored: {score} / 5</h1>
         <li><a href="/game">Play again</a></li>
         <li><a href="/">Return</a></li>
      </div>
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


export default Game