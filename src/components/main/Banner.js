import styled from "styled-components";

const Banner = () => {
  return (
      <Contain>
    <Container>
        <Wrap>
      <Event>
          <h5>5월 릴레이 할인</h5>
          <h1>총 <span>30 작품</span> , 최대 <span>50% 할인</span></h1>
          </Event >
          </Wrap>
    </Container>
    </Contain>
  )
}
export default Banner;

const Contain = styled.div`
    width:1320px;
    margin:120px auto 0 auto; 
    padding: 0 20px;  
    height:200px;
`

const Container = styled.div`
    height:170px;
    border-radius:20px;
    overflow: hidden;

`

const Wrap = styled.div`
    background:url('/image/banner.png') no-repeat;
    border-radius:20px;
    overflow: hidden;
    background-size: cover;
    background-position: center center;
    overflow:hidden;
    height:100%;
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