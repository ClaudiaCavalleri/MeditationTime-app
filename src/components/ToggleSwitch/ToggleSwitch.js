import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import style from "./ToggleSwitch.module.css"
import { MdDarkMode, MdLightMode } from "react-icons/md";

export default function ToggleSwitch() {
    const {isDark, toggleMode} = useContext(ThemeContext);

    return (
        <>
            <label className={style.switch}>
                <input type="checkbox" className={style.inputToggleSwitch}/>
                <span className={style.slider} onClick={toggleMode}>
                    {isDark ? 
                        <MdDarkMode size={30}/> 
                        :
                        <MdLightMode size={30}/>
                    } 
                </span>
            </label>
        </>
    )
}