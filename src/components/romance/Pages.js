import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import dayweb from '../dayweb.json';

const Pages = () => {
    const webtoon = dayweb.webtoon;
    const [currentItems, setCurrentItems] = useState([webtoon]);
    

    const filterResult = (day) => {
        const result = webtoon.filter((curDate) => {
            return curDate.genre === day;
        });
        setCurrentItems(result);
    }

    useEffect(() => {
        filterResult('로맨스');
    }, [])

    return (
        <Container>
            <Wrap>
            {
                currentItems.map((values, idx) => {
                    const { id, title, artist, genre, thumbnail } = values;
                    return (
                            <Slider key={title}>
                                <ImgBox>
                                    <img src={thumbnail} alt={title} />
                                    <Rank><h2></h2></Rank>
                                </ImgBox>
                                <h1>{title}</h1>
                                <span>{artist}</span>

                            </Slider>
                    )
                })}
                </Wrap>
        </Container>
    )
}
export default Pages;

const Container = styled.div`
    max-width:1320px;
    margin: 0 auto;
    height:350px;
    position:relative;
`
const Wrap = styled.div`
    width:100%;
    height:100%;
    padding:0 20px 0 0;
`

const Slider = styled.div`
    width:20%;
    padding: 0 0 0 20px;
    position:relative;
    box-sizing:border-box;
    height:400px;
    display:inline-block;
    z-index:999;

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