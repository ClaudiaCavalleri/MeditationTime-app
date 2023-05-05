import React, { useContext } from "react";
import style from "./Timer.module.css";
import {CountdownCircleTimer} from 'react-countdown-circle-timer'
import { ThemeContext } from "../../context/ThemeContext";

export default function Timer({
    minutes,
    seconds,
    isRunning,
    keyss,
    changeTimer,
    stopTimer,
    setIsRunning,
    setIsStopped
}) {
    const {isDark} = useContext(ThemeContext);
    const pauseTimerAndSounds = () => {
        setIsRunning(prevRunning => !prevRunning);
        setIsStopped(prevStop => !prevStop)
    }

    return (
        <section>
            <div className={`${isDark ? style.circleTimer__dark : style.circleTimer__light}`} onClick={pauseTimerAndSounds}>
                <CountdownCircleTimer
                    key={keyss}
                    isPlaying={isRunning ? true : false}
                    duration={keyss}
                    strokeWidth={14}
                    size={220}
                    trailColor={isDark ? "#000046" : "#1CB5E0"}      
                    colors={isDark ? "#1CB5E0" : "#FFFFFF"} 
                    onComplete={stopTimer}
                >
                    {({ duration }) => {
                        return (
                            <div className={style.countdownTimer}>
                                <span value={minutes} className={style.timeDisplay}>{minutes}</span>
                                <span className={style.divider}>:</span>
                                <span value={seconds} className={style.timeDisplay}>{seconds}</span>
                            </div>
                        );
                    }} 
                </CountdownCircleTimer>
            </div>
            <p>Select the time you prefer and press Play to start meditate</p>
            <div className={style.timeSelect}>
                <button 
                    value={120}
                    className={`${isDark ? style.timeSelect__dark : style.timeSelect__light}`} 
                    onClick={changeTimer}
                >
                    2 Minutes
                </button>
                <button 
                    value={300}
                    className={`${isDark ? style.timeSelect__dark : style.timeSelect__light}`} 
                    onClick={changeTimer}
                >
                    5 Minutes
                </button>
                <button 
                    value={600}
                    className={`${isDark ? style.timeSelect__dark : style.timeSelect__light}`} 
                    onClick={changeTimer}
                >
                    10 Minutes
                </button>
            </div>
        </section>
    );
}

