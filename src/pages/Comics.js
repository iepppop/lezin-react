import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useData } from "../contexts/DataContext";
import styled from 'styled-components';
import dayweb from '../components/dayweb.json'

const Comics = () => {
    const { id } = useParams();
    const { currentItems } = useData();
    const webtoon = dayweb.webtoon;
    const comicslist = webtoon.filter(list => list.en == id);
    return (
        <Box>
            <Container>
                {comicslist.map((comic, idx) => {
                    return (
                        <Wrap>
                            <ImgWrap>
                                <Img>
                                    <ImgPadding>
                                        <img src={comic.thumbnail} alt="img"/>
                                    </ImgPadding>
                                </Img>
                                <ImgContent>
                                    <h1>{comic.title}<Genre>{comic.genre}</Genre></h1>
                                    <h2>작가 {comic.artist}</h2>
                                    <span>{comic.explain}</span>
                                    <Keyword>
                                        <li># 로맨스</li>
                                        <li># 드라마</li>
                                        <li># 19세</li>
                                    </Keyword>
                                </ImgContent>
                            </ImgWrap>
                            <First>
                                <span>
                                    첫 화 보기
                                </span>
                            </First>
                            <ContentWrap>
                                <h5>매주 화요일 연재</h5>
                                <ContentList>
                                    <Boreder>
                                        <ContentImg>
                                            <img src={comic.thumbnail} alt="img1"/>
                                        </ContentImg>
                                        <Content>
                                            <h1>01</h1>
                                            <h2>22.05.26</h2>
                                        </Content>
                                    </Boreder>
                                </ContentList>
                                <ContentList>
                                    <Boreder>
                                        <ContentImg>
                                            <img src={comic.thumbnail} alt="img2"/>
                                        </ContentImg>
                                        <Content>
                                            <h1>02</h1>
                                            <h2>22.05.26</h2>
                                        </Content>
                                    </Boreder>
                                </ContentList>
                                <ContentList>
                                    <Boreder>
                                        <ContentImg>
                                            <img src={comic.thumbnail} alt="img3"/>
                                        </ContentImg>
                                        <Content>
                                            <h1>03</h1>
                                            <h2>22.05.26</h2>
                                        </Content>
                                    </Boreder>
                                </ContentList>
                            </ContentWrap>
                        </Wrap>
                    )
                })}
            </Container>
        </Box>
    )
}
export default Comics;

const Box = styled.div`
    background:${(props) => props.theme.login};
    width:100%;
    height:93vh;
    position:relative;
    overflow:hidden;
`

const Container = styled.div`
    max-width:805px;
    height:100%;
    background:${(props) => props.theme.body};
    margin:0 auto;
`

const Wrap = styled.div`
    width:100%;
    height:100%;
    position:relative;
`

const ImgWrap = styled.div`
    width:100%;
    height:260px;
    position:relative;
    display:flex;
    align-items: center;
    overflow:hidden;
    justify-content:center;
    background:${(props) => props.theme.body};
    overflow:hidden;

    h1{
        font-weight:600;
        padding:10px 10px 5px 10px;
        display:flex;
        align-items: center;
        font-size:25px;
    }

    h2{
        font-weight:500;
        font-size:14px;
        padding:0 0 20px 12px;
        opacity:0.8;
    }

    span{
        padding:10px;
        display:block;
        font-weight:400;
        font-size:14px;
        line-height:130%;
    }
`

const Img = styled.div`
    width:35%;
    height:200px;
    display:flex;
    align-items: center;
    overflow:hidden;
    justify-content:center;
    overflow:hidden;
    padding:30px;
    

    img{
        width:100%;
        object-fit: cover;
    }
`

const ImgPadding = styled.div`
   
`

const ImgContent = styled.div`
    width:65%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    margin:0 30px 0 0;
`

const Genre = styled.div`
    font-weight:bold;
    padding:6px 9px 5px 9px;
    background:rgba(255,51,51,0.1) 100%;
    color:rgba(255,51,51,1.0);
    font-size:12px;
    margin:0 0 0 20px;
    border-radius:30px;
    display:inline-block;
`

const ContentWrap = styled.ul`
    width:100%;
    height:100%;
    padding:0 0 20px 0;

    h5{
        margin:25px 0 15px 30px;
        font-weight:400;
    }
`

const ContentList = styled.li`
    width:100%;
    height:140px;
    overflow:hidden;
    margin:0 0 5px 0;
`

const Boreder = styled.div`
    width:100%;
    height:100%;
    display:flex;
    align-items: center;
    margin:0 20px 0 0;
`

const ContentImg = styled.div`
    width:35%;
    height:200px;
    overflow:hidden;
    padding:30px;

    img{
        width:100%;
        object-fit:cover;
        margin-top:-50px;
    }
`
const Content = styled.div`
    width:65%;
    padding:0 30px 0 25px;

    h1{
        font-weight:500;
        font-size:15px;
        opacity:0.8;
    }

    h2{
        font-weight:500;
        font-size:13px;
        opacity:0.6;
    }
`

const Keyword = styled.ul`
    display:flex;

    span{
        font-weight:900;
        font-size:14px;
        padding:7px 13px;
        margin:0px 20px 20px 0;
        color:red;
    }

    li{
        font-weight:800;
        font-size:12px;
        border-radius:15px;
        padding:7px 8px;
        opacity:0.8;
        margin:0 10px 0 0;
        font-weight:600;
        border:1px solid #eee;
    }
`

const First = styled.div`
    width:100%;
    heigh:50px;
    padding:0 30px;
    text-align:center;

    span{
        background:rgba(255,51,51,1.0);
        display:block;
        padding:20px 0 20px 0;
        color:#fff;
        width:100%;
        height:100%;
    }

    :hover{
        opacity:0.9;
    }
`