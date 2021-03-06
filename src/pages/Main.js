import styled from 'styled-components';
import FirstSlider from "../components/main/FirstSlider";
import Popular from "../components/main/Popular";
import Banner from "../components/main/Banner";
import New from "../components/main/New";
import Event from "../components/main/Event";
import Famous from "../components/main/Famous";
import PopularEnding from "../components/main/PopularEnding";
import Footer from "../components/Footer";
import dayweb from '../components/dayweb.json'
import { useData } from '../contexts/DataContext';
import { useEffect } from 'react';


const Main = () => {
  const { currentItems, filterRandom } = useData();



  return (
    <Containers>
        <FirstSlider/>
        <Popular title="오늘의 인기 TOP" data={currentItems}/>
        <Pat />
        <Popular title="금주의 화제작" data={currentItems}/>
        <Banner/>
        <New/>
        <Event />
        <Famous />
        <PopularEnding />
    </Containers>
  )
}
export default Main;
const Containers = styled.div`
    width:100%;
    height: auto;
    font-family: 'Pretendard';
`

const Pat = styled.div`
  margin:30px 0 0 0;
`