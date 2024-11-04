import { useState } from "react"

const questions = [
    {
        id: 1,
        question: " I speak without a mouth and hear without ears. I have no body, but I come alive with the wind. What am I?",
        answer: "An Echo"
    },
    {
        id: 2,
        question: "You see a boat filled with people. It has not sunk, but when you look again you don’t see a single person on the boat. Why??",
        answer: "All the people were married "
    },
    {
        id: 3,
        question: "The more of this there is, the less you see. What is it?",
        answer: "Darkness",
    },
    {
        id: 4,
        question: "What has keys but can’t open locks?",
        answer: "A piano"
    },
    {
        id: 5,
        question: "What can travel around the world while staying in a corner?",
        answer: "A stamp "
    },
    {
        id: 6,
        question:
        "I’m light as a feather, yet the strongest person can’t hold me for more than a few minutes. What am I?",
        answer: "Breath"
    },

    {
        id: 7,
        question:
        " What runs all around a backyard, yet never moves?",
        answer: "A fence"
    },

    {
        id: 8,
        question:
        " I have cities but no houses, forests but no trees, and rivers but no water. What am I?",
        answer: "A map"
    },

    {
        id: 9,
        question:
        "The more you take, the more you leave behind. What am I?",
        answer: "Footsteps"
    },

    {
        id: 10,
        question:
        "What comes once in a minute, twice in a moment, but never in a thousand years?",
        answer: "The letter M"

    },
]

export default function FlashCards ()
{
    const [selectedId, setSelectedId] = useState(null)
function handleClick(id){
    setSelectedId(id !== selectedId ? id : null)
}

    return(
        <div className="parent-container">
            <div className="header">
                <h1>Riddles App😁</h1>
                <p>Click on the cards to reveal the answers</p>
            </div>


            <div className="flashcards">
                {questions.map((question)=>(
                <div key={questions.id} onClick={()=>handleClick(question.id)} className={question.id === selectedId ? "selected" : " "}>
                <p>{question.id === selectedId ? question.answer : question.question}</p>
            </div>
        ))}
            </div>

            <div className="footer">
                <p>How many did you get right? Let me know👌</p>
            </div>





        </div>

    )
}