import styled from 'styled-components';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import React, { useState, useEffect, useRef } from 'react';
import { firstSliders } from './FirstSliderData';

const FirstSlider = () => {
    const [seeArrow, setSeeArrow] = useState(false);
    const ref = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const Nextslide = () => {
        if (currentIndex >= firstSliders.length - 1) {
            setCurrentIndex(0);
        } else {
            setCurrentIndex(currentIndex + 1);
        }
    }

    const Prevslide = () => {
        if (currentIndex === 0) {
            setCurrentIndex(firstSliders.length - 1);
        } else {
            setCurrentIndex(currentIndex - 1);
        }
    }

    useEffect(() => {
        ref.current.style.transform = `translateX(-${currentIndex}00%)`;
    })

    return (
        <Contain>
            <Container >
                <SliderWrap ref={ref}>
                    <Slider>
                        {firstSliders.map((slider, index) => {
                            return (
                                <Slides style={{ background: `${slider.color}` }} onMouseOver={() => setSeeArrow(true)} onMouseOut={() => setSeeArrow(false)} key= {slider.one}>
                                   {seeArrow ? (
                                        <Effect style={{ transform: `${slider.hover}`}}>
                                        <img src={slider.effect} alt={index} />
                                    </Effect>
                                   ): (
                                    <Effect>
                                    <img src={slider.effect} alt={index} />
                                </Effect>
                                   )}
                                    <Contentbox>
                                        <h1>
                                            EVENT
                                        </h1>
                                        <h2>
                                            {slider.one}
                                            <p>{slider.two}</p>
                                        </h2>
                                        <span>
                                            <img src={slider.name} alt={index} />
                                        </span>
                                    </Contentbox>
                                    <Imgbox>
                                        <img src={slider.img} alt={index} />
                                    </Imgbox>

                                </Slides>
                            )
                        })}
                    </Slider>
                </SliderWrap>

                <DotsWrap>
                    <Dots>
                        <Dot style={{ opacity: `${currentIndex === 0 ? "1" : "0.6"}` }}></Dot>
                        <Dot style={{ opacity: `${currentIndex === 1 ? "1" : "0.6"}` }}></Dot>
                        <Dot style={{ opacity: `${currentIndex === 2 ? "1" : "0.6"}` }}></Dot>
                        <Dot style={{ opacity: `${currentIndex === 3 ? "1" : "0.6"}` }}></Dot>
                    </Dots>
                    <DotNum>{currentIndex + 1}/{firstSliders.length}</DotNum>
                </DotsWrap>
            </Container>
            <NextButton style={{ opacity: `${seeArrow ? '1' : '0'}` }} onMouseOver={() => setSeeArrow(true)} onMouseOut={() => setSeeArrow(false)} onClick={() => Nextslide()}>
                <MdKeyboardArrowRight />
            </NextButton>
            <PrevButton style={{ opacity: `${seeArrow ? '1' : '0'}` }} onMouseOver={() => setSeeArrow(true)} onMouseOut={() => setSeeArrow(false)} onClick={() => Prevslide()}>
                <MdKeyboardArrowLeft />
            </PrevButton>
        </Contain>
    )
}
export default FirstSlider

const Contain = styled.div`
    max-width:1280px;
    margin: 30px auto;
    position:relative;
`

const Container = styled.div`
    max-width:1280px;
    margin: 30px auto;
    position:relative;
    height:500px;
    border-radius:20px;
    overflow: hidden;
`

const Effect = styled.div`
    position:absolute;
    z-index:1;
    right:-300px;
    top:-50px;
    transition: transform 500ms ease-in-out 25ms;
`

const SliderWrap = styled.div`
    width:100%;
    height:100%;
    cursor: pointer;
    position:absolute;
    transition: 0.4s;

    :hover ${Effect}{
        // transform: translateX(55px) translateY(20px);
    }
`

const Slider = styled.div`
    width: 400%;
    height:100%;
    display:flex;
`

const Slides = styled.div`
    background:linear-gradient(to right, #fec74a, #ebd53f, #fec74a);
    height:100%;
    width:100%;
    border-radius:20px;
    overflow:hidden;
    display:flex;
    position:relative;
    z-index:99;
`

const Imgbox = styled.div`
    width:60%;
    height:100%;
    position:relative;

    img{
        object-fit: cover;
        height:100%;
        position:absolute;
        left:-200px;
    }
`

const Contentbox = styled.div`
    width:40%;
    display:flex;
    flex-direction:column;
    align-items:start;
    justify-content:center;
    padding:0 0 0 130px;

    h1{
        font-size:19px;
        font-weight: 700;
        color:#181818;
        margin:0 0 20px 0;
    }

    h2{
        font-size:30px;
        font-weight: 400;
        color:#181818;
    }

    span{
        margin:60px 0 0 0;
        position:relative;
        z-index:99;
    }
`

const DotsWrap = styled.div`
    position:absolute;
    bottom:80px;
    left:133px;
    z-index:2;
    display:flex;
`

const Dots = styled.div`
    width:100px;
    border-radius:4px;
    overflow:hidden;
    display:flex;
    height:5px;
    overflow:hidden;
`

const Dot = styled.div`
    width:25px;
    height:5px;
    background:#fff;
    opacity:0.6;
    :last-child{
        border-radius:0 4px 4px 0;
    }
`

const DotNum = styled.div`
    font-size:10px;
    letter-spacing: 5px;
    margin:0 0 0 24px;
    margin-top:-3px;
    color:#181818;
`

const NextButton = styled.button`
    position:absolute;
    z-index: 2;
    background:#red;
    right:-30px;
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

const PrevButton = styled.button`
    position:absolute;
    z-index: 2;
    left:-28px;
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
