import styled, { ThemeProvider } from "styled-components";
import lezinlogo from '../img/lezinlogo.png';
import { AiOutlineSearch } from 'react-icons/ai';
import { Link, Navigate, useLocation } from "react-router-dom";
import { useState } from 'react';
import { Toggle } from './Toggle';
import { useAuth } from "../contexts/AuthContext";

const Header = ({ theme, toggleTheme }) => {
    const [search, setSearch] = useState(false);
    const { currentUser, logout } = useAuth();
    const location = useLocation();

    return (
        <Contain>
            {location.pathname === '/login' || location.pathname === '/register' ? (<ContainBg />) : null}
            <Wrap>
                <Logo><Link to="/">
                    <img src={lezinlogo} alt="" width={35} height={35} />
                </Link></Logo>

                <Menu>
                    {location.pathname === '/login' || location.pathname === '/register' ? (
                        <></>
                    ) : (
                        <WrapUl>
                            <li><Link to="/scheduled">연재</Link></li>
                            <li>로맨스</li>
                            <li>소년</li>
                            <li>드라마</li>
                            <li>BL</li>
                            <li>후방주의</li>
                            <li>무료</li>
                            <li>랭킹</li>
                            <li>이벤트</li>
                        </WrapUl>
                    )}
                    <MenuUl>
                        <li>
                            <ClickInput style={{ right: `${search ? '0' : '-100%'}` }}>
                                <AiOutlineSearch onClick={() => setSearch(false)} style={{ margin: '0 10px 0 0' }} />
                                <input type="" placeholder="작품/작가명을 검색해주세요" />
                            </ClickInput>
                            <AiOutlineSearch onClick={() => setSearch(true)} style={{ cursor: 'pointer' }} /></li>
                        <li> <Toggle theme={theme} toggleTheme={toggleTheme} /></li>
                        {location.pathname === '/login' || location.pathname === '/register' ? null : (
                            <button>
                                {currentUser
                                    ? (<span
                                        onClick={async e => {
                                            e.preventDefault()
                                            logout()
                                        }}
                                    >로그아웃</span>)
                                    : (
                                        <Link to="/login">로그인</Link>
                                    )}
                            </button>
                        )}
                    </MenuUl>
                </Menu>
            </Wrap>
        </Contain>
    )
}
export default Header;

const Contain = styled.div`
    width:100%;
    height:7vh;
    position:relative;
    border-bottom: 1px solid ${(props) => props.theme.border};
`

const ContainBg = styled.div`
    background:${(props) => props.theme.login};
    width:100%;
    height:100%;
    position:absolute;
    z-index:-1;
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
    justify-content: end;
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
        background: ${(props) => props.theme.lback};
        border:1px solid ${(props) => props.theme.lborder};
        border-radius:20px;
        padding:5px 15px 6px;
        margin:10px 0 6px 10px;
        font-weight:600;
        transition:0.3s;
        cursor:pointer;
    }

    button:hover{
        background: ${(props) => props.theme.login};
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