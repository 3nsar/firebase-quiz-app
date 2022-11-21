import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Question from '../questions-answers/Question'


const Main = () => {
    const url = "https://the-trivia-api.com/api/questions?limit=1"
    //const url = "https://opentdb.com/api.php?amount=5&difficulty=medium&type=multiple"
    const [question, setQuestion] = useState([]);
    const [loading, setLoading] = useState(false)

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

  return (
    <div>

        <Question question={question} />
    </div>
  )
}

export default Main