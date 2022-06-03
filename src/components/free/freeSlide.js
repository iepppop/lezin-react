import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import {ImClock2} from 'react-icons/im';

const FreeSlide = ({data}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [seeArrow, setSeeArrow] = useState(false);
  const ref = useRef();

  const NextSlide = () => {
      if (currentIndex === 3) {
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
    <Box>
    <Conatain onMouseOver={() => setSeeArrow(true)} onMouseOut={() => setSeeArrow(false)}>
        <Container>
            <Wrap ref={ref}>
                <SliderWrap>
                    {data.map((romance, index) => {
                        const keyword = [`${romance.keyword}`]
                        return (
                            <One>
                                <OneWrap>
                                    <Thumbnail>
                                        <img src={romance.img} />
                                    </Thumbnail>
                                    <Content>
                                      <Label>
                                        <FreeHour><Icon><ImClock2/> </Icon>{romance.free}</FreeHour>
                                        <CateNew>NEW</CateNew>
                                      </Label>
                                      <h1>{romance.title}</h1>
                                      <h2>{romance.author} l BL</h2>
                                        </Content>
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

            {currentIndex === 2 ? null : (
                <Next onClick={() => NextSlide()}><MdKeyboardArrowRight /></Next>
            )}
        </ButtonWrap>

    </Conatain>
    <Dot>
        {Array.from({ length: 3 }).map((item, index) => (
            <li 
            onClick={() => moveDot(index)}
            style={{ background: `${currentIndex === index ? '#2d2d2d' : '#eee'}`, padding: `${currentIndex === index ? '0 5px' : ''}`, borderRadius: `${currentIndex === index ? '20px' : '50%'}` }}
            ></li>
        ))}
</Dot>
</Box>
  )
}
export default FreeSlide;

const Box = styled.div`
  width:100%;
  height:450px;
  background:#f8f8f8;
`

const Conatain = styled.div`
    max-width:1320px;
    margin: 0 auto;
    height:430px;
    padding: 0 20px;
    position:relative;
`

const Container = styled.div`
    position:relative;
    width:100%;
    height: 100%;
    overflow:hidden;
    padding:30px 0 0 0;
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
    width:20%;
    height:100%;
    position:relative;
    :nth-child(1){
        padding:0 20px 0 0;
    }
    :nth-child(2){
      padding:0 21px 0 0;
  }
    :nth-child(3){
        padding:0 20px 0 0;
    }
    :nth-child(5){
        padding:0 20px 0 0;
    }
`

const OneWrap = styled.div`
    width:100%;
    height:100%;    
    position:relative;
    border-radius:15px;
`


const Thumbnail = styled.div`
    width:100%;
    height:70%;
    overflow:hidden;
    border-radius:15px 15px 0 0;
    img{
      width:100%;
    }
`

const Gradient = styled.div`
    width:100%;
    height:100%;
    position:absolute;
    z-index:1;
    display:flex;
    align-items: center;
    justify-content: center;
`

const Content = styled.div`
    width:100%;
    height:20%;
    display:flex;
    flex-direction: column;
    position:relative;
    background:#fff;
    border-radius:0 0 15px 15px;

    span{
   
    }

    h1{
        margin:20px 0 0 25px;
        width:210px;
        line-height:120%;
        font-size:20px;
    }

    h2{
        margin:5px 0 0 25px;
        font-weight:500;
        font-size:15px;
        opacity:0.8; 
    
    }

    h3{
        display:flex;
    }
`

const Label = styled.div`
    position:absolute;
    top:-20px;
    left:20px;
    display:flex;
`

const CateNew = styled.div`
  background:orange;
  padding:10px 18px 8px 18px;
  border-radius:15px;
  color:#fff;
  font-size:12px;
  font-weight:600;
  margin:0 0 0 10px;
`

const FreeHour = styled.div`
    background:red;
    width:130px;
    padding:6px 0 5px 0;
    border-radius:15px;
    color:#fff;
    font-size:12px;
    display:flex;
    align-items:center;
    justify-content:center;
    position:relative;
`

const Icon = styled.div`
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
        height:5px;
        width:5px;
        background:#eee;
        border-radius:50%;
        margin:0 10px 0 0;
        cursor: pointer;

        :last-child {
            margin: 0;
        }
    }
`