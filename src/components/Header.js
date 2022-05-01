import styled, { ThemeProvider } from "styled-components";
import lezinlogo from '../img/lezinlogo.png';
import { AiOutlineSearch } from 'react-icons/ai';
import { useDarkMode } from '../components/useDarkMode';
import { Toggle } from '../components/Toggle';
import { GlobalStyles, lightTheme, darkTheme } from './globalStyles'

const Header = () => {
    const [ theme, toggleTheme ] = useDarkMode();
    const themeMode = theme === 'light' ? lightTheme : darkTheme;

    return (
        <ThemeProvider theme={themeMode}>
              <Container theme={theme}>
            <GlobalStyles />
            <Wrap>
                <Logo>
                <img src={lezinlogo} alt="" width={35} height={35} />
                </Logo>
                <Menu>
                    <WrapUl>
                        <li>연재</li>
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
                        <li><AiOutlineSearch /></li>
                        <li> <Toggle theme={theme} toggleTheme={toggleTheme} /></li>
                        <button>로그인</button>
                    </MenuUl>
                </Menu>
            </Wrap>
        </Container>
        </ThemeProvider>
    )
}
export default Header;

const Container = styled.div`
    width:100vw;
    height:5vh;
    padding:10px 0;
    border-bottom: ${({theme}) => (theme === 'dark' ? '1px solid #3a3a3a' : '1px solid #f8f8f8')};
`

const Wrap = styled.div`
    max-width: 1280px;
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
`

const MenuUl = styled.ul`
    width:30%;
    height:100%;
    display: flex;
    justify-content: end;
    align-items: center;

    li{
        font-size:19px;
        margin:8px 0 0 0;
        padding:0 10px;
        cursor: pointer;
    }

    button{
        background: rgba(255,255,255,0.9);
        border:1px solid #eee;
        border-radius:20px;
        padding:6px 15px;
        margin:6px 0 6px 10px;
        font-weight:600;
    }
`