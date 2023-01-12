import React, { useState, useEffect, createContext } from 'react'
import {auth, db} from "../config/firebase"
import {addDoc, collection, getDocs, query, updateDoc, where, doc, setDoc} from "firebase/firestore"
import { useAuthState } from 'react-firebase-hooks/auth'



const Achievement = () => {

    const [userInfo, setUserInfo] = useState([])
    const [user] = useAuthState(auth)
    const levelRef = collection(db, "levels")
  
    useEffect(()=>{
        const showLevel = async () =>{
          const data = await getDocs(levelRef);
          setUserInfo(data.docs.map((doc)=>({...doc.data(), id: doc.id}))); 
        }
        showLevel()
      },[])
  
      const [emojis, setEmojis] = useState([]);
      const arr = []
   
      const addLevelAchie10 = ()=>{
        userInfo.filter(item => item.userId === user.uid).map(fitna =>{
            if(fitna.level > 10){
                return(arr.push(<>&#x1F3C6;</>),setEmojis(arr))
            }
        })
    }    
    const addLevelAchie2 = ()=>{
        userInfo.filter(item => item.userId === user.uid).map(fitna =>{
            if(fitna.level > 2){
                return(arr.push(
                <div className='card'> <>&#x1F3C6;</> </div>),setEmojis(arr))
            }
        })
    }   
    const addLevelAchie15 = ()=>{
        userInfo.filter(item => item.userId === user.uid).map(fitna =>{
            if(fitna.level > 15){
                return(arr.push(<>&#x1F3C6;</>),setEmojis(arr))
            }
        })
    }   
    const addLevelAchie20 = ()=>{
        userInfo.filter(item => item.userId === user.uid).map(fitna =>{
            if(fitna.level > 20){
                return(arr.push(<>&#x1F3C6;</>),setEmojis(arr))
            }
        })
    }   
    const addLevelAchie8 = ()=>{
        userInfo.filter(item => item.userId === user.uid).map(fitna =>{
            if(fitna.level > 8){
                return(arr.push(<>&#x1F3C6;</>),setEmojis(arr))
            }
        })
    }   
    const addLevelAchie25 = ()=>{
        userInfo.filter(item => item.userId === user.uid).map(fitna =>{
            if(fitna.level > 25){
                return(arr.push(<>&#x1F3C6;</>),setEmojis(arr))
            }
        })
    } 
    const addLevelAchie40 = ()=>{
        userInfo.filter(item => item.userId === user.uid).map(fitna =>{
            if(fitna.level > 40){
                return(arr.push(<>&#x1F3C6;</>),setEmojis(arr))
            }
        })
    }   
    const addLevelAchie50 = ()=>{
        userInfo.filter(item => item.userId === user.uid).map(fitna =>{
            if(fitna.level > 50){
                return(arr.push(<>&#x1F3C6;</>),setEmojis(arr))
            }
        })
    }   

    const allAchievemments = ()=>{
        addLevelAchie10()
        addLevelAchie50();
        addLevelAchie40();
        addLevelAchie25();

        addLevelAchie8();
        addLevelAchie15();
        addLevelAchie2();
        addLevelAchie20();
    }
    
  return (
    <div>
        <button onClick={allAchievemments}>show recodd</button>
        {emojis.map(item=>(
            <h2>{item}</h2>
        ))}
        
    </div>
  )
}

export default Achievement