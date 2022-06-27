import styled from 'styled-components';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import React, { useState, useEffect, useRef } from 'react';
import { firstSliders } from './FirstSliderData';
import { Link } from 'react-router-dom';

const FirstSlider = () => {
    const [seeArrow, setSeeArrow] = useState(false);
    // const ref = useRef(null);
    // const sliderRef = useRef(null);
    // const transitionTime = 500;
    // const transitionStyle = `transform ${transitionTime}ms ease 0s`;
    // const [slideTransition, setTransition] = useState(transitionStyle);
    // const [isSwiping, setIsSwiping] = useState(false);
    // const [prevSlideX, setPrevSlideX] = useState(false);
    // const item = 2;
    // const [currentIndex, setCurrentIndex] = useState(item);

    // const slideCopy = () => {
    //     let addedFront = [];
    //     let addedLast = [];
    //     let index = 0;
    //     while (index < item) {
    //         addedLast.push(firstSliders[index % firstSliders.length]);
    //         addedFront.unshift(firstSliders[firstSliders.length - 1 - index % firstSliders.length]);
    //         index++;
    //     }
    //     return [...addedFront, ...firstSliders, ...addedLast];
    // }

    // let slides = slideCopy();

    
    // const replaceSlide = (index) => {
    //     setTimeout(()=>{
    //         setTransition('');
    //         setCurrentIndex(index);
    //     }, transitionTime);
    // }


    // const handleSwipe = (direction) => {
    //     let index = currentIndex + direction;
    //     setCurrentIndex(index);
    //     if (index < item) {
    //         index += firstSliders.length;
    //         replaceSlide(index);
    //     } else if (index >= firstSliders.length + item) {
    //         index -= firstSliders.length;
    //         replaceSlide(index);
    //     }
    //     setTransition(transitionStyle);
    // }

    // useEffect(() => {
    //     ref.current.style.transform = `translateX(-${currentIndex}00%)`;
    //     sliderRef.current.style.width = `${slides.length}00%`;
    // })

    const ref = useRef();
    const slideref = useRef();
    const transitionTime = 500;
    const transitionStyle = `transform ${transitionTime}ms ease 0s`;
    const [slideTransition, setTransition] = useState(transitionStyle);
    const item = 2;
    const [currentIndex, setCurrentIndex] = useState(item);

    const setSlides = () => {
        let addedFront = [];
        let addedLast = [];
        let index = 0;
        while (index < item) {
            addedLast.push(firstSliders[index % firstSliders.length]);
            addedFront.unshift(firstSliders[firstSliders.length - 1 - index % firstSliders.length]);
            index++;
        }
        return [...addedFront, ...firstSliders, ...addedLast];
    }

    let slider = setSlides();

    const replaceSlide = (index) => {
        setTimeout(()=>{
            setTransition('');
            setCurrentIndex(index);
        }, transitionTime);
    }


    const handleSwipe = (direction) => {
        let index = currentIndex + direction;
        setCurrentIndex(index);
        if (index < item) {
            index += firstSliders.length;
            replaceSlide(index);
        } else if (index >= firstSliders.length + item) {
            index -= firstSliders.length;
            replaceSlide(index);
        } 
        setTransition(transitionStyle);
    }

    useEffect(() => {
       if(currentIndex === 2){
        setTransition('');
       }
    })

    useEffect(() => {
        ref.current.style.transform = `translateX(-${currentIndex}00%)`;
        slideref.current.style.width = `${slider.length}00%`;
    });

    

    return (
        <Box>
            <BoxWrap>
                <Contain>
                    <Container>
                        <SliderWrap ref={ref} style={{transition: slideTransition }}>
                            <Slider ref={slideref}>
                                {slider.map((slider, index) => {
                                    // const itemIndex = getItemIndex(index);
                                    return (
                                        <Slides
                                            style={{
                                                background: `${slider.color}`
                                            }}
                                            onMouseOver={() => setSeeArrow(true)}
                                            onMouseOut={() => setSeeArrow(false)}
                                            key={index}>
                                            <Link to={`${slider.link}`}>
                                                {seeArrow ? (
                                                    <Effect style={{ transform: `${slider.hover}` }}>
                                                        <img src={slider.effect} alt={index} />
                                                    </Effect>
                                                ) : (
                                                    <Effect>
                                                        <img src={slider.effect} alt={index} />
                                                    </Effect>
                                                )}
                                                <ContentWrap>
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
                                                </ContentWrap>
                                            </Link>
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
                        <Dot style={{ opacity: `${currentIndex === 2 ? "1" : currentIndex === 6 ? "1" : "0"}` }} />
                        <Dot style={{ opacity: `${currentIndex === 3 ? "1" : currentIndex === 7 ? "1" : "0"}` }} />
                        <Dot style={{ opacity: `${currentIndex === 4 ? "1" : "0"}` }} />
                        <Dot style={{ opacity: `${currentIndex === 5 ? "1" : "0"}` }} />
                    </Dots>
                    <DotNum>{currentIndex === 6 ? '1' : currentIndex === 0 ? '4' : currentIndex - 1}/{firstSliders.length}</DotNum>
                </DotsWrap>
            </BoxWrap>
        </Box>
    )
}
export default FirstSlider;

const ContentWrap = styled.div`
    width:100%;
    height:100%;
    position:absolute;
`

const Box = styled.div`
    width:1320px;
    margin: 30px auto;
    padding: 0 20px;    
    height:100%;
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
    position:absolute;
    top:0;
    right:100px;

    img{
        object-fit: cover;
        height:100%;
        vertical-align:bottom;
    }
`

const Contentbox = styled.div`
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    align-items:start;
    position:absolute;
    left:130px;

    h1{
        font-size:19px;
        font-weight: 700;
        color:#181818;
        margin:0 0 20px 0;
    }

    h2{
        font-size:30px;
        font-weight: 400;
        color:#181818;s
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
    width:100%;
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
    background:rgba(0,0,0,0.5);
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
    font-weight: 600;
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