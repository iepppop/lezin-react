import { useState } from 'react';
import styled from 'styled-components';

const SearchBar = ({ placeholder, data}) => {
    const [filteredData, setFilterData] = useState([]); 
    const handleFilter = (event) => {
        const searchWord = event.target.value;
        const newFilter = data.filter((value)=> {
            return value.title.toLowerCase().includes(searchWord.toLowerCase());
        });
        if(searchWord === ""){
            setFilterData([]);
        }else{
            setFilterData(newFilter);
        }
    }
  return (
    <Contain>
        <input type="text" placeholder={placeholder} onChange={handleFilter}/>
        {filteredData.length !== 0 && (
            <DataResult>
            {filteredData.slice(0,3).map((value, key)=>{ 
                return(
                    <ValueWrap>
                        <ImgWrap>
                        <img src={value.thumbnail} />
                        </ImgWrap>
                        <Content>
                    <h1>{value.title}</h1>
                    <h2>{value.artist}</h2>
                    </Content>
                    </ValueWrap>
                )
            })}
        </DataResult>
        )}
    </Contain>
  )
}
export default SearchBar;

const Contain = styled.div`
    position:relative;   
    width:100%;
    margin:0 0 0 10px;

    input{
        width:300px;
    }
`

const DataResult = styled.div`
    background:rgba(255,255,255,0.9);
    position:absolute;
    max-height:300px;
    overflow-y:auto;  
    width:100%;
    margin:17px 0 0 0;
`

const ValueWrap = styled.div`
    display:block;
    display:flex;
    width:100%;
    padding:10px;
    border-bottom:1px solid #eee;

    &:hover{
        background:rgba(255,255,255,0.8);
    }
`

const ImgWrap = styled.div`
    width:50px;
    height:50px;
    oveflow:hidden;
    img{
        width:50px;
        height:50px;
        vertical-align:bottom;
        object-fit: cover;
        border-radius:15px;
    }
`

const Content = styled.div`
    text-align:left;
    font-size:12px;
    height:50px;
    display:flex;
    flex-direction: column;
    justify-content:center;
    padding:0 0 0 20px;

    h1{
        font-size:15px; 
        font-weight:600;
        color: #2d2d2d;
    }

    h2{
        font-size:12px; 
        font-weight:600;
        color: #2d2d2d;
    }
`