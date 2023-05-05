import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import style from "./Footer.module.css"

export default function Footer() {
    const {isDark} = useContext(ThemeContext)
    return(
        <div className={`${isDark ? style.footer__dark : style.footer__light}`}>
            <small>Created by Claudia Cavalleri © 2023</small>
        </div>
    )
}