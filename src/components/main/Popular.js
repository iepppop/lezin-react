import styled from 'styled-components';
import { populars } from './PopularData';
import { populars2 } from './Popular2Data';
import React, { useState, useRef, useEffect } from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-router-dom';
import dayweb from '../dayweb.json'

const Popular = ({ title, data, filterRandom }) => {
    const [seeArrow, setSeeArrow] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const ref = useRef(null); 
    const slideref = useRef(null);   
    const webtoon = dayweb.webtoon;

    const NextSlider = () => {
        if (currentIndex >= populars.length - 1) {
            return;
        } else {
            setCurrentIndex(currentIndex + 1);
        }
    }

    const PrevSlider = () => {
        if (currentIndex === 0) {
            return;
        } else {
            setCurrentIndex(currentIndex - 1);
        }
    }

    useEffect(() => {
        ref.current.style.transform = `translateX(-${currentIndex}00%)`;
        slideref.current.style.width = `${populars.length / 5 * 100}%`;
        
    })



    return (
        <Box>
            <Container onMouseOver={() => setSeeArrow(true)} onMouseOut={() => setSeeArrow(false)}>
                <ButtonWrap style={{ opacity: `${seeArrow ? '1' : '0'}` }}>
                    {currentIndex === 0 ? null : (
                        <Prev onClick={() => PrevSlider()}><MdKeyboardArrowLeft /></Prev>
                    )}

                    {currentIndex === 1 ? null : (
                        <Next onClick={() => NextSlider()}><MdKeyboardArrowRight /></Next>
                    )}
                </ButtonWrap>
                <Title>
                    {title}
                </Title>
                <Hidden>
                    <TopWrap ref={ref}>
                    <Wrapper ref={slideref}>
                            {title === '금주의 화제작' ? (
                                   < >
                                    {populars.map((popular, index) => {
                                        return (
                                            <Slider key={popular.name}>
                                                   <Link to={`${popular.link}`}>
                                                {/* {
                                                    index < 3 ? (
                                                        <RibbonWrap>
                                                    <Ribbon>
                                                    
                                                        </Ribbon>
                                                            <Ranking>{index + 1}위</Ranking>
                                                        </RibbonWrap>
                                                        ) : (null)
                                                } */}

                                                <ImgBox>
                                                    <img src={popular.img} alt={popular.name} />
                                                    <Rank><h2>{index + 1}</h2></Rank>
                                                    <News>
                                                        {popular.new !== undefined ? (<New>{popular.new}</New>) : (<></>)}
                                                        {popular.up !== undefined ? (<Up>{popular.up}</Up>) : (<></>)}
                                                    </News>
                                                </ImgBox>
                                                <h1>{popular.name}</h1>
                                                <span>{popular.genre}&nbsp;&nbsp;l</span><h2>{popular.author}</h2>
                                                </Link>
                                            </Slider>
                                            
                                        )
                                    })}
                                </>
                            ) : (
                                <>
                                    {populars2.map((popular, index) => {
                                        return (
                                            <Slider key={popular.name}>
                                                  <Link to={`${popular.link}`}>
                                                {/* {
                                                    index < 3 ? (
                                                    
                                                        <RibbonWrap>
                                                        <Ribbon>
                                                        
                                                            </Ribbon>
                                                                <Ranking>{index + 1}위</Ranking>
                                                            </RibbonWrap>    ) : (null)
                                                } */}
                                                <ImgBox>
                                                    <img src={popular.img} alt={popular.name} />
                                                    <Rank><h2>{index + 1}</h2></Rank>
                                                    <News>
                                                        {popular.new !== undefined ? (<New>{popular.new}</New>) : (<></>)}
                                                        {popular.up !== undefined ? (<Up>{popular.up}</Up>) : (<></>)}
                                                    </News>
                                                </ImgBox>
                                                <h1>{popular.name}</h1>
                                                <span>{popular.genre}&nbsp;&nbsp;l</span><h2>{popular.author}</h2>
                                                </Link>
                                            </Slider>
                                        )
                                    })}
                              </>
                            )}
                            </Wrapper>
                   

                    </TopWrap>
                </Hidden>
            </Container>
        </Box>
    )
}
export default Popular;

const Box = styled.div`
    max-width:1320px;
    margin: 80px auto 100px auto;
    height:410px;
    padding:0 0 0 20px;
`

const Container = styled.div`
    width:100%;
    height: 100%;
    padding:0;
    position:relative;
`

const ButtonWrap = styled.div`
    position:relative;
    top:50%;
`

const Next = styled.div`
    position:absolute;
    z-index: 2;
    right:-14px;
    top:50%;
    transform:translate(0,-50%);
    background:rgba(255,255,255,0.8);
    padding:20px 20px 15px 20px;
    border-radius:50%;
    color:#000;
    border: 1px solid #eee;
    font-size:20px;
    z-index:999;
    cursor: pointer;
`

const Prev = styled.div`
    position:absolute;
    z-index: 2;
    background:#red;
    left:-29px;
    top:50%;
    transform:translate(0,-50%);
    background:rgba(255,255,255,0.8);
    padding:20px 20px 15px 20px;
    border-radius:50%;
    color:#000;
    border: 1px solid #eee;
    font-size:20px;
    z-index:999;
    cursor: pointer;
`

const Title = styled.div`
    font-size:20px;
    font-weight:700;
    margin: 30px 0 30px 0;            
`

const TopWrap = styled.div`
    position: absolute;
    width:100%;
    height: 100%;
    transition:0.3s;
    left:0;
`

const Wrapper = styled.div`
    display:flex;

`

const WrapSlide = styled.div`
    display:flex;

`

const Slider = styled.div`
    width:20%;
    padding: 0 0 0 20px;
    position:relative;
    box-sizing:border-box;
    height:450px;

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

    &:nth-child(1){
        padding:0;
    }
    
    &:nth-child(10){
        padding:0 20px 0 20px;
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

const News = styled.div`
    position:absolute;
    display:flex;
    width:100%;
    top:0;
    right:0;
    justify-content:end;
    margin:10px 10px 0 0;
`

const New = styled.div`
     background:#00ad00;
    // background:#ed1c24;
    border-radius:10px;
    padding:4px 10px 5px 10px;
    font-size:10px;
    font-weight:800;
    color:white;
    transform:scale(0.9);
`

const Up = styled.div`
    background:#ff208b;
    border-radius:10px;
    padding:4px 10px 5px 10px;
    font-size:10px;
    font-weight:800;
    color:white;

    transform:scale(0.9);
`

const RibbonWrap = styled.div`
    position:relative;
`

const Ribbon = styled.div`
    display: inline-block;
    position: absolute;
    right: 44px; 
    top: 10px;
    z-index:99;
    &:before,
    &:after {
        content: "";
        display: block;
        position: absolute;
        height: 18px;
        bottom: -8px;
        border: 18px solid #ed1c24;    
    }
    &:before {
        border-bottom-color: transparent;
        bottom: -40px;
    }
`

const Ranking = styled.div`
    position:absolute;
    color:#fff;
    top:10px;
    font-size:12px;
    z-index:100;
    font-weight:500;
    right: 17px;
`

const Hidden = styled.div`
    overflow: hidden;
    width: 100%;
    height: 100%;
    position:absolute;
`
