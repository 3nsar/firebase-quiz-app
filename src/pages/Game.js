import { style } from '@mui/system'
import React, { useState, useEffect, createContext } from 'react'
import axios from 'axios'
import Question from '../questions-answers/Question'
import {addDoc, collection, getDocs, query, updateDoc, where, doc, setDoc} from "firebase/firestore"
import {auth, db} from "../config/firebase"
import { useAuthState } from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router'
import { async } from '@firebase/util'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { ThreeDots } from  'react-loader-spinner'

const Game = ({notify}) => {

  const url = "https://the-trivia-api.com/api/questions?limit=10&difficulty=easy"

  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [showAnswer, setShowAnswer] = useState(false)
  const [user] = useAuthState(auth)
  const levelRef = collection(db, "levels")
  const [userInfo, setUserInfo] = useState([])
  
  const navigate = useNavigate()


  useEffect(()=>{
    const fetchPosts = async () =>{
  
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

  }, [])

  const handleAnswer  = (answer) =>{
    if(!showAnswer){
    if(answer === questions[currentQuestion].correctAnswer) {
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
      setUserInfo(data.docs.map((doc)=>({...doc.data(), id: doc.id}))); 
    }
    showLevel()
  },[]) 

  const updateLevel = async (id, level)=> {
    const userDoc = doc(db, "levels", id);
    const newField = {level: level +1};
    await updateDoc(userDoc, newField); 
  }

  useEffect(()=>{
    notify()
  },[])
  {/*useEffect(() => {
    const getLevel = async () =>{
    if (currentQuestion >= questions.length && score >= 1) {
       levelAm.filter(item => item.userId === user.uid).map(filteredItem =>{
        return(
                                                                                                                      
          updateLevel(filteredItem.id, filteredItem.level ))}
       )}
       
    await getLevel();
  }
}, [currentQuestion]); */}

  return questions.length > 0  ? (
    <div>{currentQuestion >= questions.length ? ( 
      <div className='result-positive'>
         {/*<li><a href="/game">Play again</a></li> 
         <li><a href="/main">Return</a></li> */}
         {score >= 7 ? userInfo.filter(item => item.userId === user.uid).map(filteredItem=>{
          return(
          <>
          <div className={"result-circle-positive"}><h1>{score} / 10</h1></div>
          <div className='result-btn'>
          <h2 key={filteredItem.id}><>&#x1F3C6;</> LEVEL {filteredItem.level}</h2>
          <button className="purple-btn" onClick={async ()=>{
            await updateLevel(filteredItem.id, filteredItem.level)
            window.location.reload(false)}}>NEXT LEVEL</button>

          <button className="purple-btn" onClick={async()=>{
            navigate("/main")
            updateLevel(filteredItem.id, filteredItem.level)}}>RETURN</button>
          </div>
          <ToastContainer />
          </>
          
          )}): 
          <>
          <div className={"result-circle-negative"}>
            <h1>{score} / 10</h1>
          </div>
          <h1>YOU DIDN'T SCORE ENOUGH!</h1>
          <button className='purple-btn' onClick={()=>{
             window.location.reload(false)}}>PLAY AGAIN</button>

          <button className='purple-btn' onClick={()=>{
            navigate("/main")}}>RETURN</button>
          </>}
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
    <div className='loader'>
      <ThreeDots 
        height="80" 
        width="80" 
        radius="9"
        color="#FF1493" 
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
}


export default Game

