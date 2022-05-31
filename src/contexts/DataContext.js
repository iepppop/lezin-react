import { createContext, useContext, useState } from 'react';
import dayweb from '../components/dayweb.json'

const DataContext = createContext({
})

export const useData = () => useContext(DataContext);

export const DataContextProvider = ({ children }) => {
    const webtoon = dayweb.webtoon;
    const [currentItems, setCurrentItems] = useState([webtoon]);

    const filterResult = (value) => {
        const result = webtoon.filter((curDate) => {
            return curDate.genre === value;
        });
        setCurrentItems(result);
    }

    const filterResultDay = (value) => {
        const result = webtoon.filter((curDate) => {
            return curDate.day === value;
        });
        setCurrentItems(result);
    }

    const value = {
        currentItems,
        filterResult,
        filterResultDay,
    }
    return <DataContext.Provider value={value}>{children}</DataContext.Provider>
}