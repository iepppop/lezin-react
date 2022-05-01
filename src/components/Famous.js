import styled from 'styled-components';
import { famousline } from './FamousData';

const Famous = () => {
  return (
    <Container>
        <h1>명대사전</h1>
        <Wrap>
            {famousline.map((line,index)=>{
                return (
                    <Wrapper key={line.name}>
                        <ImgBox>
                     <img src={process.env.PUBLIC_URL + `/image/fa0${index + 1}.png`} alt={line.name} />
                     <Grad />
                     <AFamous>
                        <h2> {line.famous}</h2>
                        <h3> {line.famous2}</h3>
                        <h4>- {line.name}</h4>
                     </AFamous>
                     </ImgBox>
                     <Content>
                         <Imgline><img src={line.profile} /></Imgline>
                         <h5>{line.nickname}</h5>
                     </Content>
                    </Wrapper>
                )
            })}
        </Wrap>
        </Container>
  )
}
export default Famous;

const Container = styled.div`
    max-width:1280px;
    margin:70px auto 0px auto;

    h1{
        font-size:20px;
        font-weight:700;
    }
`

const Wrap = styled.div`
    margin:39px 0 0 0;
    width:100%;
    display:flex;
`

const Wrapper = styled.div`
    width:33.33%;
    padding:0 30px 0 0;

    :last-child{
        padding:0 0 0 0;  
    }
`

const ImgBox = styled.div`
    position:relative;
    display:flex;
    justify-content:center;

    img{
        width:100%;
    }
`

const Grad = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    bottom:0;
    background: linear-gradient(to top, rgba(2,2,2,0.6), transparent)
`

const AFamous = styled.div`
    position:absolute;
    bottom:40px;
    width:80%;
    color:#f3f3f3; 
    font-family: 'JejuMyeongjo';

    h2{
        font-weight:400;
        font-size:26px;
    }

    h3{
        font-weight:400;
        font-size:26px;
        margin:5px 0 0 0;
        line-height:130%;
    }

    h4{
        font-family: 'Pretendard';
        font-weight:200;
        font-size:13px;
        margin:15px 0 0 0;
    }
`

const Content = styled.div`
    width:100%;
    display:flex;
    padding:10px;
    align-items:center;
    margin:10px 0 0 0;

    h5{
        margin:0 0 0 20px;
    }
`

const Imgline = styled.div`
    width:40px;
    height:40px;

    img{
        width:100%;
        border-radius:50%;
    }
`