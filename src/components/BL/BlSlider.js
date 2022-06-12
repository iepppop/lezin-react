import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { blslides } from './BlSliderData';
import { Link } from 'react-router-dom';

const BlSlider = () => {
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
            addedLast.push(blslides[index % blslides.length]);
            addedFront.unshift(blslides[blslides.length - 1 - index % blslides.length]);
            index++;
        }
        return [...addedFront, ...blslides, ...addedLast];
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
            index += blslides.length;
            replaceSlide(index);
        } else if (index >= blslides.length + item) {
            index -= blslides.length;
            replaceSlide(index);
        }
        setTransition(transitionStyle);
    }

    useEffect(() => {
        ref.current.style.transform = `translateX(-${currentIndex}00%)`;
        slideref.current.style.width = `${slider.length}00%`;
    });


    return (
        <Contain>
            <Container>

                <Slider>
                    <SliderWrap ref={ref} style={{transition: slideTransition}}>
                        <SliderLength ref={slideref}>
                        {slider.map((bl, idx) => {
                                const keyword = [`${bl.keyword}`];
                                return (
                                   
                                    <SliderMain style={{ background: `${bl.backColor}` }} key={bl.title}>
                                         <Link to={`${bl.link}`}>
                                        <ImgWrap>
                                            <ImgBox>
                                                <img src={bl.img} />
                                            </ImgBox>
                                        </ImgWrap>
                                        <Content>
                                            <FirstC>
                                                <h5>
                                                    <span>{bl.cate}</span>
                                                </h5>
                                                <h1>
                                                    {bl.content1}
                                                </h1>
                                                <h2>
                                                    {bl.content2}
                                                </h2>
                                                <h3>
                                                    <div>
                                                        {bl.title}
                                                    </div>
                                                </h3>
                                                <h4>
                                                {keyword.map((x, i) => {
                                                    const words = x.split(',', 5);
                                                    return (
                                                        <Keyword key={words[0]}>
                                                            <li>#{words[0]}</li>
                                                            <li>#{words[1]}</li>
                                                            <li>#{words[2]}</li>
                                                            <li>#{words[3]}</li>
                                                        </Keyword>
                                                    )
                                                })}
                                                </h4>
                                            </FirstC>
                                            <LastC>
                                                <ImgContain>
                                                    <img src={bl.subimg} />
                                                </ImgContain>
                                                <h5>
                                                © {bl.author}
                                                </h5>
                                                <span>

                                                </span>
                                            </LastC>
                                        </Content>
                                        <PointColor>
                                            
                                        </PointColor>
                                        </Link>
                                    </SliderMain>
                              
                                )
                            })}
                                                                  
                        </SliderLength>
                       
                    </SliderWrap>
                    <ButtonWrap>
                                            <Prev onClick={() => handleSwipe(-1)}><img
                                                src={process.env.PUBLIC_URL + '/image/arrowwhl.png'}
                                            /></Prev>
                                            <Next onClick={() => handleSwipe(+1)}><img
                                                src={process.env.PUBLIC_URL + '/image/arrowwh.png'}
                                            /></Next>
                                        </ButtonWrap>
                                        <DotsWrap>
                    <Dots>
                        <Dot style={{ opacity: `${currentIndex === 2 ? "1" : currentIndex === 6 ? "1" : "0"}` }} />
                        <Dot style={{ opacity: `${currentIndex === 3 ? "1" : currentIndex === 7 ? "1" : "0"}` }} />
                        <Dot style={{ opacity: `${currentIndex === 4 ? "1" : "0"}` }} />
                    </Dots>
                </DotsWrap>
                </Slider>
            </Container>
        </Contain>
    )
}
export default BlSlider;

const DotsWrap = styled.div`
    position:absolute;
    bottom:50px;
    right:100px;
    z-index:99;
    display:flex;
`

const Dots = styled.div`
    width:70px;
    overflow:hidden;
    display:flex;
    height:3px;
    overflow:hidden;
    background:rgba(255,255,255,0.5);
`

const Dot = styled.div`
    width:25px;
    height:3px;
    background:#fff;
    opacity:0.6;
`

const DotNum = styled.div`
    font-size:10px;
    letter-spacing: 5px;
    margin:0 0 0 24px;
    margin-top:-3px;
    color:#181818;
    font-weight: 600;
`



