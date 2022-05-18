import React, { useRef, useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { BsFillExclamationCircleFill } from 'react-icons/bs';
import { VscLoading } from 'react-icons/vsc';
import useMounted from './hooks/useMounted';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { login, signInWithGoogle, signInWithFacebook } = useAuth();
    const [msg, setMsg] = useState('');
    const mounted = useMounted();

    return (
        <Wrap>
            <Container>
                <Contain
                    onSubmit={async e => {
                        e.preventDefault();
                        setIsSubmitting(true);
                        login(email, password)
                            .then((response) => {
                                navigate('/');
                            })
                            .catch((error) => setMsg(error.message))
                            .finally(() => mounted.current && setIsSubmitting(false));
                    }}>
                    <Input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="아이디"
                    />
                    <Input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        name="password"
                        type="password"
                        autoComplete="password"
                        placeholder="비밀번호"
                    />
                    {msg.length > 1 ? (
                        <ErrorMSg><BsFillExclamationCircleFill style={{ margin: '0 10px 0 0' }} /> {msg === 'Firebase: Password should be at least 6 characters (auth/weak-password).' ? (<>비밀번호는 6자 이상이어야 합니다.</>) : msg === "Firebase: Error (auth/invalid-email)." ? "이메일을 입력해주세요." : msg === 'Firebase: Error (auth/internal-error).' ? '비밀번호를 입력해주세요.' : msg === 'Firebase: Error (auth/email-already-in-use).' ? '이미 등록된 아이디입니다.' : msg === 'Firebase: Error (auth/wrong-password).' || 'Firebase: Error (auth/user-not-found).' ? '아이디 또는 비밀번호를 확인해주세요.' : msg}</ErrorMSg>
                    ) : ''}
                    {isSubmitting ? (
                        <Button style={{ opacity: '0.4' }}>
                            <LoadingIcon>
                                <VscLoading />
                            </LoadingIcon>
                        </Button>) : (
                        <Button
                            type="submit"
                        >로그인</Button>
                    )}
                    <BorderOr>
                    <h5>혹은</h5>
                    </BorderOr>
                    {/* <Link to="/register"><Register type="button">회원가입</Register></Link> */}
                    <Register
                        type="button"
                        onClick={() =>
                            signInWithGoogle()
                                .then(user => navigate('/'))
                                .catch(error => console.log(error))
                        }>
                        <LogoIcon><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/24px-Google_%22G%22_Logo.svg.png" height={16}></img></LogoIcon>구글로 로그인</Register>
                        <Register
                        type="button"
                        onClick={() =>
                            signInWithFacebook()
                                .then(user => console.log(user))
                                .catch(error => console.log(error))
                        }>
                           <LogoIcon><img src="https://blog.kakaocdn.net/dn/YIv5n/btrCp5LjyUl/36xbgDXfDwmdVZUDCQDy21/tfile.svg" height={16}></img></LogoIcon>페이스북으로 로그인</Register>
                        <RegisterForm>
<h4><Link to="/forgot-password">비밀번호 찾기 {'>'}</Link></h4> <SignIn type="button"><Link to="/register">회원가입</Link></SignIn>
                        </RegisterForm>
                </Contain>
            </Container>
        </Wrap>
    )
}

export default Login;

const Wrap = styled.div`
    background: ${(props) => props.theme.login};
`

const Container = styled.div`
    max-width:1320px;
    height:93vh;
    margin: 0 auto;
    padding:0 20px;
`

const Contain = styled.form`
    width: 100%;
    height:100%;
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
`

const Input = styled.input`
    border: 1px solid #eee;
    padding:15px;
    width:300px;
    outline:none;

    &:first-child {
        border-bottom:none;
        border-radius:5px 5px 0 0;
    }

    &:nth-child(2) {
        border-radius:0 0 5px 5px;
    }
`

const Register = styled.button`
    margin: 10px 0 0 0;
    border:1px solid ${(props) => props.theme.lborder};
    border-radius:5px;
    padding:15px;
    width:300px;
    font-weight:500;
    font-size:16px;
    cursor: pointer;
    background:${(props) => props.theme.newBack};
    display:flex;
    justify-content:center;
    color:${(props) => props.theme.text};

    :hover{
        opacity:0.8;
    }
`

const RegisterForm = styled.div`
    width:300px; 
    display:flex;
    justify-content: space-between;
    margin:15px 0 0 0;
    padding:5px;
    h4{
        font-size:12px;
        font-weight:500;

        :hover{
            opacity:0.8;
        }
    }

`
const SignIn = styled.button`
        font-size:12px;
        font-weight:500;

        :hover{
            opacity:0.8;
        }
`

const LogoIcon = styled.div`
    margin:0 15px 0 0;
`

const ErrorMSg = styled.div`
    font-size:12px;
    padding:15px 5px;
    width:300px;
    font-weight:600;
    // color:#696969;
    color:#ed1c24;
    display:flex;
    align-items:center;
`

const Button = styled.button`
    padding:15px;
    width:300px;
    height:51px;
    border-radius:5px;
    background:#ed1c24;
    margin:20px 0 0 0;
    color:white;
    font-weight:500;
    font-size:16px;
    cursor: pointer;
    border:1px solid #ed1c24;
    transition:0.3s;

    &:hover{
        opacity:0.8;
    }
`

const BorderOr = styled.div`
    width:300px;
    height:15px;
    margin:25px 0 0px 0;
    border-top:1px solid ${(props) => props.theme.lborder};
    position:relative;

    h5{
        position:absolute;
        left:50%;
        transform:translate(-50%,0);
        top:-7px;
        padding:0 10px;
        background: ${(props) => props.theme.login};
        font-size: 12px;
        color:${(props) => props.theme.text};
        font-weight:600;
    }
`


const rotate = keyframes`
from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const LoadingIcon = styled.div`
    animation: ${rotate} 1s infinite;
`