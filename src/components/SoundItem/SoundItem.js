import React, { useState, useEffect, useRef, useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import style from "./SoundItem.module.css";
import { BsFillVolumeOffFill, BsFillVolumeDownFill } from "react-icons/bs";
import soundData from "../../data/SoundtrackData";


export default function SoundItem(props) {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef();
    const progressBar = useRef();
    const {isDark} = useContext(ThemeContext);

    useEffect(() => {
        if (isPlaying) {
            audioRef.current.play()
        } else {
            audioRef.current.pause();
        }

        if(props.isStopped) {
            audioRef.current.pause();
        } 

    }, [isPlaying, audioRef, props.isStopped]);

    const changeRange = (e) => {
        audioRef.current.volume = e.target.value / 100;
    };

    return(
        <div className={style.soundItem__container}>
            <button 
                className={`${isDark ? style.soundItem__dark : style.soundItem__light}`}
                onClick={() => setIsPlaying((prev) => !prev)}
                style={{
                    backgroundColor: (isPlaying && props.isStopped === false) ? "#FFFFFF" : "", 
                    color: (isPlaying && props.isStopped === false) ? "#000046" : "", 
                }}
            >
                {props.item.icon}
            
                <audio loop volume ref={audioRef} src={props.item.soundUrl} type="audio/mpeg">
                    Your browser does not support the audio element.
                </audio>
            </button>

            {(isPlaying && props.isStopped === false) ? 
                <div>
                    <BsFillVolumeOffFill />
                    <input
                        type="range"
                        className={style.progressBar}
                        defaultValue="100"
                        ref={progressBar}
                        onChange={changeRange}
                    />
                    <BsFillVolumeDownFill/>
                </div>
            : "" 
            }
            <p className={style.soundItem__name}>{props.item.title}</p>
        </div>
    )
}

