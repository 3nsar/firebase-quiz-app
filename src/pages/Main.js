import { addDoc } from 'firebase/firestore'
import {auth, db} from "../config/firebase"
import { useAuthState } from 'react-firebase-hooks/auth'

import React, { useState } from 'react'

const Main = () => {

  return (
    <div>
        <li ><a href="/game">Start</a></li>
    </div>
  )
}

export default Main