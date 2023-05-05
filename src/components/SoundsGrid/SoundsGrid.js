import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { MdHeadphones, MdMusicNote } from "react-icons/md";
import style from "./SoundsGrid.module.css";
import soundData from "../../data/SoundtrackData";
import SoundItem from "../SoundItem/SoundItem";

export default function SoundsGrid({isStopped, setIsStopped}) {
    const {isDark} = useContext(ThemeContext)
    
    const sounds = soundData.map(item => {
        return <SoundItem 
            key = {item.id}
            item = {item}
            isStopped={isStopped}
            setIsStopped={setIsStopped}
        />
    });

    return (
        <div className={`${isDark ? style.sounds__dark : style.sounds__light}`}>
            <span><MdHeadphones size={20} /><p>Find out YOUR perfect sound, you can select multiple tracks at a time.</p><MdMusicNote size={20} /></span>
            <section className={`${isDark ? style.soundsGrid__dark : style.soundsGrid__light}`}>
                {sounds}
            </section>
        </div>
    )
}