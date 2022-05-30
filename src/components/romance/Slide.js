import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { romaceslides } from "./SlideData";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

const Slide = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [seeArrow, setSeeArrow] = useState(false);
    const ref = useRef();

    const NextSlide = () => {
        if (currentIndex === romaceslides.length - 3) {
            return;
        } else {
            setCurrentIndex(currentIndex + 1);
        }
    }

    const PrevSlide = () => {
        if (currentIndex === 0) {
            return;
        } else {
            setCurrentIndex(currentIndex - 1);
        }
    }

    useEffect(() => {
        ref.current.style.transform = `translateX(-${currentIndex}00%)`;
    }, [currentIndex]);

    const moveDot = index => {
        setCurrentIndex(index)
    }


    return (
        <>
            <Conatain onMouseOver={() => setSeeArrow(true)} onMouseOut={() => setSeeArrow(false)}>
                <Container>
                    <Wrap ref={ref}>
                        <SliderWrap>
                            {romaceslides.map((romance, index) => {
                                const keyword = [`${romance.keyword}`]
                                return (
                                    <One>
                                        <OneWrap>
                                            <Gradient style={{ background: `linear-gradient(to right, ${romance.backColor} 65%, transparent 100%)` }}>
                                                <Content>
                                                    <span>
                                                        <Cate>
                                                            {romance.cate}
                                                        </Cate>
                                                    </span>
                                                    <h1>
                                                        {romance.content}
                                                    </h1>
                                                    <h2>
                                                        {romance.title}
                                                    </h2>
                                                    <h3>
                                                        {keyword.map((x, i) => {
                                                            const words = x.split(',', 5);
                                                            return (
                                                                <Keyword key={words[0]}>
                                                                    <li>#{words[0]}</li>
                                                                    <li>#{words[1]}</li>
                                                                </Keyword>
                                                            )
                                                        })}
                                                    </h3>
                                                </Content>
                                            </Gradient>
                                            <Thumbnail>
                                                <img src={romance.img} />
                                            </Thumbnail>
                                        </OneWrap>
                                    </One>
                                )
                            })}
                        </SliderWrap>
                    </Wrap>
                </Container>
                <ButtonWrap style={{ opacity: `${seeArrow ? '1' : '0'}` }}>
                    {currentIndex === 0 ? null : (
                        <Prev onClick={() => PrevSlide()}><MdKeyboardArrowLeft /></Prev>
                    )}

                    {currentIndex === 1 ? null : (
                        <Next onClick={() => NextSlide()}><MdKeyboardArrowRight /></Next>
                    )}
                </ButtonWrap>

            </Conatain>
            <Dot>
                {Array.from({ length: 2 }).map((item, index) => (
                    <li 
                    onClick={() => moveDot(index)}
                    style={{ background: `${currentIndex === index ? 'red' : '#eee'}` }}
                    ></li>
                ))}
        </Dot>
        </>
    )
}
export default Slide;

const Conatain = styled.div`
    max-width:1320px;
    margin: 0 auto;
    height:330px;
    padding: 0 20px;
    position:relative;
`

const Container = styled.div`
    position:relative;
    width:100%;
    height: 100%;
    overflow:hidden;
`

const Wrap = styled.div`
    position:absolute;
    width:100%;
    height:100%;
    transition:0.3s;
`

const SliderWrap = styled.div`
    width:200%;
    height:100%;
    display:flex;
    align-items: center;
`

const One = styled.div`
    width:50%;
    height:85%;
    position:relative;
    :nth-child(1){
        padding:0 20px 0 0;
    }
    :nth-child(3){
        padding:0 20px 0 0;
    }
`

const OneWrap = styled.div`
    width:100%;
    height:100%;    
    position:relative;
    border-radius:15px;
    overflow:hidden;
`


const Thumbnail = styled.div`
    position:absolute;
    right:0;
    height:100%;
    img{
        height:100%;
    }
`

const Gradient = styled.div`
    width:70%;
    height:100%;
    position:absolute;
    z-index:1;
    display:flex;
    align-items: center;
    justify-content: center;
`

const Content = styled.div`
    width:75%;
    height:75%;
    display:flex;
    flex-direction: column;
    justify-content: center;

    span{
   
    }

    h1{
        margin:10px 0 0 0;
        width:210px;
        color:#fff;
        line-height:120%;
        letter-spacing:1px;
    }

    h2{
        color:#fff;
        font-weight:300;
        margin:20px 0 0 0;
    }

    h3{
        display:flex;
    }
`

const Cate = styled.div`
    border:1px solid #fff;
    display:inline-block;
    color:#fff;
    font-size:10px;
    padding:4px 7px 4px 9px;
    border-radius:20px;
    font-weight:800;
`

const Keyword = styled.div`
    display:flex;
    font-weight:300;
    color:#fff;
    font-size:13px;
    margin:5px 0 0 0;
    opacity:0.8;

    li{
        
    }

    li:last-child{
        margin:0 0 0 5px;
    }
`

const ButtonWrap = styled.div`

`

const Next = styled.div`
    position:absolute;
    z-index: 2;
    right:-10px;
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
    left:-10px;
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

const Dot = styled.div`
    width:100%;
    hegith:100%;
    display:flex;
    justify-content: center;
    margin:0 0 30px 0;

    li{
        height:7px;
        width:7px;
        background:#eee;
        border-radius:50%;
        margin:0 10px 0 0;

        :last-child {
            margin: 0;
        }
    }
`