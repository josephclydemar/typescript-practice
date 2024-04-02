import { ReactNode, createContext, useState } from "react";

type TitleContextProps = {
    children: ReactNode;
}

type TitleContextType = {
    title: string,
    setTitle: React.Dispatch<React.SetStateAction<string>>;
};

const TitleContext = createContext<TitleContextType | null>(null);

export function TitleContextProvider({ children }: TitleContextProps) {
    const [title, setTitle] = useState<string>('');
    return (
        <TitleContext.Provider value={{ title, setTitle }}>
            { children }
        </TitleContext.Provider>
    );
}

export default TitleContext;