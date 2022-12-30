import {auth, db} from "../config/firebase"
import { useAuthState } from 'react-firebase-hooks/auth'
import {addDoc, collection, getDocs, getDoc, query, updateDoc, where, docs, doc, setDoc} from "firebase/firestore"
import { useNavigate } from 'react-router'

import React, { useState } from 'react'
import { useEffect } from "react"
import { fireEvent } from "@testing-library/react"

const Main = () => {

  const [user] = useAuthState(auth)
  const navigate = useNavigate()
 
  const levelDoc = query(levelRef, where("username", "==", user.uid))
  
  {/*const [users, setUsers] = useState([])
 const foundUser = users.find((u) => u.uid === user.uid) */}
 const levelRef = collection(db, "levels");

 const addLevel = async () =>{
    if(!user.uid) {
      await addDoc(levelRef, {userId: user.uid, username: user.displayName, level: 1} ) 
    }else{
      console.log("USER EXIST")
    
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