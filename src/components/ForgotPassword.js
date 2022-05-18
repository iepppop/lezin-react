import { useState } from 'react';
import styled from 'styled-components';
import { useAuth } from '../contexts/AuthContext';
import { BsFillExclamationCircleFill } from 'react-icons/bs';

const ForgotPassword = () => {
    const [ email, setEmail ] = useState('');
    const { forgotPassword } = useAuth();
    const [msg, setMsg] = useState('');
    return (
        <Container>
            <Contain>
                <Wrap>
                    <Content
                        onSubmit={
                            async e => {
                                e.preventDefault();
                                forgotPassword(email)
                                .then(res => console.log(res))
                                .catch(err => {setMsg(err.message)
                                console.log(err)});
                            }
                        }>
                        {/* <h1>비밀번호 재설정</h1> */}
                    
                            <Input 
                    id='email'
                    value={email} 
                    onChange={(e)=>setEmail(e.target.value)} 
                    name="email" 
                    type="email" 
                    autoComplete="email" 
                    placeholder="이메일" 
                     />
                     
                      <h2>비밀번호를 재설정할
                            레진코믹스 계정의 이메일을 입력해 주세요.</h2>
                            {msg.length > 1 ? (
                            <ErrorMSg>
                      <BsFillExclamationCircleFill style={{margin:'0 10px 0 0'}}/> 
                     {msg === 'Firebase: Error (auth/invalid-email).'
                     ? '올바른 이메일 형식이 아닙니다' : msg === 'Firebase: Error (auth/user-not-found).' ? '일치하는 회원 정보가 없습니다.' : msg}
                     </ErrorMSg>) : ''}
                            <Send>
                                보내기
                            </Send>
                       
                    </Content>
                </Wrap>
            </Contain>
        </Container>
    )
}
export default ForgotPassword;

const Container = styled.div`
    width:100%;
    height:100%;
    background: ${(props) => props.theme.login};
`

const Contain = styled.div`
    max-width:1320px;
    height:93vh;
    margin: 0 auto;
    padding:0 20px;
`

const Wrap = styled.div`
    width: 100%;
    height:100%;
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
`

const Content = styled.form`
    width:300px;

    h1{
        font-weight:600;
        font-size:20px;
    }

    h2{
        font-weight:500;
        font-size:12px;
        margin:10px 0 0 0;
        line-height:130%;
        padding:0 10px;
    }
`

const Input = styled.input`
    border: 1px solid #eee;
    padding:15px;
    width:300px;
    outline:none;
    margin:20px 0 0 0;
    border-radius:5px;    height:51px;
`

const ErrorMSg = styled.div`
    font-size:12px;
    padding:15px 10px 5px 10px;
    width:300px;
    font-weight:600;
    // color:#696969;
    color:#ed1c24;
    display:flex;
    align-items:center;
`

const Send = styled.button`
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