import React, { useContext } from "react";
import { TbMoonStars } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";
import style from "./Navbar.module.css";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

export default function Navbar() {
    const {isDark} = useContext(ThemeContext);

    return(
        <nav className={style.navbar__container}>
            <div className={`${isDark ? style.navbar__dark : style.navbar__light}`}>
                <div>
                    <NavLink to="/" className={`${isDark ? style.homeButton__dark : style.homeButton__light}`}>
                        <TbMoonStars size={30}/> Meditation Time
                    </NavLink>
                </div>
                <div className={style.toggleButton__container}>
                    <ToggleSwitch />
                </div>
            </div>
        </nav>
    )
}

