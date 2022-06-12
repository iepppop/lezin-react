import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import {ImClock2} from 'react-icons/im';
import { Link } from 'react-router-dom';

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
                              <Link to={`${romance.link}`}>
                                <OneWrap>
                                    <Thumbnail>
                                        <img src={romance.img} />
                                    </Thumbnail>
                                    <Content>
                                      <Label>
                                        <FreeHour><Icon><ImClock2/> </Icon>{romance.free}</FreeHour>
                                        {romance.cate.length >= 1 ? (<CateNew>{romance.cate}</CateNew>) : null}
                                      </Label>
                                      <h1>{romance.title}</h1>
                                      <h2>{romance.author} l {romance.genre}</h2>
                                        </Content>
                                </OneWrap>
                                </Link>
                            </One>
                        )
                    })}
                </SliderWrap>
            </Wrap>
        </Container>


    </Conatain>
  
</Box>
  )
}
export default FreeSlide;

const Box = styled.div`
  width:100%;
  height:450px;
  background:#F78181;
`

const Conatain = styled.div`
    max-width:1320px;
    margin: 0 auto;
    height:420px;
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
    padding:30px 0 0 0;
`

const SliderWrap = styled.div`
    width:100%;
    height:100%;
    display:flex;
    align-items: center;
`

const One = styled.div`
    width:25%;
    height:100%;
    position:relative;
    
    :nth-child(1){
        padding:0 20px 0 0;
    }
    :nth-child(2){
      padding:0 20px 0 0;
  }
    :nth-child(3){
        padding:0 20px 0 0;
    }
    :nth-child(4){
        padding:0 10px 0 0;
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
    overflow:hidden;
`


const Thumbnail = styled.div`
    width:100%;
    height:70%;

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
    height:30%;
    display:flex;
    flex-direction: column;
    justify-content: center;
    position:relative;
    background:${(props) => props.theme.body};

    span{
   
    }

    h1{
        margin:0 0 0 35px;
        width:210px;
        line-height:120%;
        font-size:20px;
    }

    h2{
        margin:5px 0 0 35px;
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
  padding:12px 15px 10px 15px;
  font-weight:700;
  margin:0 0 0 10px;
  border-radius:20px;
  color:#fff;
  font-size:12px;
  display:flex;
  align-items:center;
  justify-content:center;
  position:relative;
`

const FreeHour = styled.div`
    background:linear-gradient(to right, #FF0000, #FA5882);
    width:130px;
    padding:12px 0 10px 0;
    border-radius:20px;
    color:#fff;
    font-size:12px;
    display:flex;
    align-items:center;
    justify-content:center;
    position:relative;
`

const Icon = styled.div`
    margin:2px 7px 0 0;
    font-size:10px;
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