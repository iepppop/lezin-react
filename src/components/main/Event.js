import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { events } from './EventData';

const Event = () => {
  return (
    <Container>
       <h1>이벤트전</h1>
       <Contain>
       {events.map((eve,idx)=>{
           return (
               <Wrap key={eve.name}>
                <Link to={`${eve.link}`}>
                   <ImgWrap>
                 <img src={process.env.PUBLIC_URL + `/image/event0${idx + 1}.png`} alt={eve.name} />
                 </ImgWrap>
                     <h5>{eve.discount}</h5>
                     <h2>{eve.name}</h2>
                     <h3>{eve.genre} &nbsp;I</h3>
                     <h4>&nbsp;&nbsp;{eve.author}</h4>
                     </Link>
               </Wrap>
           )
       })}
       </Contain>
        </Container>
  )
}
export default Event;

const Container = styled.div`
    max-width:1320px;
    margin:120px auto 0px auto;
    padding:0 20px;

    h1{
        font-size:20px;
        font-weight:700;
    } 
`

const Contain = styled.div`
    width: 100%;
    display:flex;
    margin:30px 0 0 0;
`

const Wrap = styled.div`
    margin:15px 0 0 0;
    width:16.66%;
    text-align:center;
    padding:0 20px;

    h2{
        font-size:18px;
        font-weight:500;
        margin:15px 0 0 0;
    }

    h3{
        display:inline-block;
        font-weight:500;
        font-size:13px;
        opacity:0.4;
    }

    h4{
        display:inline-block;
        font-weight:500;
        font-size:13px; 
        opacity:0.8;
    }

    h5{
        margin:20px 0 0 0;
        background:rgba(255,51,51,0.1) 100%;
        color:rgba(255,51,51,1.0);
        display:inline-block;
        font-weight:800;
        padding:4px 10px;
        border-radius:20px;
    }
`

const ImgWrap =styled.div`
    width:100%;
    box-sizing:border-box;
    overflow:hidden;
    border-radius: 50%;

    img{
        width:100%;
        height:100%;
        object-fit: cover;
        vertical-align:bottom;   
        transition: 0.3s;
    }

    &:hover img{
        transform: scale(1.08);
    }
`