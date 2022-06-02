import styled, { keyframes } from 'styled-components';
import { sliderdatas } from './SliderData';
import React, { useState, useEffect, useRef } from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

const Slider = () => {
  const ref = useRef(null);
  const slideref = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const transitionTime = 500;
  const transitionStyle = `transform ${transitionTime}ms ease 0s`;
  const [slideTransition, setTransition] = useState(transitionStyle);
  const [seeArrow, setSeeArrow] = useState(false);

  const slideCopy = () => {
    let addedFront = [];
    let addedLast = [];
    let index = 0;
    while (index < 1) {
      addedLast.push(sliderdatas[0], sliderdatas[1])
      addedFront.unshift(sliderdatas[1])
      index++;
    }
    return [...addedFront, ...sliderdatas, ...addedLast];
  }

  let slides = slideCopy();

  const replaceSlide = (index) => {
    setTimeout(() => {
      setTransition('');
      setCurrentIndex(index);
    }, transitionTime);
  }

  const handleSlide = (index) => {
    setCurrentIndex(index);
    if (index - 1 < 0) {
      index += sliderdatas.length;
      replaceSlide(index);
    } else if (index - 1 >= sliderdatas.length) {
      index -= sliderdatas.length;
      replaceSlide(index);
    }
    setTransition(transitionStyle);
  }

  const handleSwipe = (direction) => {
    handleSlide(currentIndex + direction);
  }


  useEffect(() => {
    ref.current.style.transform = `translateX(-${currentIndex}00%)`;
    slideref.current.style.width = `${slides.length}00%`;
  })

  return (
    <Container style={{ background: `${currentIndex === 1 || currentIndex === 3 ? '#1b1b1b' : '#a52424'}` }}>

      <Wrap>
        <Wrapper>
          <Padd>
            <Contain>
              <SliderWrap ref={ref} style={{ transition: slideTransition }}>
                <Box ref={slideref}>
                  {slides.map((data, index) => {
                    return (
                      <BoxWrap key={data.name}
                        onMouseOver={() => setSeeArrow(true)}
                        onMouseOut={() => setSeeArrow(false)}
                      >
                        <MainSlider>
                          <img src={data.img} />
                          <Bgop />
                          <Content>
                            <span>
                              <h1>NEW</h1>
                              <Line />
                            </span>
                            <ContentDep>
                              <Title>
                                <h2>{data.name}</h2>
                                <h3>{data.dep}</h3>
                                <h4>#액션 #불사 #불사신</h4>
                              </Title>
                              <Total>
                                <h5>{currentIndex === 2 ? '1' : currentIndex + 1} / {sliderdatas.length}</h5>
                              </Total>
                            </ContentDep>
                          </Content>

                        </MainSlider>

                        <Blank />


                      </BoxWrap>
                    )
                  })}

                </Box>
              </SliderWrap>
            </Contain>

          </Padd>

          <SubSlider
            onMouseOver={() => setSeeArrow(true)} onMouseOut={() => setSeeArrow(false)}
            onClick={() => handleSwipe(+1)}
            style={{ opacity: `${seeArrow ? '1' : '0'}` }}>
            {/* <BgB />     */}
            <SubContent>

              <button>< MdKeyboardArrowRight /></button>
            </SubContent>

          </SubSlider>
        </Wrapper>
      </Wrap>
    </Container>
  )
}
export default Slider;

const Container = styled.div`
  width:100%;
  height:350px;
  transition:0.3s;
  background:#eee;
`
const Wrap = styled.div`
  width:100%;
  height: 100%;
  margin: 0 auto;
`

const Wrapper = styled.div`
  padding:0 20px;
  width:100%;
  height:100%;
  display:flex;
  align-items:center;
  position:relative;
`

const Padd = styled.div`
  width:100%;
  height:80%;
  position:relative;
  overflow:hidden;
`

const Contain = styled.div`
  width:100%;
  height:100%;
  position:absolute;  
  transform:translateX(-100%);
`

const SliderWrap = styled.div`
  width:100%;
  height:100%;
  position:absolute;  
`

const Box = styled.div`
  width:300%;
  height:100%;
  display:flex;
`

const BoxWrap = styled.div`
  width:100%;
  height:100%;
  display:flex;
`

const MainSlider = styled.div`
  width:100%;
  height:100%;
  border-radius:15px;
  position:relative;
  overflow:hidden;

  img{
    object-fit:cover;
    width:101%;
  }
`

const Bgop = styled.div`
  width:100%;
  height:100%;
  // background: linear-gradient(to top, #000 5%, rgba(0,0,0,0.8) 25%, transparent 90%);
  position:absolute;
  bottom:0;
  z-index:1;
`

const Content = styled.div`
  position:absolute;
  z-index:2;
  top:0;
  left:0;
  padding:40px 60px;
  width:100%;
  height:100%;

  h1{
    color:white;
    font-size:12px;
  }

  span{
    height:50%;
    width:100%;
    display:inline-block;
  }
`

const Line = styled.div`
  width:27px;
  margin:3px 0 0 0;
  height:3px;
  background:red;
  color:white;
`

const ContentDep = styled.div`
  display:flex;
  justify-content:end;
  align-items:end;
  width:100%;
  height:50%;
  color: white;
  font-weight:500;

  h2{
    font-size:20px;
  }

  h3{
    font-size:20px;
  }

  h4{
    font-size:12px;
    font-weight:300;
    margin:10px 0 0 0;
  }
`

const Title = styled.div`
  width:90%;
`

const Total = styled.div`
  width:10%;
  display:flex;
  justify-content:end;

  h5{
    background:rgba(0,0,0,0.6);
    display:inline-block;
    padding:5px 10px;
    border-radius:20px;
    font-weight:200;
    font-size:10px;
  }
`


const Blank = styled.div`
  
`


const SubSlider = styled.div`
    position:absolute;
    right:0;
    top:50%;
    transform:translate(0,-50%);
    background:rgba(255,255,255,0.8);
    padding:20px 20px 15px 20px;
    border-radius:50%;
    color:#000;
    z-index:999;
    right:-8px;
    cursor:pointer;
`

const BgB = styled.div`
  background:rgba(0,0,0,0.6);
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:120%;
  z-index:1;
  transition:0.3s;

  ${SubSlider}:hover & {
    top:250px;
  }
`

const SubContent = styled.div`
  button {
    cursor:pointer;
  }

  h1{
    font-size:15px;
  }
`

const nexteffef = keyframes`
0% {
  left:65px;
 }
 50% {
  left:70px;
 }
 100% {
  left:65px;
 }
`


