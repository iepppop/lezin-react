import styled from 'styled-components';
import { populars } from './PopularData';
import { populars2 } from './Popular2Data';
import Button from './Button';
import React, { useState, useRef, useEffect } from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

const Popular = ({ title }) => {
    const [seeArrow, setSeeArrow] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const ref = useRef(null);

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

                        <Wrapper>

                            {title === '금주의 화제작' ? (
                                <>
                                    {populars2.map((popular, index) => {
                                        return (
                                            <Slider key={popular.name}>
                                                {
                                                    index < 3 ? (
                                                        <RibbonWrap>
                                                    <Ribbon>
                                                    
                                                        </Ribbon>
                                                            <Ranking>{index + 1}위</Ranking>
                                                        </RibbonWrap>
                                                        ) : (null)
                                                }
                                                  <ImgBox>
                                                <img src={popular.img} alt={popular.name} />
                                                </ImgBox>
                                                <h1>{popular.name}</h1>
                                                <span>{popular.genre}&nbsp;&nbsp;l</span><h2>{popular.author}</h2>

                                            </Slider>
                                        )
                                    })}
                                </>
                            ) : (
                                <>
                                    {populars.map((popular, index) => {
                                        return (
                                            <Slider key={popular.name}>
                                                {
                                                    index < 3 ? (
                                                    
                                                        <RibbonWrap>
                                                        <Ribbon>
                                                        
                                                            </Ribbon>
                                                                <Ranking>{index + 1}위</Ranking>
                                                            </RibbonWrap>    ) : (null)
                                                }
                                                <ImgBox>
                                                <img src={popular.img} alt={popular.name} />
                                                </ImgBox>
                                                <h1>{popular.name}</h1>
                                                <span>{popular.genre}&nbsp;&nbsp;l</span><h2>{popular.author}</h2>
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
    padding: 0 20px;
`

const Container = styled.div`
    position:relative;
    width:100%;
    height: 100%;
`

const ButtonWrap = styled.div`

`

const Next = styled.div`
    position:absolute;
    z-index: 2;
    right:-32px;
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
    left:-32px;
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

const Contain = styled.div`
    width:100%;
    height:100%;
    position: absolute;
    z-index:99;
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
    width:200%;
`

const Wrap = styled.div`
    width:100%;
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
        margin:15px 0 0 0;
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
        margin:0 10px 0 0;

    }

    &:nth-child(1){
     padding:0;
    }

    &:nth-child(6){
        padding: 0 0 0 1px;
       }


`

const ImgBox = styled.div`
    width:100%;
    height:300px;
    overflow:hidden;
    border-radius:10px;

    &:hover img{
        transform:scale(1.1);
    }

    img{
        width:100%;
        height:300px;
        object-fit: cover;
        transition:0.3s;
    }
`

const RibbonWrap = styled.div`

      
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
    right:16px;
    font-size:12px;
    z-index:100;
`

const Hidden = styled.div`
    overflow: hidden;
    width: 100%;
    height: 100%;
    position:absolute;
`
