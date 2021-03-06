import styled, { ThemeProvider } from "styled-components";
import { news } from './NewData';
import React, { useState } from "react";
import { MdKeyboardArrowRight } from 'react-icons/md';
import { RiDoubleQuotesL , RiDoubleQuotesR } from 'react-icons/ri';
import { MdOutlineArrowForwardIos } from 'react-icons/md';
import { Link } from "react-router-dom";



const New = ({ theme }) => {
    
    const [currentIndex, setCurrentIndex] = useState(0);
    const NextImg = () => {
        if (currentIndex !== news.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else if (currentIndex === news.length - 1) {
            setCurrentIndex(0);
        }
    }

    const PrevImg = () => {
        if (currentIndex !== 0) {
            setCurrentIndex(currentIndex - 1);
        } else if (currentIndex === 0) {
            setCurrentIndex(news.length - 1)
        }
    }

    return (
        <Container theme={theme}>
            <Containers>
            <NewWrap>
                <h4>이번주 신작</h4>
                {news.map((news, index) => {
                    const keyword = [`${news.keyword}`]
                    return (
                        <>
                        <Link to={`${news.link}`}>
                            <Slide key={news.name} style={{ opacity: `${currentIndex === index ? "1" : "0"}`,
                         }}>
                             
                                <Info>
                                    <span>
                                        <h5>{currentIndex + 1} / 3</h5>
                                        <h1>{news.name}</h1>
                                        <h2>{news.genre}</h2>
                                        <Profile><img src={news.profile} alt={news.author} /></Profile>
                                        <h3>© {news.author}</h3>
                                    </span>
                                </Info>
                                <Content style={{ 
                                            background: `${currentIndex === 2 ? '#0f1530' : ''}`,
                                            
                                             }}>
                                    <Blur>
                                        <img src={process.env.PUBLIC_URL + `${news.img}`} alt={index} 
                                        />
                                    </Blur>
                                    <BlurContent>
                                    <ImgWrap>
                                        <img 
                                        src={process.env.PUBLIC_URL + `${news.img}`} alt={news.name}
                                       />
                                    </ImgWrap>
                                    <ContentWrap>
                                        <ContentBox style={{ 
                                            color: `${currentIndex === 2 ? '#fff' : ''}`
                                             }}>
                                            <Box>
                                            <h1><span><RiDoubleQuotesL /> </span>{news.famous}<span><RiDoubleQuotesR /></span></h1>
                                            <h2>{news.explain}</h2>
                                            <h2>{news.explain2}</h2>
                                            <h3>{news.explain3}</h3>
                                            </Box>
                                            {keyword.map((x, i) => {
                                                const words = x.split(',', 5);
                                                return (
                                                    <Keyword key={words[0]}>
                                                        <li># {words[0]}</li>
                                                        <li># {words[1]}</li>
                                                        <li># {words[2]}</li>
                                                        <li style={{ opacity: `${words[3] === undefined ? '0' : '1'}` }}># {words[3]}</li>
                                                        <li style={{ opacity: `${words[4] === undefined ? '0' : '1'}` }}># {words[4]}</li>
                                                    </Keyword>
                                                )
                                            })}
                                        </ContentBox>
                                    </ContentWrap>
                                    </BlurContent>
                                </Content>
                            </Slide>
                            </Link>
                            <NextButton>
                                <NB onClick={NextImg} > </NB>
                            </NextButton>
                        </>
                    )
                })}
            </NewWrap>
            </Containers>
        </Container>
    )
}
export default New;

const Container = styled.div`
    margin: 100px 0 0 0;
    height: 640px;
    position:relative;
    overflow:hidden;
`

const Containers = styled.div`
    background: ${(props) => props.theme.newBack};
    width:100%;
    height:100%;
    
`

const NewWrap = styled.div`
    margin:0 auto;
    width:1320px;
    height:60%;
    top:50%;
    transform: translate(0,-50%);
    position:relative;
    padding:0 20px;

    h4{
        font-size:20px;
        font-weight:700;
        position:absolute;
        top:5px;
    }
`
const Slide = styled.div`
    width: 100%;
    height:100%;
    position:absolute;
    left:0;
    display:flex;
    transition:0.3s;
    padding:0 20px;
    box-sizing:border-box;
`

const Info = styled.div`
    width:20%;
    height:100%;
    display: flex;
    justify-content:end;
    flex-direction:column;

    h1{
        font-size:19px;
        font-weight:600;
    }

    h2{
        font-size:16px;
        font-weight:400;
        opacity:0.5;
        margin:5px 0 0 0;
    }

    h3{
        font-size:13px;
        font-weight:200;
        opacity:0.8;
        margin:15px 0 0 0;
    }

    h5{
        font-weight:200;
        font-size:10px;
        margin:0 0 20px 0;
    }
`

const Profile = styled.div`
    width:60px;
    height:60px;
    margin:15px 0 0 0;

    img{
        width:100%;
        border-radius:50%;
    }
`

const Content = styled.div`
    width:80%;    
    border-radius:15px;
    background: ${(props) => props.theme.newOne};
    position: relative;
    z-index:2;
    transition:0.3s ease-in-out;
    overflow:${(props) => props.theme.overflow};
    
    &:hover{
        transform:scale(1.02);
    }
`

const BlurContent = styled.div`
    width:100%;
    height:100%;
    border-radius:15px;
    overflow:hidden;
    display:flex;
`
const Blur = styled.div`
    position:absolute;
    z-index:0;
    bottom:0;
    img{
        filter: blur(100px);
        width:100%;
    }
`

const ImgWrap = styled.div`
    width:50%;
    height:100%;
    display:flex;
    align-items: end;
    padding:0 0 0 30px;
    position:relative;
    z-index:1;

    img{
        width:100%;
    }
`

const ContentWrap = styled.div`
    width:50%;
    height:100%;
    display:flex;
    align-items: center;
    justify-content: center;
    padding:0 20px;
`

const ContentBox = styled.div`
    width:80%;
    height:60%;
    display:flex;
    justify-content: center;
    flex-direction:column;
    
    h1{
        margin:0 0 20px 0;
        font-size:27px;

        span{
            font-size:12px;
            vertical-align: text-top;
        }
    }
    h2{
        font-weight:500;
        font-size:14px;
        line-height: 150%;
    }
    h3{
        font-weight:500;
        font-size:14px;
        line-height: 150%;
        margin:20px 0 0 0;
    }
`

const Box = styled.div`
    height:90%;
    display:flex;
    flex-direction:column;
    justify-content:center;
`

const Keyword = styled.ul`
    height: 10%;
    display: flex;
   
    li{
        padding:5px 10px;
        background: #020202;
        border-radius:5px;
        margin:0 10px 0 0 ;
        color:#fff;
        font-weight:500;
        font-size:12px;
        white-space:nowrap;
    }
`

const NextButton = styled.button`
    position:absolute;
    right:-50px;
    top:50%;
    transform:translate(0,-50%);
    background:none;
    border:none;
    font-size:50px;
    cursor: pointer;
`

const NB = styled.div`
    background: ${(props) => props.theme.arrow};
    width:33px;
    height:57px;
`