export interface ThemeContextType {
    theme: boolean;
    setTheme: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ThemeProviderProps {
    children?: React.ReactNode;
}