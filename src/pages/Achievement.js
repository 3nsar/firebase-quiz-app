import React, { useState, useEffect, createContext } from 'react'
import {auth, db} from "../config/firebase"
import {addDoc, collection, getDocs, query, updateDoc, where, doc, setDoc} from "firebase/firestore"
import { useAuthState } from 'react-firebase-hooks/auth'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Achievement = () => {

    const [userInfo, setUserInfo] = useState([])
    const [user] = useAuthState(auth)
    const levelRef = collection(db, "levels")
    const [emojis, setEmojis] = useState([]);
    const arr = []

    const navigate = useNavigate()
  
    useEffect(()=>{
        const showLevel = async () =>{
          const data = await getDocs(levelRef);
          setUserInfo(data.docs.map((doc)=>({...doc.data(), id: doc.id}))); 
        }
        showLevel()
      },[])
  
      const addLevelAchie10 = ()=>{
        userInfo.filter(item => item.userId === user.uid).map(filteredItem =>{
            if(filteredItem.level > 9){
                return(arr.push(<div className='card'>  <div>&#x1F996;</div> <p>DINO</p> <h5 className='subtitle'>Level 10</h5></div>),setEmojis(arr))
            }else{
                return(arr.push(<div className='card'> <div>?</div> <h5 className='subtitle'>Level 10</h5></div>),setEmojis(arr))
            }
        })
    }    
    const addLevelAchie2 = ()=>{
        userInfo.filter(item => item.userId === user.uid).map(filteredItem =>{
            if(filteredItem.level > 2){
                return(arr.push(<div className='card'> <div>&#x1F476;</div> <p>BABY STEPS</p> <h5 className='subtitle'>Level 3</h5></div>),setEmojis(arr))
            }else{
                return(arr.push(<div className='card'> <div>?</div> <h5 className='subtitle'>Level 3</h5></div>),setEmojis(arr))
            }
        })
    }   
    const addLevelAchie15 = ()=>{
        userInfo.filter(item => item.userId === user.uid).map(filteredItem =>{
            if(filteredItem.level > 14){
                return(arr.push(<div className='card'>  <div>&#x1F98D;</div> <p>GORILLA</p> <h5 className='subtitle'>Level 15</h5></div>),setEmojis(arr))
            }else{
                return(arr.push(<div className='card'> <div>?</div> <h5 className='subtitle'>Level 15</h5></div>),setEmojis(arr))
            }
        })
    }   
    const addLevelAchie20 = ()=>{
        userInfo.filter(item => item.userId === user.uid).map(filteredItem =>{
            if(filteredItem.level > 19){
                return(arr.push(<div className='card'>  <div>&#x1F47D;</div> <p>ALIEN</p> <h5 className='subtitle'>Level 20</h5></div>),setEmojis(arr))
            }else{
                return(arr.push(<div className='card'> <div>?</div> <h5 className='subtitle'>Level 20</h5></div>),setEmojis(arr))
            }
        })
    }   
    const addLevelAchie43 = ()=>{
        userInfo.filter(item => item.userId === user.uid).map(filteredItem =>{
            if(filteredItem.level > 42){
                return(arr.push(<div className='card'>  <div>&#x1F47B;</div> <p>GHOST</p> <h5 className='subtitle'>Level 43</h5></div>),setEmojis(arr))
            }else{
                return(arr.push(<div className='card'> <div>?</div> <h5 className='subtitle'>Level 43</h5></div>),setEmojis(arr))
            }
        })
    }   
    const addLevelAchie25 = ()=>{
        userInfo.filter(item => item.userId === user.uid).map(filteredItem =>{
            if(filteredItem.level > 24){
                return(arr.push(<div className='card'>  <div>&#x1F9DB;</div> <p>VAMPIRE</p> <h5 className='subtitle'>Level 25</h5></div>),setEmojis(arr))
            }else{
                return(arr.push(<div className='card'> <div>?</div> <h5 className='subtitle'>Level 25</h5></div>),setEmojis(arr))
            }
        })
    } 
    const addLevelAchie40 = ()=>{
        userInfo.filter(item => item.userId === user.uid).map(filteredItem =>{
            if(filteredItem.level > 39){
                return(arr.push(<div className='card'>  <div>&#x1F9DF;</div> <p>ZOMBIE</p> <h5 className='subtitle'>Level 40</h5></div>),setEmojis(arr))
            }else{
                return(arr.push(<div className='card'> <div>?</div> <h5 className='subtitle'>Level 40</h5></div>),setEmojis(arr))
            }
        })
    }   
    const addLevelAchie50 = ()=>{
        userInfo.filter(item => item.userId === user.uid).map(filteredItem =>{
            if(filteredItem.level > 49){
                return(arr.push(<div className='card'>  <div>&#x1F9D9;</div> <p>MVP</p> <h5 className='subtitle'>Level 50</h5></div>),setEmojis(arr))
            }else{
                return(arr.push(<div className='card'> <div>?</div> <h5 className='subtitle'>Level 50</h5></div>),setEmojis(arr))
            }
        })
    }

    const addLevelAchie30 = ()=>{
        userInfo.filter(item => item.userId === user.uid).map(filteredItem =>{
            if(filteredItem.level > 29){
                return(arr.push(<div className='card'>  <div>&#x1F30B;</div> <p>VULCANO</p> <h5 className='subtitle'>Level 30</h5></div>),setEmojis(arr))
            }else{
                return(arr.push(<div className='card'> <div>?</div> <h5 className='subtitle'>Level 30</h5></div>),setEmojis(arr))
            }
        })
    }  

    const addLevelAchie35 = ()=>{
        userInfo.filter(item => item.userId === user.uid).map(filteredItem =>{
            if(filteredItem.level > 34){
                return(arr.push(<div className='card'>  <div>&#x1F409;</div> <p>DRAGON</p> <h5 className='subtitle'>Level 35</h5></div>),setEmojis(arr))
            }else{
                return(arr.push(<div className='card'> <div>?</div> <h5 className='subtitle'>Level 35</h5></div>),setEmojis(arr))
            }
        })
    } 

 const allAchievemments = ()=>{
        addLevelAchie10();
        addLevelAchie50();
        addLevelAchie40();
        addLevelAchie25();

        addLevelAchie43();
        addLevelAchie15();
        addLevelAchie2();
        addLevelAchie20();
        addLevelAchie30();
        addLevelAchie35();
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
            breakpoint: 1224,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: false,
              dots: true
            }
          },
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 610,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false
            }
          }
        ]
      };

    const [show, setShow]= useState(true)

  return (
 <div className='card-slider'>

    <button className= 'purple-btn' onClick={()=> {return setShow(!show),allAchievemments()}}>COLLECTION</button>
    <button className="back-btn" onClick={()=> navigate('/main')}> <>&#x21A9; </></button>
    {show &&<Slider {...settings}>
        {emojis.map(item=>(
              <>{item}</>
        ))}
    </Slider> }
</div>
  )
}

export default Achievement