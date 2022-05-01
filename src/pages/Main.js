import Header from "../components/Header";
import styled from 'styled-components';
import FirstSlider from "../components/FirstSlider";
import Popular from "../components/Popular";
import Banner from "../components/Banner";
import New from "../components/New";
import Event from "../components/Event";
import Famous from "../components/Famous";

const Main = () => {
  return (
    <Container>
        <Header />
        <FirstSlider/>
        <Popular direction="오늘의 인기 TOP"/>
        <Popular direction="금주의 화제작"/>
        <Banner />
        <New />
        <Event />
        <Famous />
    </Container>
  )
}
export default Main;

const Container = styled.div`
    width:100vw;
    height: auto;
    font-family: 'Pretendard';
`