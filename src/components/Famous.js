import styled from 'styled-components';
import { famousline } from './FamousData';
import { RiHeart3Line } from 'react-icons/ri';
import React, { useState, useRef, useEffect } from 'react';
import Button from './Button';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

const Famous = () => {
    const [ like, setLike ] = useState(false);
    const [seeArrow, setSeeArrow] = useState(false);
    const [ currentIndex, setCurrentIndex ] = useState(0);
    const ref = useRef(null);

   
    const Nextslide = () => {
        if (currentIndex >= 1) {
            return;
        } else {
            setCurrentIndex(currentIndex + 1);
        }
    }

    const Prevslide = () => {
        if (currentIndex === 0) {
            return;
        } else {
            setCurrentIndex(currentIndex - 1);
        }
    }
    useEffect(() => {
        ref.current.style.transform = `translateX(-${currentIndex}00%)`;
    },[currentIndex])

    return (
        <Container onMouseOver={() => setSeeArrow(true)} onMouseOut={() => setSeeArrow(false)}>
            <h1>명대사전</h1>
            <ButtonWrap style={{ opacity: `${seeArrow ? '1' : '0'}` }}>
           {currentIndex === 0 ? null : (
                <Prev onClick={() => Prevslide()}><MdKeyboardArrowLeft /></Prev>
           ) }

        {currentIndex === 1 ? null : (
                    <Next onClick={() => Nextslide()}><MdKeyboardArrowRight /></Next>
           ) }
            </ButtonWrap>
            <Hidden>
            <Wrap ref={ref}>
                <Contain>
                    <WrapContain>
                {famousline.map((line, index) => {
                    const num = [`${line.number}`]
                    return (
                        <Wrapper key={line.name}>
                            <ImgBox>
                                <img src={process.env.PUBLIC_URL + `/image/fa0${index + 1}.png`} alt={line.name} />
                                <Grad />
                                <AFamous>
                                    <h2> {line.famous}</h2>
                                    <h3> {line.famous2}</h3>
                                    <h4>- {line.name}</h4>
                                </AFamous>
                            </ImgBox>
                            <Content>
                                <Nickname>
                                    <Imgline><img src={line.profile} alt={index}/></Imgline>
                                    <h5>{line.nickname}</h5>
                                </Nickname>
                                <HeartClick onClick={() => setLike(true)}>
                                    <RiHeart3Line style={{ marginRight: '5px' }} /> 
                                    {like ? line.number + 1 : line.number}
                                </HeartClick>
                            </Content>
                        </Wrapper>
                    )
                })}
                </WrapContain>
                </Contain>
            </Wrap>
            </Hidden>
        </Container>
    )
}
export default Famous;

const Container = styled.div`
    max-width:1280px;
    margin:120px auto 0px auto;
    position:relative;
    padding:0 20px;
    height:550px;

    h1{
        font-size:20px;
        font-weight:700;
    }
`

const ButtonWrap = styled.button`
    width:100%;
    height:500px;
    position:absolute;
    border: none;
    background: none;
`
const Hidden = styled.div`
    overflow: hidden;
    width: 100%;
    height: 100%;
    position:absolute;
`

const Wrap = styled.div`
    margin:40px 0 0 0;
    height:100%;
    position:absolute;
    width: 100%;
    transition: 0.3s;
    box-sizing:border-box;
`

const Contain = styled.div`
    display:flex;
    width: 200%;
`

const WrapContain = styled.div`
    width:100%;
    box-sizing:border-box;
    display:flex;
`

const Wrapper = styled.div`
    width:33.33%;   
    margin:0;  

    :nth-child(2){
        margin:0 20px;
    }

    :nth-child(5){
        margin:0 20px;
    }
`

const ImgBox = styled.div`
    position:relative;
    display:flex;
    justify-content:center;

    img{
        width:100%;
    }
`

const Grad = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    bottom:0;
    background: linear-gradient(to top, rgba(2,2,2,0.6), transparent)
`

const AFamous = styled.div`
    position:absolute;
    bottom:40px;
    width:80%;
    color:#f3f3f3; 
    font-family: 'Noto Serif KR', serif;

    h2{
        font-weight:500;
        font-size:26px;
    }

    h3{
        font-weight:500;
        font-size:26px;
        margin:1px 0 0 0;
        line-height:140%;
    }

    h4{
        font-family: 'Pretendard';
        font-weight:200;
        font-size:13px;
        margin:15px 0 0 0;
    }
`

const Content = styled.div`
    width:100%;
    display:flex;
    padding:10px;
    justify-content: space-between;
    margin:10px 0 0 0;

    h5{
        margin:0 0 0 20px;
    }
`

const Imgline = styled.div`
    width:40px;
    height:40px;

    img{
        width:100%;
        border-radius:50%;
    }
`

const Nickname = styled.div`
    display:flex;
    align-items:center;
`

const HeartClick = styled.div`
    display:flex;
    align-items:center;
    margin:0 20px 0 0;
    font-weight: 300;
    font-size:12px;
    cursor:pointer;
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