import styled from 'styled-components';
import { famousline } from './FamousData';
import { RiHeart3Line, RiHeart3Fill } from 'react-icons/ri';
import React, { useState, useRef, useEffect } from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

const Famous = () => {
    let [like, setLike] = useState([0, 0, 0, 0, 0, 0]);
    const [seeArrow, setSeeArrow] = useState(false);
    const [heart, setHeart] = useState([false,false,false,false,false,false]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const ref = useRef(null);

    const [modal, setModal] = useState(false);


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
    }, [currentIndex]);



    return (
        <Box>
            <Container onMouseOver={() => setSeeArrow(true)} onMouseOut={() => setSeeArrow(false)}>
                <h1>명대사전</h1>
                <ButtonWrap style={{ opacity: `${seeArrow ? '1' : '0'}` }}>
                    {currentIndex === 0 ? null : (
                        <Prev onClick={() => Prevslide()}><MdKeyboardArrowLeft /></Prev>
                    )}

                    {currentIndex === 1 ? null : (
                        <Next onClick={() => Nextslide()}><MdKeyboardArrowRight /></Next>
                    )}
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
                                                <img src={process.env.PUBLIC_URL + `/image/fa0${index + 1}.png`} alt={index} />
                                                <Grad />
                                                <AFamous>
                                                    <h2> {line.famous}</h2>
                                                    <h3> {line.famous2}</h3>
                                                    <h4>- {line.name}</h4>
                                                </AFamous>
                                            </ImgBox>
                                            <Content>
                                                <Nickname>
                                                    <Imgline><img src={line.profile} alt={index} /></Imgline>
                                                    <h5>{line.nickname}</h5>
                                                </Nickname>
                                  
                                                    <HeartClick
                                                    onClick={() => {
                                                        setLike((arr) =>
                                                            arr.map((el, idx) => (idx === index ? el + 1 : el)));
                                                        setHeart((heart) =>
                                                            heart.map((x, i) => (i === index ? true : false )));
                                                    }}>                                          
                                                                                            
                                                        
                                                    {heart[index] === true ? (
                                                         <RiHeart3Fill style={{ marginRight: '5px', color: '#f72937'}} />
                                                    ) : (
                                                        <RiHeart3Line style={{ marginRight: '5px', color: '#3b3b3b'}} />
                                                    )}
                                                    {line.number + like[index]}
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
        </Box>
    )
}
export default Famous;

const ModColor = styled.div`
    color:pink;
`

const Box = styled.div`
    max-width:1320px;
    margin:120px auto 0px auto;
    height:640px;
    padding: 0 20px;
`

const Container = styled.div`
    position:relative;
    width:100%;
    height:100%;

    h1{
       padding:40px 0 0 0;
        font-size:20px;
        font-weight:700;
    }
`

const ButtonWrap = styled.button`

`
const Hidden = styled.div`
    overflow: hidden;
    width: 100%;
    height: 100%;
    position:absolute;
`

const Wrap = styled.div`
    margin:20px 0 0 0;
    height:100%;
    position:absolute;
    width: 100%;
    transition: 0.3s;
    box-sizing:border-box;
`

const Contain = styled.div`
    display:flex;
    width: 200%;
    height:100%;
`

const WrapContain = styled.div`
    width:100%;
    height: 100%;
    box-sizing:border-box;
    display:flex;
`

const Wrapper = styled.div`
    max-width:33.33%;  
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
    margin:0 5px 0 0;
    font-weight: 500;
    font-size:12px;
    cursor:pointer;
`

const Next = styled.button`
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

const Prev = styled.button`
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