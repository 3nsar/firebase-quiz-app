import React, { useState, useEffect, createContext } from 'react'
import {auth, db} from "../config/firebase"
import {addDoc, collection, getDocs, query, updateDoc, where, doc, setDoc} from "firebase/firestore"
import { useAuthState } from 'react-firebase-hooks/auth'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from 'react-router'



const Achievement = () => {

    const [userInfo, setUserInfo] = useState([])
    const [user] = useAuthState(auth)
    const levelRef = collection(db, "levels")

    const navigate = useNavigate()
  
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
                return(arr.push(<div className='card'>  <div>&#x1F996;</div> <p>BABY STEPS</p></div>),setEmojis(arr))
            }
        })
    }    
    const addLevelAchie2 = ()=>{
        userInfo.filter(item => item.userId === user.uid).map(fitna =>{
            if(fitna.level > 2){
                return(arr.push(<div className='card'> <div>&#x1F476;</div> <p>BABY STEPS</p></div>),setEmojis(arr))
            }
        })
    }   
    const addLevelAchie15 = ()=>{
        userInfo.filter(item => item.userId === user.uid).map(fitna =>{
            if(fitna.level > 15){
                return(arr.push(<div className='card'>  <div>&#x1F98D;</div> <p>BABY STEPS</p></div>),setEmojis(arr))
            }
        })
    }   
    const addLevelAchie20 = ()=>{
        userInfo.filter(item => item.userId === user.uid).map(fitna =>{
            if(fitna.level > 20){
                return(arr.push(<div className='card'>  <div>&#x1F47D;</div> <p>BABY STEPS</p></div>),setEmojis(arr))
            }
        })
    }   
    const addLevelAchie8 = ()=>{
        userInfo.filter(item => item.userId === user.uid).map(fitna =>{
            if(fitna.level > 8){
                return(arr.push(<div className='card'>  <div>&#x1F47B;</div> <p>BABY STEPS</p></div>),setEmojis(arr))
            }
        })
    }   
    const addLevelAchie25 = ()=>{
        userInfo.filter(item => item.userId === user.uid).map(fitna =>{
            if(fitna.level > 25){
                return(arr.push(<div className='card'>  <div>&#x1F9DB;</div> <p>BABY STEPS</p></div>),setEmojis(arr))
            }
        })
    } 
    const addLevelAchie40 = ()=>{
        userInfo.filter(item => item.userId === user.uid).map(fitna =>{
            if(fitna.level > 40){
                return(arr.push(<div className='card'>  <div>&#x1F9DF;</div> <p>BABY STEPS</p></div>),setEmojis(arr))
            }
        })
    }   
    const addLevelAchie50 = ()=>{
        userInfo.filter(item => item.userId === user.uid).map(fitna =>{
            if(fitna.level > 50){
                return(arr.push(<div className='card'>  <div>&#x1F9D9;</div> <p>MVP</p></div>),setEmojis(arr))
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

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

  return (
    <div className='card-slider'>
        
    <button className='start-btn' onClick={allAchievemments}>show recodd</button>
    <button onClick={()=> navigate('/main')}>GO BACK</button>
    <Slider {...settings}>
        {emojis.map(item=>(
              <>{item}</>
        ))}
    </Slider>
    </div>
  )
}

export default Achievement