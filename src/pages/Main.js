import {auth, db} from "../config/firebase"
import { useAuthState } from 'react-firebase-hooks/auth'
import {addDoc, collection, getDocs, getDoc, query, updateDoc, where, docs, doc, setDoc} from "firebase/firestore"
import { useNavigate } from 'react-router'

import React, { useState } from 'react'
import { useEffect } from "react"
import { fireEvent } from "@testing-library/react"

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
  const userRef = collection(db, "levels")
  const [userAmount, setUserAmount] = useState([])

   useEffect(()=>{
    const getUsers = async () =>{
      const data = await getDocs(userRef)
      setUserAmount(data.docs.map((doc)=> ({...doc.data(), id: doc.id  })));
      
    };

    getUsers()

  },[]) 

  const addLevel = async () =>{
    if(query(userRef, where("userId", "==", user.uid))){
      console.log("USER EXISTS")
    } else{
      console.log("ADDED USER")
      await addDoc(userRef, {userId: user.uid, username: user.displayName, level: 1} ) 
    }
    addLevel();
  }


  const createDb = () =>{
    addLevel()
    navigate("/game");
  }

  return (
    <div>
       <button onClick={createDb}>PLAY THE GAME</button>
       {userAmount.map((item)=>{
        return <h1>{item.username}</h1>
       })}
    </div>
  )
}

export default Main