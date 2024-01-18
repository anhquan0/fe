import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeProvider";
import { ThemeContextType } from "../../types/general/ThemeThemeType";

export const DarkMode: React.FC = () => {

    const themeContext: ThemeContextType | null = useContext(ThemeContext)

    function changeTheme() {
        themeContext?.setTheme(!themeContext.theme)
    }

    return (
        <div className='about-footer dark-mode-toggle'>
            <div><span>Dark Mode</span></div>
            <div><i className={'fa-solid ' + ((themeContext?.theme) ? 'fa-toggle-on' : 'fa-toggle-off') + ' fa-xl' } onClick={changeTheme}></i></div>
        </div>
    )
}