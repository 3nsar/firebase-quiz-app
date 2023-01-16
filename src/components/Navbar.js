import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../config/firebase'
import { useAuthState } from "react-firebase-hooks/auth"
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router'
import ReactSwitch from 'react-switch';
import {FiMoon} from 'react-icons/fi'

const Navbar = ({theme, toggleTheme}) => {

  const [user] = useAuthState(auth)
  const navigate = useNavigate()

  const signUserOut = async() =>{
    await signOut(auth)
    navigate('/')
  }

  return (
    <div className='navbar-container'>
      <ReactSwitch 
            onChange={toggleTheme} 
            checked={theme === "dark"}
            onColor="#be97dc"
            uncheckedIcon={<div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                fontSize: 20
              }}
            >
              <>&#x1F319;</>
            </div>}
            checkedIcon={<div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                fontSize: 20
              }}
            >
              <>&#x1F31E;</>
            </div>}
          />
        
       <h1>QUIZ</h1>
       <div className='profile'>
       {user && (
          <>
             <img src={user?.photoURL} alt="pic" />
             <p><>&#x1F9E0;</> {user.displayName}</p>
             <button onClick={signUserOut}>LOG OUT <>&#x1F44B;</></button>
          </>
        )}
       </div>
    </div>
  )
}

export default Navbar