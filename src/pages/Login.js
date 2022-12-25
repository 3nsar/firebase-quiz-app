import React from 'react'
import {auth, provider} from '../config/firebase'
import {signInWithPopup} from 'firebase/auth'
import { useNavigate } from 'react-router'

const Login = () => {

    const navigate = useNavigate()

    const signWithGoogle = async () =>{
        const res = await signInWithPopup(auth, provider)
        console.log(res)
        navigate('/')
    }
  return (
    <div>
        <h1>Sign in with Google</h1>
        <button onClick={signWithGoogle}>Sign in with Google</button>
    </div>
  )
}

export default Login