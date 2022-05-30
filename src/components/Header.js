import styled, { ThemeProvider } from "styled-components";
import lezinlogo from '../img/lezinlogo.png';
import { AiOutlineSearch } from 'react-icons/ai';
import { Link, Navigate, useLocation } from "react-router-dom";
import { useState } from 'react';
import { Toggle } from './Toggle';
import { useAuth } from "../contexts/AuthContext";
import SearchBar from "./SearchBar";
import dayweb from './dayweb.json';

const Header = ({ theme, toggleTheme }) => {
    const [search, setSearch] = useState(false);
    const { currentUser, logout } = useAuth();
    const location = useLocation();
    const webtoon = dayweb.webtoon;

    return (
        <Contain>
            {location.pathname === '/login' 
            || location.pathname === '/register' 
            || location.pathname === '/forgot-password'
            ? (<ContainBg />) : null}
            <Wrap>
                <Logo><Link to="/">
                    <img src={lezinlogo} alt="" width={35} height={35} />
                </Link></Logo>

                <Menu>
                    {location.pathname === '/login' 
                    || location.pathname === '/register'
                    || location.pathname === '/forgot-password'
                     ? (
                        <></>
                    ) : (
                        <WrapUl>
                            <li><Link to="/scheduled">연재</Link></li>
                            <li><Link to="/romance">로맨스</Link></li>
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
                            <ClickInput style={{ opacity: `${search ? '1' : '0'}`, zIndex: `${search ? '99' : '-1'}` }}>
                                <AiOutlineSearch onClick={() => setSearch(false)} style={{ padding : '0 0 0 0' }} />
                                <SearchBar placeholder="작품/작가명을 검색해주세요." data={webtoon}/>
                            </ClickInput>
                            <AiOutlineSearch onClick={() => setSearch(true)} style={{ cursor: 'pointer' }} /></li>
                        <li> <Toggle theme={theme} toggleTheme={toggleTheme} /></li>
                        {location.pathname === '/login' || location.pathname === '/register' ? null : (
                            <>
                                {currentUser
                                    ? (
                                        <button>
                                            <span
                                                onClick={async e => {
                                                    e.preventDefault()
                                                    logout()
                                                }}
                                            >로그아웃</span>
                                        </button>)
                                    : (
                                        <Link to="/login">
                                            <button>로그인</button>
                                        </Link>
                                    )}
                            </>
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
    border-bottom:1px solid ${(props) => props.theme.lborder};
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

    li{
        font-size:19px;
        margin:8px 0 0 0;
        padding:0 10px;
        cursor: pointer;
    }

    input{
        border:1px solid #eee;
        border-radius:10px;
        padding:9px 14px;
        outline: none;
    }

    button{
        border:1px solid ${(props) => props.theme.lborder};
        border-radius:20px;
        padding:5px 15px 6px;
        margin:10px 0 6px 10px;
        font-weight:600;
        transition:0.3s;
        cursor:pointer;
        color:${(props) => props.theme.text};
    }

    button:hover{
        background: #2d2d2d;
        color:white;
    }
`

const ClickInput = styled.div`
    position:absolute;
    top:50%;
    transform:translate(0,-50%);
    cursor:pointer;
    transition:0.3s;
    right:0;
    display:flex;
    align-items:center;
    z-index:9999;
`