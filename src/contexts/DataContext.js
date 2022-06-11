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

    const filterResultFree = (value) => {
        const result = webtoon.filter((curDate) => {
            return curDate.free === value;
        });
        setCurrentItems(result);
    }

    const filterRandom = (array) => {
        const result = array.sort(() => Math.random() - 0.5);
        setCurrentItems(result);
    }

    const [wordEntered, setWordEntered] = useState("");
    const [itemSearch, setItemSearch] = useState([webtoon]);

    const filterSearch = (event) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord);
        const newFilter = webtoon.filter((item)=> {
            return item.title.toLowerCase().includes(searchWord.toLowerCase());
        });
        if(searchWord === ""){
            setItemSearch([]);
        }else{
            setItemSearch(newFilter);
        }
    };

    const clearInput = () => {
        setWordEntered("");
        setItemSearch([]);
    }
    
    const value = {
        currentItems,
        filterResult,
        filterResultDay,
        filterResultFree,
        filterSearch,
        clearInput,
        wordEntered,
        itemSearch,
        filterRandom
    }
    return <DataContext.Provider value={value}>{children}</DataContext.Provider>
}