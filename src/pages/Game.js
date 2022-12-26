
import { style } from '@mui/system'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Question from '../questions-answers/Question'
import {addDoc, collection, getDocs, query, updateDoc, where, doc} from "firebase/firestore"
import {auth, db} from "../config/firebase"
import { useAuthState } from 'react-firebase-hooks/auth'


const Game = () => {

  const url = "https://the-trivia-api.com/api/questions?limit=5&difficulty=medium"

  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [showAnswer, setShowAnswer] = useState(false)
  const [loading, setLoading] = useState(false)

  const [level, setLevel] = useState([])
  const [user] = useAuthState(auth)
  const levelRef = collection(db, "levels")
 
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
        ].sort(()=>Math.random() -0.5)
      }))
     
      setQuestions(questions)
      console.log(res.data)

    }
  fetchPosts()
  setLoading(false)
  }, [])

  const createDb = async () =>{
    await addDoc(levelRef, {
      userId: user.uid,
      level: 1,
    });
  }

  const handleAnswer  = (answer) =>{
    if(!showAnswer){
    if(answer === questions[currentQuestion].correctAnswer){
      setScore(prev => prev +1)
    }
  }

  setShowAnswer(true)
};

  const handleNextQuestion = () =>{
    setCurrentQuestion(prev => prev +1)
    setShowAnswer(false)
  }

  useEffect(()=>{
    const showLevel = async () =>{
      const data = await getDocs(levelRef);
      setLevel(data.docs.map((doc)=>({...doc.data(), id: doc.id})));
    }
    showLevel()

  },[])

 useEffect(() => {
    const getLevel = async () =>{
    if (currentQuestion >= questions.length && score >= 1) {
      await updateLevel();
    }
    getLevel()
  }
}, [currentQuestion]); 

const updateLevel = async (id, level) =>{
  const levelDoc = doc(db, "levels", id);
  const newField = {level: level +1}
  await updateDoc(levelDoc, newField)
} 
 

  return questions.length> 0  ? (
    <div>{currentQuestion >= questions.length ? (
      <div>
         <h1>You scored: {score} / 5</h1>
         {/*<h1>Level: {score > 0 ? level : "Try again"}</h1> */}
         <li><a href="/game">Play again</a></li> 
         <li><a href="/main">Return</a></li>
         {score > 0 ?level.map((item) =>(

         <h1 {...updateLevel(item.id, item.level)}>{item.level}</h1>
         )) : "SSSSS"}
          
      </div> 
    ): (

      <Question 
      data={questions[currentQuestion]}
      showAnswer={showAnswer}
      handleAnswer={handleAnswer}
      handleNextQuestion={handleNextQuestion}
      />
 
    )}</div>

  ): (
    <h3>Loading...</h3>
  );
}


export default Game