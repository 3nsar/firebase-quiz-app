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
import { ThreeDots } from  'react-loader-spinner'


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
  const [loading, setLoading] = useState(true)


   useEffect(()=>{
    const getUsers = async () =>{
      const data = await getDocs(levelRef)
      setUserAmount(data.docs.map((doc)=> ({...doc.data(), id: doc.id  })));
    };

    getUsers();
    setLoading(false)
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
    {loading ? <div className='loader'>
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
:
     user && (
      <>
      <div className="scoreboard">
       {userAmount.map((item)=>{
        return(
            
        <p key={item.id}> <>&#x1F9E0;</> {item.username} / <>&#x1F3C6;</> LEVEL {item.level}</p>
            
       )})}</div>

        <IconContext.Provider value={{ color: "orange", size:"20px" ,className: "global-class-name" }}>
       <button className="purple-btn" onClick={createDb}>START THE QUIZ <DiCodeigniter /></button>
       </IconContext.Provider>
       <button className="purple-btn" onClick={()=> navigate("/achievement")}>ACHIEVEMENTS</button>
       </>)}
      
    </div> 
  )
}

export default Main