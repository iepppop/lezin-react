import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useData } from "../contexts/DataContext";
import styled from 'styled-components';

const Comics = () => {
    const { id } = useParams();
    const { currentItems } = useData();
    const comicslist = currentItems.filter(list => list.en === String(id));
   return (
    <div>
       {comicslist.map((comic,idx)=> {
           return(
               <>
               <img src={comic.thumbnail}/>
                </>
           )
       })}
        </div>
  )
}
export default Comics;

