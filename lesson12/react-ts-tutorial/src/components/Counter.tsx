import { Context, useContext, useState } from 'react';

import ThemeContext from '../contexts/ThemeContext';


interface ThemeType {
    currentTheme: 'light-mode' | 'dark-mode';
    backgroundColor: string;
    textColor: string;
  }
  
  interface ThemeAction {
    actionType: 'dark-mode' | 'light-mode';
  }
  
  
  type ThemeContextType = {
    theme: ThemeType,
    themeDispatch: React.Dispatch<ThemeAction>;
  };

export default function Counter() {
    const { theme } = useContext<ThemeContextType>(ThemeContext as Context<ThemeContextType>);

    const [count, setCount] = useState<number>(0);


    function countUp(): void {
        setCount(prev => prev + 1);
    }
    function countDown(): void {
        setCount(prev => prev - 1);
    }
    return (
        <div>
            <h3>value: { count }</h3>
            <div>
                <button style={{ color: theme.backgroundColor, backgroundColor: theme.textColor }} onClick={countUp}>Count Up</button>
                <button style={{ color: theme.backgroundColor, backgroundColor: theme.textColor }} onClick={countDown}>Count Down</button>
            </div>
        </div>
    );
};
