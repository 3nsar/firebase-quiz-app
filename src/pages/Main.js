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
 

  {/*
   const [users, setUsers] = useState([])
 const foundUser = users.find((u) => u.uid === user.uid) 


   const levelDoc = query(levelRef, where("username", "==", user.uid))
  

 const levelRef = collection(db, "levels")
 const levelDoc = query(levelRef, where("userId", "==", user.uid))

 const addLevel = async () =>{
  if(levelDoc){
    await setDoc(levelRef, {userId: user.uid, username: user.displayName, level: 1} ) 
    
   }else{
    console.log("USER ALREADY EXISTS")
   }
  }   

*/}

  const [userAmout, setUserAmount]= useState([])
  const userRef = collection(db, "levels")
  let userAll = []
  const docRef = doc(db, "levels", user.displayName)
  {/*useEffect(()=>{
    const getUsers = async () =>{
      const data = await getDocs(userRef)
      setUserAmount(data.docs.map((doc)=> ({...doc.data(), id: doc.id  })));
    };

    getUsers()

  },[]) */}

  useEffect(()=>{

    const getUsers = () =>{
      getDocs(userRef)
      .then((snapshot)=>{
        snapshot.docs.forEach((doc)=> {
          userAll.push({...doc.data(), id: doc.id})
        })
        console.log(userAll)
      })
        .catch(err =>{console.log(err.message)})
    };
    getUsers()

  },[])


  const addUser = async () =>{
    if(docRef == user.uid){
      console.log("USER EXISTS")
    }else{
    await addDoc(userRef,{username: user.displayName, userId: user.uid, level:1})
  }
}

  const createDb = () =>{
    addUser();
    navigate("/game");
  }

  return (
    <div>
       <button onClick={createDb}>PLAY THE GAME</button>
       <div>{userAll.map((item)=>(
        <h1 key={item.id}>{item.username} {item.level}</h1>
       ))}</div>
    </div>
  )
}

export default Main