import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";
import style from "./Home.module.css";
import Navbar from "../../components/Navbar/Navbar";
import Quotes from "../../components/Quotes/Quotes";
import Footer from "../../components/Footer/Footer";

export default function Home() {
    const {isDark} = useContext(ThemeContext);

    return(
        <main className={`${isDark ? style.home__dark : style.home__light}`}>
            <Navbar />
            <Quotes />
            <div className={style.startContainer}>
                <button className={`${isDark ? style.startButton__dark : style.startButton__light}`}>
                    <NavLink to="/timer" className={style.link}>
                        Start meditation  
                    </NavLink>
                </button>
            </div>
            <Footer />
        </main>

    )
}


