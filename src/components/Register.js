import React, { useState } from "react";
import styled, { keyframes } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../contexts/AuthContext";
import { BsFillExclamationCircleFill } from 'react-icons/bs';
import { VscLoading } from 'react-icons/vsc';
import useMounted from "./hooks/useMounted";

const Register = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSubmitting , setIsSubmittig] = useState(false);
    const { register }  = useAuth();
    const [msg, setMsg] = useState('');

    const mounted = useMounted();

    return (
        <Wrap>
            <Container>
                <Contain onSubmit={async e =>{
                    e.preventDefault();
                    setIsSubmittig(true);
                    register(email, password)
                    .then((response) => navigate('/'))
                    .catch((error)=> setMsg(error.message))
                    .finally(()=> mounted.current && setIsSubmittig(false));
                }}>
                    <Input 
                    id='email'
                    value={email} 
                    onChange={(e)=>setEmail(e.target.value)} 
                    name="email" 
                    type="email" 
                    autoComplete="email" 
                    placeholder="아이디" 
                     />
                    <Input 
                    id='password'
                    value={password} 
                    onChange={(e)=>setPassword(e.target.value)}
                    name="password" 
                    type="password" 
                    autoComplete="password" 
                    placeholder="비밀번호" 
                    />
                   {msg.length > 1 ? (
                        <ErrorMSg>
                            <BsFillExclamationCircleFill style={{margin:'0 10px 0 0'}}/> 
                            {msg === 'Firebase: Password should be at least 6 characters (auth/weak-password).' ? (<>비밀번호는 6자 이상이어야 합니다.</>) : msg ==="Firebase: Error (auth/invalid-email)." ? "이메일을 입력해주세요." : msg === 'Firebase: Error (auth/internal-error).' ? '비밀번호를 입력해주세요.' : msg === 'Firebase: Error (auth/email-already-in-use).' ? '이미 등록된 아이디입니다.' : msg}</ErrorMSg>
                   ) : ''}
                      {isSubmitting ? (
                       <Button style={{opacity:'0.4'}}>
                   <LoadingIcon>
                       <VscLoading />
                       </LoadingIcon>
                       </Button>) : (
                        <Button 
                        type="submit"
                        >회원 가입 완료</Button>
                   )}
                </Contain>
            </Container>
        </Wrap>
    )
}
export default Register;

const Wrap = styled.div`
    width:100%;
    height:100%;
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
    border-radius:5px;
    border:1px solid ${(props) => props.theme.login};
    background:#ed1c24;
    color:#fff;
    font-weight:500;
    font-size:16px;
    cursor: pointer;
    margin:20px 0 0 0;
    transition:0.3s;

    &:hover{
        background:#ea040d;
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