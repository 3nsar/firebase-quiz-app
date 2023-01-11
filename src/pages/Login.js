import React from 'react'
import {auth, db, provider} from '../config/firebase'
import {signInWithPopup} from 'firebase/auth'
import { useNavigate } from 'react-router'
import {addDoc, collection, getDocs, query, updateDoc, where, docs} from "firebase/firestore"
import { useAuthState } from 'react-firebase-hooks/auth'
import {FcGoogle} from "react-icons/fc"

const Login = () => {

    const navigate = useNavigate()
    const [user] = useAuthState(auth)

    const signWithGoogle = async () =>{
        const res = await signInWithPopup(auth, provider)
        console.log(res)
        navigate('/main')
    }

  return (
    <div>
        <h1>Sign in with Google</h1>
        <button className='log-btn' onClick={signWithGoogle}>Sign in with Google <>&#x1F310;</></button>
    </div>
  )
}

export default Login