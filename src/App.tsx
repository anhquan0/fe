import React, { useContext, useEffect } from 'react';
import { About } from './components/about/About';
import { ThemeContextType } from './types/general/ThemeThemeType';
import { ThemeContext } from './context/ThemeProvider';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { PostList } from './components/contents/PostList';


const App: React.FC = () => {
  const themeContext: ThemeContextType | null = useContext(ThemeContext)

  const router = createBrowserRouter([
    {path: "/", element: <><About></About><PostList></PostList></>},
    {path: "/login", element: <><About></About></>}
  ])

  useEffect(() => {
    if(themeContext?.theme) {
      document.body.classList.add('dark');
    }
    return () => document.body.classList.remove('dark');
  }, [themeContext?.theme])

  return (
    <main className='container'>
      <RouterProvider router={router}></RouterProvider>
    </main>
  );
}

export default App;
