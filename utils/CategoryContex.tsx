import { createContext } from "react";

type CategoryContextType = {
    category?: string;
    setCategory: Function
}

export const CategoryContext = createContext<CategoryContextType>({
    category: 'politics',
    setCategory: (category: string) => {}
})

export const CategoryContextProvider = CategoryContext.Provider