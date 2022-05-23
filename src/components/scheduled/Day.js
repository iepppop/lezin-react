import { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import dayweb from '../dayweb.json';
import ReactPaginate from 'react-paginate';

const Day = () => {
    const webtoon = dayweb.webtoon;
    const [data, setData] = useState([webtoon]);  
    const [currentItems, setCurrentItems] = useState([webtoon]);
    const [currentClick, setCurrentClick] = useState(1);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 13;

    const filterResult = (day) => {
        const result = webtoon.filter((curDate) => {
            return curDate.day === day;
        });
        setCurrentItems(result);
    }

    useEffect(() => {
      const endOffset = itemOffset + itemsPerPage;
      setCurrentItems(webtoon.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(webtoon.length / itemsPerPage));
    }, [itemOffset, itemsPerPage]);

    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % webtoon.length;
      setItemOffset(newOffset); 
    }

    const toggleTab = (index) => {
        setCurrentClick(index);
    }
        
    return (
        <Contain>
            <DayScheduled>
                <button onClick={() => {filterResult('mon'); toggleTab(1)}} style={{background:`${currentClick === 1 ? 'red' : ''}`, color:`${currentClick === 1 ? 'white' : ''}`}}>월</button>
                <button onClick={() => {filterResult('tue'); toggleTab(2)}} style={{background:`${currentClick === 2 ? 'red' : ''}`, color:`${currentClick === 2 ? 'white' : ''}`}}>화</button>
                <button onClick={() => {filterResult('wed'); toggleTab(3)}} style={{background:`${currentClick === 3 ? 'red' : ''}`}}>수</button>
                <button onClick={() => {filterResult('thu'); toggleTab(4)}} style={{background:`${currentClick === 4 ? 'red' : ''}`}}>목</button>
                <button onClick={() => {filterResult('fri'); toggleTab(5)}} style={{background:`${currentClick === 5 ? 'red' : ''}`}}>금</button>
                <button onClick={() => {filterResult('sat'); toggleTab(6)}} style={{background:`${currentClick === 6 ? 'red' : ''}`}}>토</button>
                <button onClick={() => {filterResult('sun'); toggleTab(7)}} style={{background:`${currentClick === 7 ? 'red' : ''}`}}>일</button>
                <button onClick={() => {filterResult('ten'); toggleTab(8)}} style={{background:`${currentClick === 8 ? 'red' : ''}`}}>열흘</button>
            </DayScheduled>
            <DayWrap>
            {
                currentItems.map((values, idx) => {
                    const { id, title, artist, genre, thumbnail } = values;
                    return (
                        <>
                            <Slider key={title}>
                                <ImgBox>
                                    <img src={thumbnail} alt={title} />
                                    <Rank><h2>{idx + 1}</h2></Rank>
                                </ImgBox>
                                <h1>{title}</h1>
                                <span>{genre}&nbsp;&nbsp;l</span><h2>{artist}</h2>

                            </Slider>
                        </>
                    )
                })}
              
                    <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        containerClassName="paginate"
        pageLinkClassName="page-num"
        previousLinkClassName="page-num"
        nextLinkClassName="page-num"
        activeLinkClassName="active"
      />
  
                </DayWrap>
                </Contain>
    )
}
export default Day;

const Contain = styled.div`
    max-width:1320px;
    height: 100%;
    margin: 0 auto;

   .paginate {
        display:flex;
        align-items: center;
        justify-content: center;
        gap:5px;

        .page-num{
            padding: 8px 15px;
            cursor: pointer;
            border-radius:50%;
            font-weight: 400;
        }

        .page-num:hover{
            opacity:0.3;
        }


    }

    .paginate .active{
        background:red;
        color:white;
    }
`

const DayScheduled = styled.div`
    padding:20px 20px 25px 20px;
    margin:25px 20px;
    text-align:center;

    button{
  
        padding:10px 20px;
        margin:0 10px;
        font-size:16px;
        border-radius:25px;
        cursor: pointer;
        font-weight:600;
    }
`

const DayWrap = styled.div`
    width:100%;
    height:100%;
    padding:0 20px 0 0;
`


const Slider = styled.div`
    width:20%;
    padding: 0 0 0 20px;
    position:relative;
    box-sizing:border-box;
    height:450px;
    display:inline-block;

    h1{
        font-weight: 500;
        font-size:18px;
        margin:15px 0 0 15px;
    }

    h2{
        margin:3px 0 0 0;
        font-weight:500;
        opacity:0.8;
        font-size:14px; 
        display:inline-block;
    }

    span{
        display:inline-block;
        font-weight:500;
        opacity:0.4;
        font-size:14px; 
        margin:0 10px 0 15px;

    }

`

const ImgBox = styled.div`
    width:100%;
    height:300px;
    overflow:hidden;
    border-radius:10px;
    position:relative;

    &:hover img{
        transform: scale(1.08);
    }

    img{
        width:100%;
        height:300px;
        object-fit: cover;
        transition:0.3s;
    }
`

const Rank = styled.div`
    position:absolute;
    bottom:-0;
    left:0;
    background: linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.4) 100%);
    width:100%;
    height:100%;

    h2{
        z-index:9999;
        font-size:70px;
        position:absolute;
        bottom:-18px;
        left:10px;
        color:white;
    }
`