import styled from "styled-components";

const Banner = () => {
  return (
      <Contain>
    <Container>
      <Event>
          <h5>5월 릴레이 할인</h5>
          <h1>총 <span>30 작품</span> , 최대 <span>50% 할인</span></h1>
          </Event >
    </Container>
    </Contain>
  )
}
export default Banner;

const Contain = styled.div`
    max-width:1280px;
    margin:150px auto 10px auto; 
    padding: 0 20px;  
`

const Container = styled.div`
    background:url('/image/banner.png') no-repeat;
    height:170px;
    border-radius:20px;
    overflow: hidden;
    background-size: cover;
    background-position: center center;
`

const Event = styled.div`
    flex-direction:column;
    display:flex;
    justify-content:center;
    align-items:center;
    height:100%;
    margin:0 auto;
    text-align:center;
    padding:0 20px;

    h5{
        border-radius:15px;;
        color:#000;
        background:#fff;
        margin:0 0 10px 0;
        padding:5px 20px;
        display:inline-block;
    }

    h1{
      
        color:#fff;
    }

    span{
        color:#febe23;
        }
    
`