import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useData } from "../contexts/DataContext";
import styled from 'styled-components';

const Comics = () => {
    const { id } = useParams();
    const { currentItems } = useData();
    const comicslist = currentItems.filter(list => list.en == id);
   return (
    <Container>
       {comicslist.map((comic,idx)=> {
           return(
               <Wrap>
               <ImgWrap>
               <Img>
            <img src={comic.thumbnail}/>      
            </Img>
            <h1>{comic.title}</h1>
            <h2>© {comic.artist}</h2>
            <span>{comic.explain}</span>
               </ImgWrap>
               <ContentWrap> 
               <h5>매주 화요일 연재</h5>
               <ContentList>
                   <Boreder>
               <ContentImg>
               <img src={comic.thumbnail}/>  
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
               <img src={comic.thumbnail}/>  
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
               <img src={comic.thumbnail}/>  
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
  )
}
export default Comics;

const Container = styled.div`
    max-width:1320px;
    margin:0 auto;
    padding:0 20px;
`

const Wrap = styled.div`
    width:100%;
    height:100%;
    position:relative;
    display:flex;
`

const Gradient = styled.div`
    width:100%;
    height:100%;
    top:0;
    left:0;
    position:absolute;
    background: linear-gradient(to right, pink 22%, transparent 50%, pink 78%);
`

const ImgWrap = styled.div`
    width:30%;
    height:100%;
    
    img{
        width:100%;
    }

    h1{
        font-weight:500;
        padding:10px 10px 5px 10px;
    }

    h2{
        font-weight:500;
        font-size:14px;
        padding:0 10px;
    }

    span{
        padding:10px;
        display:block;
        font-weight:500;
        font-size:14px;
    }
`

const Img = styled.div`
    width:100%;
    height:500px;
    display:flex;
    align-items: center;
    overflow:hidden;
`

const ContentWrap = styled.ul`
    width:70%;
    height:100%;

    h5{
        margin:15px 0 15px 50px;
        font-weight:400;
    }
`

const ContentList = styled.li`
    width:100%;
    height:140px;
    overflow:hidden;
    display:flex;
    align-items: center;
    padding:0 0 0 50px;
`

const Boreder = styled.div`
    width:100%;
    height:100%;
    display:flex;
    align-items: center;
`

const ContentImg = styled.div`
    width:30%;
    height:100%;
    display:flex;
    align-items: center;

    img{
        width:100%;
    }
`
const Content = styled.div`
    width:70%;
    padding:0 0 0 50px;

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