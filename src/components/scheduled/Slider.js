import styled, {keyframes} from 'styled-components';

const Slider = () => {
  return (
    <Container>
      <Wrap>
        <SliderWrap>
          <Box>
            <BoxWrap>
          <MainSlider>
            <img src="https://blog.kakaocdn.net/dn/HDwjH/btrBXwb55DV/2cSKfkV5JPjQrz44mYfTz1/img.gif" />
            <Bgop />
            <Content>
              <span>
              <h1>NEW</h1>
              <Line />
              </span>
              <ContentDep>
                <Title>
                <h2>불멸의 날들</h2>
                <h3>시즌2 연재</h3>
                <h4>#액션 #불사 #불사신</h4>
                </Title>
                <Total>
                  <h5>1 / 3</h5>
                </Total>
              </ContentDep>
            </Content>
          </MainSlider>
          <Blank />
          <SubSlider>    
          <BgB />    
            <SubContent>
             <h1>러브오어헤이트</h1>
             <button><Icon>→</Icon> 다음작품보기</button>
            </SubContent>
            
              </SubSlider>
              </BoxWrap>
              </Box>
        </SliderWrap>
      </Wrap>
    </Container>
  )
}
export default Slider;

const Container = styled.div`
  width:100%;
  height:500px;
  background:#a52424;
`
const Wrap = styled.div`
  max-width:1320px;
  height: 100%;
  margin: 0 auto;
  display:flex;
  align-items:center;
  position:relative;
`

const SliderWrap = styled.div`
  width:100%;
  height:70%;
  display:flex;
  position:absolute;  padding:0 20px;
`

const Box = styled.div`
  width:200%;
  display:flex;
`

const BoxWrap = styled.div`
  width:100%;
  display:flex;
`

const MainSlider = styled.div`
  width:80%;
  background:#eee;
  height:100%;
  border-radius:15px;
  overflow:hidden;
  position:relative;

  img{
    object-fit:cover;
    width:100%;
  }
`

const Bgop = styled.div`
  width:100%;
  height:100%;
  // background: linear-gradient(to top, #000 5%, rgba(0,0,0,0.8) 25%, transparent 90%);
  position:absolute;
  bottom:0;
  z-index:1;
`

const Content = styled.div`
  position:absolute;
  z-index:2;
  top:0;
  left:0;
  padding:40px 60px;
  width:100%;
  height:100%;

  h1{
    color:white;
    font-size:12px;
  }

  span{
    height:50%;
    width:100%;
    display:inline-block;
  }
`

const Line = styled.div`
  width:27px;
  margin:3px 0 0 0;
  height:3px;
  background:red;
  color:white;
`

const ContentDep = styled.div`
  display:flex;
  justify-content:end;
  align-items:end;
  width:100%;
  height:50%;
  color: white;
  font-weight:500;

  h2{
    font-size:20px;
  }

  h3{
    font-size:20px;
  }

  h4{
    font-size:12px;
    font-weight:300;
    margin:10px 0 0 0;
  }
`

const Title = styled.div`
  width:90%;
`

const Total = styled.div`
  width:10%;
  display:flex;
  justify-content:end;

  h5{
    background:rgba(0,0,0,0.6);
    display:inline-block;
    padding:5px 10px;
    border-radius:20px;
    font-weight:200;
    font-size:10px;
  }
`


const Blank = styled.div`
  width: 2%;
`


const SubSlider = styled.div`
  width: 18%;
  height:100%;
  border-radius:15px;
  position:relative;
  background:url('https://ccdn.lezhin.com/v2/comics/5755073970438144/images/tall.webp?updated=1644553514948&width=720');
  background-size:cover;
  background-position:center center;
  overflow:hidden;
  cursor: pointer;

  img{
    height:100%;
    margin-left:-20px;
    objcet-fit:cover;
  }
`

const BgB = styled.div`
  background:rgba(0,0,0,0.6);
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:120%;
  z-index:1;
  transition:0.3s;

  ${SubSlider}:hover & {
    top:250px;
  }
`

const SubContent = styled.div`
  z-index:999;
  width:100%;
  color:white;
  position:absolute;
  bottom:30px;
  text-align:center;

  h1{
    font-size:15px;
  }

  button{
    color:white;
    font-weight:500;
    margin:5px 10px 0 25px;
  }
`

const nexteffef = keyframes`
0% {
  left:65px;
 }
 50% {
  left:70px;
 }
 100% {
  left:65px;
 }
`

const Icon = styled.div`
  display:inline-block;
  font-weight:200;
  position:absolute;
  left:60px;
  bottom:2px;
  padding:0 5px 0 0;
  animation: ${nexteffef} 2s infinite linear alternate;;
`