const Contain = styled.div`
    width:100%;
    height:228px;
    background:${(props) => props.theme.border};
    position:relative;
`
const Blur = styled.div`
    position:absolute;
    width:100%;
    height:100%;
`

const ImgWraper = styled.div`
    width:100%;
    height:330px;
    overflow:hidden;
    display:flex;
    justify-content:center;
    align-items:center;

    img{
        filter: blur(40px);
    }
`

const Container = styled.div`
    max-width:1320px;
    height:100%;
    padding: 0 20px;
    margin:0 auto;
    padding:25px 20px 0 20px;
`

const Slider = styled.div`
    width:100%;
    height:280px;
    border-radius:15px;
    position:relative;
    overflow:hidden;
`

const SliderWrap = styled.div`
    position:absolute;
    width:100%;
    height:100%;
`

const SliderLength = styled.div`
    height:100%;
    display:flex;
`
const SliderMain = styled.div`
    width:100%;
    height:100%;
    position:relative;
`

const ImgWrap = styled.div`
    position:absolute;
    bottom:0;
    left:50%;
    transform:translate(-50%,0);
`

const ImgBox = styled.div`
    width:600px;
    img{
    width:100%;
    object-fit: cover;
    vertical-align:bottom;
    }
`

const Content = styled.div`
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    width:85%;
    height:70%;
    display:flex;
    aling-items:center;
`

const FirstC = styled.div`
    width:50%;
    height:100%;
    display:flex;
    flex-direction: column;
    justify-content:center;

    h1{
        width:260px;
        font-size:25px;
        margin:10px 0 0 0;
        color:#fff;
        letter-spacing:1px;
    }

    h2{
        width:270px;
        font-size:25px;
        color:#fff;
        letter-spacing:1px;
    }
    
    h3 {

        div{
            color:#fff;
            font-weight:300;
            margin:30px 0 0 0;
            font-size:25px;
            background:#f0cb00;
            display:inline-block;
            padding:0 5px;
        }
    }

    h4{
        color:#fff;
        font-weight:500;
        font-size:12px;
        margin:5px 0 0 0;
    }

    h5{
      span{
        color:#fff;
        padding:3px 8px;
        border:1px solid #fff;
        border-radius:15px;
        display:inline-block;
        font-size:10px;
      }
    }
`

const LastC = styled.div`
    width:50%;
    height:100%;
    display:flex;
    flex-direction: column;
    align-items:end;
    justify-content:center;
    color:#fff;
    height:100%;
    
    h5{
        font-weight:300;
        font-size:12px;
    }

    h4{
        font-weight:500;
        font-size:10px;
        margin:2px 0 0 0;
    }

    span{
        margin:20px 0 0 0;
    }
`

const ImgContain = styled.div`
    width:140px;
    height:130px;
    border-radius:15px;
    overflow:hidden;
    margin:0 0 20px 0;

    img{
        width:100%;
    }
`

const PointColor = styled.div`
    position:absolute;
    width:100%;
    height:100%;
    bottom:0;
    right:0;
    background: linear-gradient(-45deg, #f0cb00 5%, transparent 5%);

    h4{
    position:absolute;
    bottom:13px;
    right:13px;
    font-size:10px;
    color:#fff;
    font-weight:500;
    }
`

const ButtonWrap = styled.div`
  
`

const Next = styled.div`
    position:absolute;
    z-index: 99;
    right:0;
    top:50%;
    transform:translate(0,-50%);
    padding:20px 20px 15px 20px;
    border-radius:50%;
    color:#fff;
    font-size:50px;
    z-index:999;
    cursor: pointer;
`

const Prev = styled.div`
    position:absolute;
    z-index: 99;
    background:#red;
    left:0;
    top:50%;
    transform:translate(0,-50%);
    padding:20px 20px 15px 20px;
    border-radius:50%;
    color:#fff;
    font-size:50px;
    z-index:999;
    cursor: pointer;
`
const Keyword = styled.div`
    display:flex;
    font-weight:500;
    color:#fff;
    font-size:12px;
    margin:5px 0 0 0;
    opacity:0.8;

    li{
        margin:0 0 0 5px;
    }

    li:last-child{
        margin:0 0 0 5px;
    }
`