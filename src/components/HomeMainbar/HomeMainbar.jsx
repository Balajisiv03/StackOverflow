import React from 'react'
import './HomeMainbar.css'
import {Link,useLocation} from 'react-router-dom'
import QuestionsList from './QuestionsList'

const HomeMainbar = () => {
  var questionsList=[
    {
    id: 1,
    votes: 3,
    noOfAnswers: 2,
    questionTitle: "What is a function?",
    questionBody: "it meant to be",
    questionTags: ["java","node js","react js","mangodb"],
    userPosted: "mano",
    askedOn: "jan 1"
   },{
    id: 1,
    votes: 3,
    noOfAnswers: 2,
    questionTitle: "What is a function?",
    questionBody: "it meant to be",
    questionTags: ["java","R","Python"],
    userPosted: "mano",
    askedOn: "jan 1"
   },{
    id: 1,
    votes: 3,
    noOfAnswers: 2,
    questionTitle: "What is a function?",
    questionBody: "it meant to be",
    questionTags: ["java","R","python"],
    userPosted: "mano",
    askedOn: "jan 1" }]

  const location=useLocation()
  return (
    <div className="main-bar">
       <div className="main-bar-header">
           {
             location.pathname==='/'? <h1>"Top Questions"</h1> :  <h1>"All Questions"</h1> 
           }
           <Link to="/AskQuestion" className="ask-btn">Ask Question</Link>
       </div>
       <div>
        {
          questionsList===null ?
          <h1>Loading...</h1> :
          <>
            <p>{questionsList.length} Questions</p>
            <QuestionsList questionsList={questionsList}/>
          </>
        }
       </div>
    </div>
  )
}

export default HomeMainbar
