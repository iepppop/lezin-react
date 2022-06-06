import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { Link } from "react-router-dom";

const Big = ({ data }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [seeArrow, setSeeArrow] = useState(false);
    const ref = useRef();

    const NextSlide = () => {
        if (currentIndex === data.length - 1) {
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
                            {data.map((romance, index) => {
                                const keyword = [`${romance.keyword}`]
                                return (
                                    <One>
                                        
                                        <Gradient style={{ background: `linear-gradient(to right, ${romance.backColor} 15%,  ${romance.backColor2} 50%, ${romance.backColor} 100%)` }}></Gradient>
                                        <OneWrap>
                                            <Gradient >
                                                <ButtonWrap>

                                                    <Prev onClick={() => PrevSlide()}><img
                                                        src={process.env.PUBLIC_URL + '/image/arrowwhl.png'}
                                                    /></Prev>
                                                    <Next onClick={() => NextSlide()}><img
                                                        src={process.env.PUBLIC_URL + '/image/arrowwh.png'}
                                                    /></Next>

                                                </ButtonWrap>
                                               
                                                <Content>
                                                <Link to={`${romance.link}`}>
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
                                                    </Link>
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


            </Conatain>
            <Dot>
                {Array.from({ length: 4 }).map((item, index) => (
                    <li
                        onClick={() => moveDot(index)}
                        style={{ background: `${currentIndex === index ? '#2d2d2d' : '#eee'}`, padding: `${currentIndex === index ? '0 5px' : ''}`, borderRadius: `${currentIndex === index ? '20px' : '50%'}` }}
                    ></li>
                ))}
            </Dot>
        </>
    )
}
export default Big;

const Conatain = styled.div`
    margin: 0 auto;
    height:320px;
    position:relative;
`

const Container = styled.div`
    position:relative;
    max-width:100%;
    height:100%;
    overflow:hidden;
`

const Wrap = styled.div`
    position:absolute;
    width:100%;
    height:100%;
    transition:0.3s;
`

const SliderWrap = styled.div`
    width:400%;
    height:100%;
    display:flex;
    align-items: center;
`

const One = styled.div`
    width:100%;
    height:100%;
    position:relative;
`

const OneWrap = styled.div`
    max-width:1320px;
    margin: 0 auto;
    height:100%;    
    position:relative;
`


const Thumbnail = styled.div`
    position:absolute;
    right:10%;
    border-radius:20px;
    top:54%;
    overflow:hidden;
    transform:translate(0,-50%);
    border-radius:15px;
    z-index:99;
    height:280px;

    img{
        width:400px;
        height:280px;
        object-fit:cover;
        border-radius:20px;
        overflow: hidden;
    }
`

const Gradient = styled.div`
    width:100%;
    height:280px;
    position:absolute;
    z-index:1;
    display:flex;
    align-items: center;
    justify-content: center;
`

const Content = styled.div`
    width:80%;
    padding:0 20px;
    height:75%;
    display:flex;
    flex-direction: column;
    justify-content: center;

    span{
   
    }

    h1{
        margin:10px 0 0 0;
        width:250px;
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
    z-index: 2;
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