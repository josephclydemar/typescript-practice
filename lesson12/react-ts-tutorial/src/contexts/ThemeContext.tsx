import { ReactNode, createContext, useReducer } from "react";


interface ThemeType {
    currentTheme: 'light-mode' | 'dark-mode';
    backgroundColor: string;
    textColor: string;
}

interface ThemeAction {
    actionType: 'dark-mode' | 'light-mode';
}

/*
color: #1a1a1a;
background-color: #ffffff;
*/

function changeThemeReducer(state: ThemeType, action: ThemeAction): ThemeType {
    const { actionType } = action;
    switch(actionType) {
        case 'light-mode':
            return {
                currentTheme: 'light-mode',
                backgroundColor: '#ffffff',
                textColor: '#1a1a1a'
            };
        case 'dark-mode':
            return {
                currentTheme: 'dark-mode',
                backgroundColor: '#1a1a1a',
                textColor: '#ffffff'
            };
        default:
            return state;
    }
}


type ThemeContextProps = {
    children: ReactNode;
}

type ThemeContextType = {
    theme: ThemeType,
    themeDispatch: React.Dispatch<ThemeAction>;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export function ThemeContextProvider({ children }: ThemeContextProps) {
    const [theme, themeDispatch] = useReducer<(state: ThemeType, action: ThemeAction) => ThemeType>(
        changeThemeReducer,
        {
            currentTheme: 'light-mode',
            backgroundColor: '#ffffff',
            textColor: '#1a1a1a'
        }
    );

    return (
        <ThemeContext.Provider value={{ theme, themeDispatch }}>
            { children }
        </ThemeContext.Provider>
    );
}


export default ThemeContext;