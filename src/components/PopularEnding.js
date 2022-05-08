import styled from 'styled-components';
import { popularEnding } from './PopularEndingData';
import React, { useState, useRef, useEffect } from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

const PopularEnding = () => {
    const [current, setCurrent] = useState(0);
    const ref = useRef(null);
    const [seeArrow, setSeeArrow] = useState(false);

    const NextSlide = () => {
        if (current === 1) {
            return;
        } else {
            setCurrent(current + 1);
        }
    }

    const PrevSlide = () => {
        if (current === 0) {
            return;
        } else {
            setCurrent(current - 1);
        }
    }

    useEffect(() => {
        ref.current.style.transform = `translateX(-${current}00%)`;
    }, [current])


    return (
        <Container onMouseOver={() => setSeeArrow(true)} onMouseOut={() => setSeeArrow(false)}>
            <h1>인기 완결 작품</h1>
            <ButtonWrap style={{ opacity: `${seeArrow ? '1' : '0'}` }}>
                {current === 0 ? null : (
                    <Prev onClick={() => PrevSlide()}><MdKeyboardArrowLeft /></Prev>
                )}

                {current === 1 ? null : (
                    <Next onClick={() => NextSlide()}><MdKeyboardArrowRight /></Next>
                )}
            </ButtonWrap>
            <SliderWrap>
            <Slider ref={ref}>
                <Slide>
                    {popularEnding.map((ending, index) => {
                        return (
                            <Slides>
                                <img src={ending.img} />
                                <SlidesBack style={{ background: `linear-gradient(to bottom, transparent 30%, ${ending.color} 65%` }} />
                                <SlideLogo>
                                    <img src={process.env.PUBLIC_URL + `${ending.logo}`} alt={ending.name} />
                                </SlideLogo>
                            </Slides>
                        )
                    })}
                </Slide>
            </Slider>
            </SliderWrap>
        </Container>
    )
}
export default PopularEnding;

const Container = styled.div`
    max-width:1280px;
    margin:120px auto 100px auto;
    padding:0 20px;
    height:440px;
    position:relative;

    h1{
        font-size:20px;
        font-weight:700;
    }
`

const ButtonWrap = styled.button`
    width:100%;
    height:420px;
    position:absolute;
    border: none;
    background: none;
`

const Next = styled.button`
    position:absolute;
    z-index: 2;
    background:#red;
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

const Prev = styled.button`
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

const SliderWrap = styled.div`
    width:100%;
    height:100%;
    overflow:hidden;
    position:absolute;
`

const Slider = styled.div`
    width:100%;
    height:350px;
    position:absolute;
    margin:40px 0 0 0;
    transition:0.3s;
`

const Slide = styled.div`
    width:200%;
    height:100%;
    display:flex;
`

const Slides = styled.div`
    width:20%;
    height:100%;
    margin: 0 20px 0 0;
    position:relative;
    border-radius:10px;
    overflow:hidden;

    &:last-child {
        margin: 0 0 0 0;
    }

    &:nth-child(5) {
        margin: 0 0 0 0;
    }

    img{
        width: 100%;
        object-fit: cover;
    }
`

const SlidesBack = styled.div`
    height:100%;
    width:100%;
    position:absolute;
    top:0;
`

const SlideLogo = styled.div`
    width: 230px;
    position:absolute;
    left:50%;
    transform: translate(-50%,0);
    bottom:30px;

    img{
        width:100%;
        padding:0 10px;
        box-sizing: border-box;
    }
`