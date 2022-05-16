import React, {useRef, useEffect} from 'react';
import styled from 'styled-components';

const Login = () => {
    const ref = useRef();



  return (
    <Container>
        <Contain>
           <Input name="email" type="email" autoComplete="email" placeholder="아이디" required/>
           <Input name="password" type="password" autoComplete="password" placeholder="비밀번호" required/>
           <Button type="submit">로그인</Button>
        </Contain>
    </Container>
  )
}

export default Login;

const Container = styled.div`
    max-width:1320px;
    height:93vh;
    margin: 0 auto;
    padding:0 20px;
`

const Contain = styled.div`
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

    &:first-child {
        border-bottom:none;
        border-radius:5px 5px 0 0;
    }

    &:last-child {
        border-radius:0 0 5px 5px;
    }
`

const Button = styled.button`
    padding:15px;
    width:300px;
    border-radius:5px;
    background:red;
    margin:20px 0 0 0;
    color:white;
    font-weight:500;
    font-size:20px;
`