import React from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../config/firebase'
import { useAuthState } from "react-firebase-hooks/auth"
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router'
import ReactSwitch from 'react-switch';

const Navbar = ({theme, toggleTheme}) => {

  const [user] = useAuthState(auth)
  const navigate = useNavigate()

  const signUserOut = async() =>{
    await signOut(auth)
    navigate('/')

  }

  return (
    <div className='navbar-container'>
      <ReactSwitch onChange={toggleTheme} checked={theme === "dark"}/>
       <h1>QUIZ</h1>
       <div>
       {user && (
            <>
               <p>{user?.displayName}</p>
               <img src={user?.photoURL} alt="pic" width="30" height="30"/>
              <button onClick={signUserOut}>Log Out</button>
          </>
        )}
       </div>
    </div>
  )
}

export default Navbar