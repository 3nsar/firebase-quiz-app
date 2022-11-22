import { style } from '@mui/system'
import React, { useState, useEffect } from 'react'
import QuestionStyle from "./QuestionStyle.css"
import axios from 'axios'

const Question = ({ data: {question, correctAnswer} }) => {

    <div className='question-container'>
        <div className='question-content'>
          <h2> {question}</h2>
          <h3>{correctAnswer}</h3>
          <h4>You score 1/ 5</h4>
        </div>
    </div>
   
}

export default Question