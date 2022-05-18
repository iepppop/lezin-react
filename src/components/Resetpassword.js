import { useState } from "react";
import styled, { keyframes } from "styled-components";
import { useAuth } from "../contexts/AuthContext";
import { BsFillExclamationCircleFill } from "react-icons/bs";
import { VscLoading } from "react-icons/vsc";
import { AiFillCheckCircle } from 'react-icons/ai'
import { useLocation, useNavigate } from "react-router-dom";

const Resetpassword = () => {
  const { resetPassword } = useAuth();
  const [msg, setMsg] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const useQuery = () => {
    const location = useLocation();
    return new URLSearchParams(location.search);
  }
  
  const query = useQuery();
  const [ newPassword, setNewPassword ] = useState('');
  
    return (
    <Container>
      <Contain>
        <Wrap>
          <Content
            onSubmit={async (e) => {
              e.preventDefault();
              resetPassword(query.get('oobCode'), newPassword)
              .then(res=>{
                console.log(res);
                navigate('/login');
              })
              .catch(err => setMsg(err.message))
            }
          }
          >
            {/* <h1>비밀번호 재설정</h1> */}

            <Input
              id="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              name="password"
              type="password"
              autoComplete="password"
              placeholder="비밀번호"
            />

            <h2>
             변경할 비밀번호를 입력해주세요.
            </h2>
            {msg.length > 1 ? (
              <ErrorMSg>
                <BsFillExclamationCircleFill style={{ margin: "0 10px 0 0" }} />
                {msg === 'Firebase: Password should be at least 6 characters (auth/weak-password).'
                ? '비밀번호를 6자 이상 입력해주세요.' : ''}
              </ErrorMSg>
            ) : (
              ""
            )}
                {success.length > 1 ? (
              <SuccessMsg>
                <AiFillCheckCircle style={{ margin: "0 10px 0 0" }} /> {success}
              </SuccessMsg>
            ) : (
              ""
            )}
            {isSubmitting ? (
              <Send style={{ opacity: "0.4" }}>
                <LoadingIcon>
                  <VscLoading />
                </LoadingIcon>
              </Send>
            ) : (
              <Send type="submit">비밀번호 재설정</Send>
            )}
          </Content>
        </Wrap>
      </Contain>
    </Container>
  );
};
export default Resetpassword;

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.login};
`;

const Contain = styled.div`
  max-width: 1320px;
  height: 93vh;
  margin: 0 auto;
  padding: 0 20px;
`;

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Content = styled.form`
  width: 300px;

  h1 {
    font-weight: 600;
    font-size: 20px;
  }

  h2 {
    font-weight: 500;
    font-size: 12px;
    margin: 10px 0 0 0;
    line-height: 130%;
    padding: 0 10px;
  }
`;

const Input = styled.input`
  border: 1px solid #eee;
  padding: 15px;
  width: 300px;
  outline: none;
  margin: 20px 0 0 0;
  border-radius: 5px;
  height: 51px;
`;

const ErrorMSg = styled.div`
  font-size: 12px;
  padding: 15px 10px 5px 10px;
  width: 300px;
  font-weight: 600;
  // color:#696969;
  color: #ed1c24;
  display: flex;
  align-items: center;
`;

const SuccessMsg = styled.div`
  font-size: 12px;
  padding: 15px 10px 5px 10px;
  width: 300px;
  font-weight: 600;
  color: green;
  display: flex;
  align-items: center;
`;

const Send = styled.button`
  padding: 15px;
  width: 300px;
  height: 51px;
  border-radius: 5px;
  background: #ed1c24;
  margin: 20px 0 0 0;
  color: white;
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
  border: 1px solid #ed1c24;
  transition: 0.3s;

  &:hover {
    opacity: 0.8;
  }
`;

const rotate = keyframes`
from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const LoadingIcon = styled.div`
  animation: ${rotate} 1s infinite;
`;
