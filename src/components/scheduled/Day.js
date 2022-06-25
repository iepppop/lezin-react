import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { useData } from '../../contexts/DataContext';

const Day = () => {
    const [currentClick, setCurrentClick] = useState(1);
    // const [pageCount, setPageCount] = useState(0);
    // const [itemOffset, setItemOffset] = useState(0);
    // const itemsPerPage = 15;

    const { filterResultDay, currentItems } = useData();

    // useEffect(() => {
    //   const endOffset = itemOffset + itemsPerPage;
    //   setCurrentItems(webtoon.slice(itemOffset, endOffset));
    //   setPageCount(Math.ceil(webtoon.length / itemsPerPage));
    // }, [itemOffset, itemsPerPage]);

    // const handlePageClick = (event) => {
    //   const newOffset = (event.selected * itemsPerPage) % webtoon.length;
    //   setItemOffset(newOffset); 
    // }

    const toggleTab = (index) => {
        setCurrentClick(index);
    }
    
    useEffect(() => {
        filterResultDay('mon');
    },[])
        
    return (
        <Contain>
                    
            <DayScheduled>
                <button onClick={() => {filterResultDay('mon'); toggleTab(1)}} style={{background:`${currentClick === 1 ? '#ed1c24' : ''}`, color:`${currentClick === 1 ? 'white' : ''}`}}>월</button>
                <button onClick={() => {filterResultDay('tue'); toggleTab(2)}} style={{background:`${currentClick === 2 ? '#ed1c24' : ''}`, color:`${currentClick === 2 ? 'white' : ''}`}}>화</button>
                <button onClick={() => {filterResultDay('wed'); toggleTab(3)}} style={{background:`${currentClick === 3 ? '#ed1c24' : ''}`, color:`${currentClick === 3 ? 'white' : ''}`}}>수</button>
                <button onClick={() => {filterResultDay('thu'); toggleTab(4)}} style={{background:`${currentClick === 4 ? '#ed1c24' : ''}`, color:`${currentClick === 4 ? 'white' : ''}`}}>목</button>
                <button onClick={() => {filterResultDay('fri'); toggleTab(5)}} style={{background:`${currentClick === 5 ? '#ed1c24' : ''}`, color:`${currentClick === 5 ? 'white' : ''}`}}>금</button>
                <button onClick={() => {filterResultDay('sat'); toggleTab(6)}} style={{background:`${currentClick === 6 ? '#ed1c24' : ''}`, color:`${currentClick === 6 ? 'white' : ''}`}}>토</button>
                <button onClick={() => {filterResultDay('sun'); toggleTab(7)}} style={{background:`${currentClick === 7 ? '#ed1c24' : ''}`, color:`${currentClick === 7 ? 'white' : ''}`}}>일</button>
                <button onClick={() => {filterResultDay('ten'); toggleTab(8)}} style={{background:`${currentClick === 8 ? '#ed1c24' : ''}`, color:`${currentClick === 8 ? 'white' : ''}`}}>열흘</button>
            </DayScheduled>
            <DayWrap>
            {
                currentItems.map((values, idx) => {
                    const { id, title, artist, genre, thumbnail, en } = values;
                    return (
                        <>
                            <Slider key={title}>
                            <Link to={`/comics/${en}`}>
                                <ImgBox>
                                    <img src={thumbnail} alt={title} />
                                    <Rank><h2></h2></Rank>
                                </ImgBox>
                                <h1>{title}</h1>
                                <span>{genre}&nbsp;&nbsp;l</span><h2>{artist}</h2>
                            </Link>
                            </Slider>
                        </>
                    )
                })}
              {/* <Paginate>
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
  </Paginate> */}
                </DayWrap>
                </Contain>
    )
}
export default Day;

const Contain = styled.div`
    width:100%;
    height: 100%;
    margin: 0 auto;

   .paginate {
        display:flex;
        align-items: center;
        justify-content: center;


        .page-num{
            padding: 8px 15px;
            cursor: pointer;
            font-weight: 400;
            
        }

        .page-num:hover{
            opacity:0.3;
        }


    }

    .paginate .active{
        border: 1px solid #eee;
        border-radius:5px;
    }
`

const DayScheduled = styled.div`
    padding:0px 0 30px 0;
    max-width:1280px;
    margin: 50px auto 10px auto;
    text-align:center;

    button{
        padding:10px 24px;
        font-size:16px;
        border-radius:22px;
        cursor: pointer;
        font-weight:600;
        position:relative;
        margin:0 10px 0 0;
    }
`
const Line = styled.div`
    position:absolute;
    bottom:3px;
    width:50%;
    height:5px;
    background:red;
    left:50%;
    transform:translate(-50%,0);
    z-index:-1;
`


const DayBorder = styled.div`
    width:100%;
    height:1px;
    border-bottom:1px solid #f8f8f8;
    margin:0 0 30px 0;
`

const DayWrap = styled.div`
    max-width:1320px;
    height:100%;
    padding:0 20px 0 0;
    margin: 0 auto;
`


const Slider = styled.div`
    width:16.66%;
    padding: 0 0 0 20px;
    position:relative;
    box-sizing:border-box;
    height:280px;
    display:inline-block;

    h1{
        font-weight: 500;
        font-size:15px;
        margin:15px 0 0 15px;
    }

    h2{
        margin:3px 0 0 0;
        font-weight:500;
        opacity:0.8;
        font-size:13px; 
        display:inline-block;
    }

    span{
        display:inline-block;
        font-weight:500;
        opacity:0.4;
        font-size:13px; 
        margin:0 10px 0 15px;

    }

`

const ImgBox = styled.div`
    width:100%;
    height:200px;
    overflow:hidden;
    border-radius:10px;
    position:relative;

    &:hover img{
        transform: scale(1.08);
    }

    img{
        width:100%;
        height:250px;
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

const Paginate = styled.div`
    margin:40px 0 40px 0;
`