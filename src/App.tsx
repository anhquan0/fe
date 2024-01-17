import React, { useContext, useEffect } from 'react';
import { About } from './components/about/About';
import { ThemeContextType } from './types/general/ThemeThemeType';
import { ThemeContext } from './context/ThemeProvider';
import { Route, Routes } from 'react-router-dom';
import { Posts } from './components/contents/Posts';


const App: React.FC = () => {
  const themeContext: ThemeContextType | null = useContext(ThemeContext)

  useEffect(() => {
    if(themeContext?.theme) {
      document.body.classList.add('dark');
    }
    return () => document.body.classList.remove('dark');
  }, [themeContext?.theme])

  return (
    <main className='container'>
        <About></About>
        <Posts></Posts>
    </main>
  );
}

export default App;
