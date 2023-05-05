import React, { useContext, useEffect, useState } from "react"
import { ThemeContext } from "../../context/ThemeContext"
import { MdPlayArrow, MdPause, MdStop } from "react-icons/md";
import style from "./TimerPage.module.css"

import Timer from "../../components/Timer/Timer"
import SoundsGrid from "../../components/SoundsGrid/SoundsGrid"
import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"

export default function TimerPage() {
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState("0" + 0)       //the string "0" is for adding the zero below the seconds and so have double zero at the beginning.
    const [isRunning, setIsRunning] = useState(false)
    const [keys, setKeys] = useState(0);
    const [isStopped, setIsStopped] = useState(false);    //it allows to stop the sounds together with the timer
    const {isDark} = useContext(ThemeContext);

    useEffect(() => {
        let interval;
		if (isRunning) {
            interval = setTimeout(() => {
                if (seconds > 0 && seconds < 11) {                        //Adding a Zero below seconds when the number is < 10
                    setSeconds((prevSeconds) => "0" + (prevSeconds - 1));
                } else if (seconds >= 11){
                    setSeconds((prevSeconds) => (prevSeconds - 1));
                } else if (minutes > 0) {
                    setMinutes(prevMinutes => prevMinutes - 1);
                    setSeconds(59);
                }
            }, 1000)
		} 

        if (minutes === 0 && seconds === 0) {
            setIsRunning(false);
            setSeconds(0);
            setMinutes(0);
            setIsStopped(true);
        }

        return () => clearTimeout(interval);
	}, [minutes, seconds, isRunning]);

    //Start
    const startTimer = (e) => {
        if (minutes !== 0 || seconds !== 0) {
            setIsRunning(true);
            setIsStopped(false);
        } else {
            window.alert("Insert a valid time and select a sound");
        }
    }

    // Pause
    const pauseTimer = () => {
        setIsRunning(false);
        setIsStopped(true)
    }
    
    // Stop
    const stopTimer = (e) => {
        setIsRunning(false);
        setSeconds(0);
        setMinutes(0);
        setIsStopped(true)
    }
    

    //Select a time from the buttons
    const changeTimer = (e) => {
        setIsRunning(false);
        setSeconds(prevSeconds => {
            prevSeconds = e.target.getAttribute("value")
            return (
                `${Math.floor(prevSeconds % 60) + "0"}`
            )
        });
        setMinutes(prevMinutes => {
            prevMinutes = e.target.getAttribute("value")
            return (
                `${Math.floor(prevMinutes / 60)}`
            )
        })
        setKeys(keys => {                           //It changes the lenght of the circle by the user select a different time 
            keys = e.target.getAttribute("value")
            return (
                `${keys}`
            )
        })   
    }

    return (
        <main className={`${isDark ? style.timerPage__dark : style.timerPage__light}`}>
            <Navbar />
            <h1>MEDITATION TIME</h1>
            <p>Life is a rush but you can take a moment for yourself everyday.</p>
            
            <Timer 
                minutes={minutes}
                seconds={seconds}
                isRunning={isRunning}
                keyss={keys}
                setIsRunning={setIsRunning}
                setIsStopped={setIsStopped}
                changeTimer={changeTimer}
                startTimer={startTimer}
                stopTimer={stopTimer}

            />
            
            <div className={style.controlButtons}>
                {!isRunning && (
                    <button  onClick={startTimer} className={`${isDark ? style.button__dark : style.button__light}`}>
                        <span><MdPlayArrow size={25}/>Play</span>
                    </button>
                )}
                {isRunning && (
                    <button  onClick={pauseTimer} className={`${isDark ? style.button__dark : style.button__light}`}>
                        <span><MdPause size={25} />Pause</span>
                    </button>
                )}
                <button  onClick={stopTimer} className={`${isDark ? style.button__dark : style.button__light}`}>
                    <span><MdStop size={25} />Stop</span>
                </button>
            </div>
            <SoundsGrid  isStopped={isStopped} setIsStopped={setIsStopped} />
            <Footer />
        </main>
    )
}

