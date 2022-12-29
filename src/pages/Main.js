import {auth, db} from "../config/firebase"
import { useAuthState } from 'react-firebase-hooks/auth'
import {addDoc, collection, getDocs, query, updateDoc, where, docs} from "firebase/firestore"
import { useNavigate } from 'react-router'

import React, { useState } from 'react'
import { useEffect } from "react"

const Main = () => {

  const [user] = useAuthState(auth)
  const navigate = useNavigate()
  const levelRef = collection(db, "levels")
 
  const addLevel = async () =>{
    if(user.id){
      await addDoc(levelRef, {userId: user.uid, username: user.displayName, level: 1} ) 
    }else{
      console.log("USER ALREADY EXISTS")
    }
  } 

  const createDb = () =>{
    addLevel();
    navigate("/game");
  }

  return (
    <div>
       <button onClick={createDb}>PLAY THE GAME</button>
    </div>
  )
}

export default Main