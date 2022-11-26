import React, { useState } from "react"
import pandas from "../img/pandas.jpg"
import Timer from "./Timer"
import Header from "./Header"
import PopUp from "./PopUp"

export default function Main() {

    const [popup, setPopUp] = useState(false);
    const [timer, setTimer] = useState(0);
    
    // Percentages Values (X,Y) for Panda position
    const [minPandPercX, maxPandPercX] = [23.5, 29.5];
    const [minPandPercY, maxPandPercY] = [40.5, 45.5];

    const youWin = () => {
        
        let timerElement = document.getElementById("timer").textContent;
        const [hours, min, sec] = timerElement.split(':');
        const timerSec = Number(hours)*3600 + Number(min)*60 + Number(sec)
        setPopUp(!popup)
        setTimer(timerSec)
    }
    
    
    const handleClick = (e) => {

        const [imgWidth, imgHeight] = [e.target.width, e.target.height];
        let imgClickX = e.clientX - e.target.x;
        let imgClickY = e.clientY - e.target.y;
        console.log(imgWidth, imgHeight);

        let imgClickPercX = (imgClickX / imgWidth) * 100;
        let imgClickPercY = (imgClickY / imgHeight) * 100;

        let correctX = (imgClickPercX >= minPandPercX && imgClickPercX <= maxPandPercX);
        let correctY = (imgClickPercY >= minPandPercY && imgClickPercY <= maxPandPercY);

        if (correctX && correctY) {
            youWin()
        }
    }

    return (
        <div>
            <Header />
            <img src={pandas} alt="pandas" onClick={handleClick}/>
            <Timer time_init={Date.now()}/>
            {popup ? <PopUp time_completion={timer}/> : null}
        </div>
    )
}