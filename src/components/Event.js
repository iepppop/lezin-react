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
                   <ImgWrap>
                 <img src={process.env.PUBLIC_URL + `/image/event0${idx + 1}.png`} alt={eve.name} />
                 </ImgWrap>
                     <h5>{eve.discount}</h5>
                     <h2>{eve.name}</h2>
                     <h3>{eve.genre} &nbsp;I</h3>
                     <h4>&nbsp;&nbsp;{eve.author}</h4>
               </Wrap>
           )
       })}
       </Contain>
        </Container>
  )
}
export default Event;

const Container = styled.div`
    max-width:1280px;
    margin:70px auto 0px auto;
    h1{
        font-size:20px;
        font-weight:700;
    } 
`

const Contain = styled.div`
    width: 100%;
    display:flex;
`

const Wrap = styled.div`
    margin:15px 0 0 0;
    width:16.66%;
    text-align:center;

    h2{
        font-size:18px;
        font-weight:400;
        margin:15px 0 0 0;
    }

    h3{
        display:inline-block;
        font-weight:400;
        font-size:13px;
        opacity:0.4;
    }

    h4{
        display:inline-block;
        font-weight:400;
        font-size:13px; 
        opacity:0.8;
    }

    h5{
        margin:20px 0 0 0;
        background:#ff0008;
        display:inline-block;
        color:white;
        padding:2px 10px;
        border-radius:20px;
    }
`

const ImgWrap =styled.div`
    width:100%;
    padding:20px 20px 0 20px;
    box-sizing:border-box;

    img{
        width:100%;
        border-radius: 50%;
    }
`