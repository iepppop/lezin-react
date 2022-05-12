import styled from 'styled-components';
import FirstSlider from "../components/main/FirstSlider";
import Popular from "../components/main/Popular";
import Banner from "../components/main/Banner";
import New from "../components/main/New";
import Event from "../components/main/Event";
import Famous from "../components/main/Famous";
import PopularEnding from "../components/main/PopularEnding";
import lezinlogo from '../img/lezinlogo.png';
import { AiOutlineSearch } from 'react-icons/ai';
import Footer from "../components/Footer";


const Main = () => {
  return (
    <Containers>
    <Container>

            
            {/* <Wrap>
       
                <Logo><Link to ="/">
                <img src={lezinlogo} alt="" width={35} height={35} />
                </Link></Logo>
               
                <Menu>
                    <WrapUl>
                     <li><Link to ="/scheduled">연재</Link></li>
                        <li>로맨스</li>
                        <li>소년</li>
                        <li>드라마</li>
                        <li>BL</li>
                        <li>후방주의</li>
                        <li>무료</li>
                        <li>랭킹</li>
                        <li>이벤트</li>
                    </WrapUl>
                    <MenuUl>
                        <li>
                            <ClickInput style={{right:`${search ? '0' : '-100%'}`}}>
                            <AiOutlineSearch  onClick={()=>setSearch(false)} style={{margin:'0 10px 0 0'}}/>
                            <input type="" placeholder="작품/작가명을 검색해주세요"/>
                            </ClickInput>
                            <AiOutlineSearch onClick={()=>setSearch(true)} style={{cursor:'pointer'}}/></li>
                        <li> <Toggle theme={theme} toggleTheme={toggleTheme} /></li>
                        <button>로그인</button>
                    </MenuUl>
                </Menu>
            </Wrap> */}
        </Container>
        <FirstSlider/>
        <Popular title="오늘의 인기 TOP"/>
        <Pat />
        <Popular title="금주의 화제작"/>
        <Banner/>
        <New/>
        <Event />
        <Famous />
        <PopularEnding />
        <Footer />
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

const Container = styled.div`
    width:100%;
`

const Wrap = styled.div`
    max-width:1320px;
    height: 100%;
    margin: 0 auto;
    padding:0 20px;
    display:flex;
`

const Logo = styled.div`
    display:flex;
    align-items:center;
    img{
    cursor: pointer;
    }
`

const Menu = styled.div`
    display:flex;
    width: 100%;
    height: 100%;
    align-items: center;
`
const WrapUl = styled.ul`
    display:flex;
    width: 70%;
    height:100%;
    display:flex;
    align-items: center;
    margin:0 0 0 30px;
    
    li{
        padding:0 20px;
        font-weight:600;
        cursor: pointer;
    }

    a:hover{
        color:#ed1c24;
    }

    li:hover{
        color:#ed1c24;
    }
`

const MenuUl = styled.ul`
    width:30%;
    height:100%;
    display: flex;
    justify-content: end;
    align-items: center;
    position:relative;
    overflow:hidden;

    li{
        font-size:19px;
        margin:8px 0 0 0;
        padding:0 10px;
        cursor: pointer;
    }

    input{
        border:1px solid #eee;
        border-radius:15px;
        padding:10px 16px;
        outline: none;
    }

    button{
        background: rgba(255,255,255,0.9);
        border:1px solid #eee;
        border-radius:20px;
        padding:5px 15px 6px;
        margin:10px 0 6px 10px;
        font-weight:600;
    }
`

const ClickInput = styled.div`
    position:absolute;
    text-align:right;
    top:50%;
    transform:translate(0,-50%);
    cursor:pointer;
    transition:0.3s;
    right:0;
    display:flex;
    align-items:center;
`
const Icon = styled.div`
`