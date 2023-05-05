import React  from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import TimerPage from "./pages/TimerPage/TimerPage";
import ThemeContextProvider from "./context/ThemeContext";


export default function App() {
    return (
        <ThemeContextProvider>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Home />}/>
                    <Route exact path="timer" element={<TimerPage />}/>
                </Routes>
            </BrowserRouter>
        </ThemeContextProvider>
    )
}

