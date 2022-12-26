
import {auth, db} from "../config/firebase"
import { useAuthState } from 'react-firebase-hooks/auth'
import {addDoc, collection, getDocs, query, updateDoc, where, doc} from "firebase/firestore"

import React, { useState } from 'react'

const Main = () => {

  const [user] = useAuthState(auth)
    {/*const levelRef = collection(db, "levels")*/}

    const createDb = async () =>{
      const level= 1
      const userId= user.uid
      const username = user.displayName
  
      const colllectionRef = collection(db, "levels")
      const payload = {level, userId, username}
      await addDoc(colllectionRef, payload)
    }
   


  return (
    <div>
        <li><a href="/game"  onClick={createDb}>Start</a></li>
    </div>
  )
}

export default Main