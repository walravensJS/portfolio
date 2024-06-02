import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { useEffect } from "react";

export default function ThemeSwitcher() {
    const [isDark, setIsDark] = useContext(ThemeContext);

    useEffect(() => {
        if (isDark) {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
    }, [isDark]);
    const handleClick = () => {
        setIsDark(!isDark);
    };

    return (
        <label className="switch">
            <input type="checkbox" checked={isDark} onChange={handleClick} />
            <span className="slider"></span>
        </label>
    );
}
