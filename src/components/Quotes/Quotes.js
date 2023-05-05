import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { ThemeContext } from "../../context/ThemeContext";
import style from "./Quotes.module.css";

export default function Quotes() {
    const requestURL = "https://type.fit/api/quotes";
    const [quote, setQuote] = useState({
        text: `Do, or do not. There is no try.`,
        author: "Yoda"
    });
    const {isDark} = useContext(ThemeContext)

    const getData = async () => {
        const data = await axios.get(requestURL);

        const arrayLength = data.data.length;
        const randomNumber = Math.floor(Math.random() * (arrayLength - 1));
        
        setQuote(prevQuote => prevQuote = (data.data[randomNumber]));
    }

    useEffect(() => {
        setInterval(() => {
            getData();
        }, 5000);
    }, [])
    
    return(
        <section className={`${isDark ? style.quoteContainer__dark : style.quoteContainer__light}`}>
            <p className={style.quoteText}>"{quote.text}"</p>
            <p className={style.quoteAuthor}>- {quote.author}</p>
            <button onClick={getData} className={style.quoteButton}>Change quote</button>
        </section>
    );
    
}