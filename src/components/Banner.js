import styled from "styled-components";

const Banner = () => {
  return (
    <Container>
      <Event>
          <h5>5월 릴레이 할인</h5>
          <h1>총 <span>30 작품</span>, 최대<span> 50% 할인</span></h1>
          </Event >
    </Container>
  )
}
export default Banner;

const Container = styled.div`
    max-width:1280px;
    margin:20px auto;
    background:url('https://blog.kakaocdn.net/dn/bE6bQc/btrAUyf4207/iSrkFen5zZZSWiLQtk1Iyk/img.png');
    height:203px;
    text-align:center;
`

const Event = styled.div`
    height:203px;
    flex-direction:column;
    padding:80px 0 0 0;

    h5{
        background:#fff;
        padding:5px 15px;
        border-radius:15px;
        display:inline-block;
    }

    h1{
        margin:10px 0 0 0;
        color:#fff;
    }

    span{
        color:#ffce26;
    }
    
`