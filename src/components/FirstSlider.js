import styled from 'styled-components';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import React, { useState, useEffect, useRef } from 'react';
import { firstSliders } from './FirstSliderData';

const FirstSlider = () => {
    const [seeArrow, setSeeArrow] = useState(false);
    const ref = useRef(null);
    const sliderRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const transitionTime = 500;
    const transitionStyle = `transform ${transitionTime}ms ease 0s`;
    const [slideTransition, setTransition] = useState(transitionStyle);
    const [isSwiping, setIsSwiping] = useState(false);
    const [prevSlideX, setPrevSlideX] = useState(false);

    const slideCopy = () => {
        let addedFront = [];
        let addedLast = [];
        let index = 0;
        while (index < 1) {
            addedLast.push(firstSliders[0],firstSliders[1])
            addedFront.unshift(firstSliders[3])
            index ++;
        } 
        return[...addedFront, ...firstSliders, ...addedLast];
    }

    let slides = slideCopy();

    const replaceSlide = (index) => {
        setTimeout(()=>{
            setTransition('');
            setCurrentIndex(index);
        }, transitionTime);
    }

    const handleSlide = (index) => {
        setCurrentIndex(index);
        if(index - 1 < 0) {
            index += firstSliders.length;
            replaceSlide(index);
        }else if(index - 1  >= firstSliders.length){
            index -= firstSliders.length;
            replaceSlide(index);
        }
        setTransition(transitionStyle);
    }

    const handleSwipe = (direction) => {
        setIsSwiping(true);
        handleSlide(currentIndex + direction);
    }

    // const getItemIndex = (index) => {
    //     index -= 1;
    //     if (index < 0) {
    //         index += slides.length;
    //     }else if(index >= slides.length){
    //         index -= slides.length;
    //     }
    //     return index;
    // }

    const useInterval = (callback, delay) => {
        const savedCallback = useRef();
        useEffect(() => {
            savedCallback.current = callback;
        },[callback]);

        useEffect(() =>{
            const tick =()=> {
                savedCallback.current();
            }
            if(delay !== null){
                let id = setInterval(tick, delay);
                return () => clearInterval(id);
            }
        },[delay])
    }

    useInterval(() => {
        handleSlide(currentIndex + 1)
    }, !isSwiping && !prevSlideX ? 2000 : null);


    useEffect(() => {
        ref.current.style.transform = `translateX(-${currentIndex}00%)`;
        sliderRef.current.style.width = `${slides.length}00%`;
    })

    return (
        <Box>
            <BoxWrap>
        <Contain>
            <Container>
                <SliderWrap ref={ref} style={{transition: slideTransition}}>
                    <Slider ref={sliderRef}>
                        {slides.map((slider, index) => {
                            // const itemIndex = getItemIndex(index);
                            return (
                                <Slides 
                                style={{ 
                                background: `${slider.color}`}}
                                onMouseOver={() => setSeeArrow(true)} 
                                onMouseOut={() => setSeeArrow(false)} 
                                key={index}>
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
                                        <Content>
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
                                        </Content>
                                    </Contentbox>
                                    <Imgbox>
                                        <img src={slider.img} alt={index} />
                                    </Imgbox>

                                </Slides>
                            )
                        })}
                    </Slider>
                </SliderWrap>

            </Container>
        </Contain>
        <NextButton style={{ opacity: `${seeArrow ? '1' : '0'}` }} onMouseOver={() => setSeeArrow(true)} onMouseOut={() => setSeeArrow(false)} onClick={() => handleSwipe(+1)}>
                <MdKeyboardArrowRight />
            </NextButton>
            <PrevButton style={{ opacity: `${seeArrow ? '1' : '0'}` }} onMouseOver={() => setSeeArrow(true)} onMouseOut={() => setSeeArrow(false)} onClick={() => handleSwipe(-1)}>
                <MdKeyboardArrowLeft />
            </PrevButton>
        <DotsWrap>
                    <Dots>
                        <Dot style={{ opacity: `${currentIndex === 0 ? "1" : currentIndex === 4 ? "1" : "0"}` }} />
                        <Dot style={{ opacity: `${currentIndex === 1 ? "1" : currentIndex === 5 ? "1" : "0"}` }} />
                        <Dot style={{ opacity: `${currentIndex === 2 ? "1" : "0"}` }} />
                        <Dot style={{ opacity: `${currentIndex === 3 ? "1" : "0"}` }} />
                    </Dots>
                    <DotNum>{currentIndex === 4 ? '1' : currentIndex === 5 ? '2' : currentIndex + 1}/{firstSliders.length}</DotNum>
                </DotsWrap>
                </BoxWrap>
        </Box>
    )
}
export default FirstSlider

const Box = styled.div`
    max-width:1320px;
    margin: 30px auto;
    padding: 0 20px;
`

const BoxWrap = styled.div`
    position:relative;
    max-width:1280px;
    margin: 30px auto;
`

const Contain = styled.div`
    max-width:1280px;
    margin: 30px auto;
    position:relative;
    height:500px;    
    border-radius:20px;
    overflow:hidden;
`

const Container = styled.div`
    max-width:1280px;
    position:relative;
    height:100%;
    transform:translateX(-100%);
    border-radius:20px;
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


    :hover ${Effect}{
        // transform: translateX(55px) translateY(20px);
    }
`

const Slider = styled.div`
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
    height:100%;
    display:flex;
    flex-direction:column;
    align-items:start;
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
        position:absolute;
        z-index:99;
        bottom:120px;
    }
`

const Content = styled.div`
    height:45%;
    display:flex;
    flex-direction:column;
    justify-content:end;
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
    background:rgba(255,255,255,0.5);
`

const Dot = styled.div`
    width:25px;
    height:5px;
    background:#fff;
    opacity:0.6;
    border-radius:4px;
`

const DotNum = styled.div`
    font-size:10px;
    letter-spacing: 5px;
    margin:0 0 0 24px;
    margin-top:-3px;
    color:#181818;
    font-weight: 400;
`

const NextButton = styled.button`
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

const PrevButton = styled.button`
    position:absolute;
    z-index: 2;
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
