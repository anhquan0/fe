import { useState } from "react";
import React from "react";
import { ThemeContextType, ThemeProviderProps } from "../types/general/ThemeThemeType";

export const ThemeContext = React.createContext<ThemeContextType | null>(null);

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const [theme, setTheme] = React.useState(true)

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}
