import {auth, db, storage} from "../config/firebase"
import { useAuthState } from 'react-firebase-hooks/auth'
import {addDoc, collection, getDocs, getDoc, query, updateDoc, where, docs, doc, setDoc, onSnapshot,firebase } from "firebase/firestore"
import { useNavigate } from 'react-router'

import React, { useState } from 'react'
import { useEffect } from "react"
import {DiCodeigniter} from "react-icons/di"
import {FcFlashOn, FcManager} from "react-icons/fc"
import { IconContext } from "react-icons";
import Achievement from "./Achievement"

const Main = () => { 

  {/*
   const [users, setUsers] = useState([])
 const foundUser = users.find((u) => u.uid === user.uid) 


   const levelDoc = query(levelRef, where("username", "==", user.uid))
  

 const levelRef = collection(db, "levels")
 const levelDoc = query(levelRef, where("userId", "==", user.uid))

 const addLevel = async () =>{
  if(levelDoc){
    await addDoc(levelRef, {userId: user.uid, username: user.displayName, level: 1} ) 
    
   }else{
    console.log("USER ALREADY EXISTS")
   }
  }   

*/}
  const [user] = useAuthState(auth)
  const navigate = useNavigate()
  const [userAmount, setUserAmount] = useState([])
  const levelRef = collection(db, "levels");


   useEffect(()=>{
    const getUsers = async () =>{
      const data = await getDocs(levelRef)
      setUserAmount(data.docs.map((doc)=> ({...doc.data(), id: doc.id  })));
    };

    getUsers()

  },[]) 

  const existsUser = userAmount.find((currUser)=> currUser.userId === user.uid)

  const addLevel = async () =>{
    if(existsUser){
      console.log("USER Exists")
    } else{
      await addDoc(levelRef, {userId: user.uid, username: user.displayName, level: 1} ) 
    }
  }
 
  const createDb = () =>{
    addLevel()
    navigate("/game");
  }
  
  return (
    <div className="menu">
     {user && (
      <>
      <div className="scoreboard">
       {userAmount.map((item)=>{
        return(
            
        <p key={item.id}> <>&#x1F9E0;</> {item.username} / <>&#x1F3C6;</> Level {item.level}</p>
            
       )})}</div>

        <IconContext.Provider value={{ color: "orange", size:"20px" ,className: "global-class-name" }}>
       <button className="start-btn" onClick={createDb}>START THE QUIZ <DiCodeigniter /></button>
       </IconContext.Provider>
       <button className="start-btn" onClick={()=> navigate("/achievement")}>ACHIEVEMENTS</button>
       </>)}
    </div> 
  )
}

export default Main