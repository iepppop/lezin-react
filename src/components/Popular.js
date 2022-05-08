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
                                            index < 3 ? (<Ribbon>{index + 1}위</Ribbon>) : (null)
                                        }
                                        <img src={popular.img} alt={popular.name} />
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
                                            index < 3 ? (<Ribbon>{index + 1}위</Ribbon>) : (null)
                                        }
                                        <img src={popular.img} alt={popular.name} />
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
    )
}
export default Popular;

const Container = styled.div`
    max-width:1280px;
    margin: 80px auto 100px auto;
    position:relative;
    height:410px;
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

    img{
        width:100%;
        height:300px;
        object-fit: cover;
        border-radius:10px;
    }

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

const Ribbon = styled.div`
    position:absolute;
    right:30px;
    top:10px;
    z-index:1;
    color:#fff;
    font-size:13px;
    width:24px;

    :after {
        content: "";
        font-size: 10px;
        position: absolute;
        height:10px;
        border: 1.5em solid #ff0008;
        z-index: -1;
        top: -1em;
        border-top-width: 20px;
        border-bottom-color: transparent;
        right: 0;
    }
`

const Hidden = styled.div`
    overflow: hidden;
    width: 100%;
    height: 100%;
    position:absolute;
`
