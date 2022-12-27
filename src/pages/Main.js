
import {auth, db} from "../config/firebase"
import { useAuthState } from 'react-firebase-hooks/auth'
import {addDoc, collection, getDocs, query, updateDoc, where, docs} from "firebase/firestore"
import { useNavigate } from 'react-router'

import React, { useState } from 'react'
import { useEffect } from "react"

const Main = () => {

  const [user] = useAuthState(auth)

  const levelRef = collection(db, "levels")
  const navigate = useNavigate()

  const addLevel = async () =>{
    
    await addDoc(levelRef, {userId: user.uid, username: user.displayName, level: 1} ) 
  }

  const createDb = () =>{
    addLevel();
    navigate("/game")
  }

  return (
    <div>
       <button onClick={createDb}>ADDDDD</button>
    </div>
  )
}

export default Main