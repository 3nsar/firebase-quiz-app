
import { style } from '@mui/system'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Question from '../questions-answers/Question'

const Main = () => {

  const [questions, setQuestions] = useState([]);
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


  return questions.length > 0 ? (
    <div>
      <Question questions={questions}/>
    </div>
  ) :(
    <h1>loading...</h1>
  ); 
}

export default Main