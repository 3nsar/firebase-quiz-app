import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Question from '../questions-answers/Question'


const Main = () => {
    const url = "https://the-trivia-api.com/api/questions?limit=5"
    const [question, setQuestion] = useState([]);
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
      const fetchPosts = async () =>{
      setLoading(true)
      const res = await axios.get(url);
        setQuestion(res.data)
        console.log(res.data)
        }
    fetchPosts()
    setLoading(false)
    },[])

  return (
    <div>
      <button>start</button>
        <Question question={question}/>
    </div>
  )
}

export default Main