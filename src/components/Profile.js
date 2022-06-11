import { useEffect, useState,useRef  } from 'react';
import styled from 'styled-components';
import { useAuth } from '../contexts/AuthContext';
import {BsArrowLeftShort} from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const { currentUser, upload, logout } = useAuth();
    const [photo, setPhoto] = useState(null);
    const [loading, setLoading] = useState(false);
    const [photoURL, setPhotoURL] = useState('https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png');
    const imageInput = useRef();
    const navigate = useNavigate();

    const onCickImageUpload = () => {
        imageInput.current.click();
      };

    const handleChange = (e) => {
        if(e.target.files[0]){
            setPhoto(e.target.files[0])
        }
    }

    const handleClick = () => {
        upload(photo, currentUser, setLoading);
    }

    useEffect(() =>{
        if(currentUser?.photoURL){
            setPhotoURL(currentUser.photoURL);
        }
    },[currentUser]);



    return (
        <ContainWrap>
            <Header>
                <HeaderWrap>
                <span onClick={() => navigate(-1)}><BsArrowLeftShort /></span>
                <h1>내 프로필</h1>
                <Logout
                   onClick={async e => {
                     e.preventDefault();
                      logout();
                   }}
                   >로그아웃
                   </Logout>
                </HeaderWrap> 
            </Header>
            <BorderColor />
            <Border />
        <Contain>
            
            <Account>
            <input type="file" style={{ display: "none" }} onChange={handleChange} ref={imageInput}/>
            <Img><img src={photoURL} alt="avatar" /></Img>
            <ModifyBtn onClick={onCickImageUpload}>이미지 편집</ModifyBtn>
            <Content>
           <h1>이름 : {currentUser ? currentUser.email.split('@')[0].toUpperCase()  : null}</h1> 
           <h2>이메일 : {currentUser ? currentUser.email  : null}</h2>
           </Content>
            <Saved disabled={loading || !photo} onClick={handleClick}>변경 내용 저장</Saved>
            </Account>
        </Contain>
        </ContainWrap>
    )
}
export default Profile;

const ContainWrap = styled.div`
    width:100%;
    height:100%;
`

const Contain = styled.div`
    margin: 0 auto;
    padding:0 20px;
    background:#f8f8f8;height:100%;
`

const Header = styled.div`
    max-width:1320px;
    margin: 20px auto;
    height:15px;
    padding:0 20px;
`

const HeaderWrap = styled.div`
    position:relative; 
    width:100%;
    height:100%;

    h1{
        text-align:center;
        font-size:15px;
        width:100%;
    }

    span{
        font-size:25px;
        font-weight:bold;
        width:100%;
        position:absolute;
        left:0;
        top:-5px;
        cursor: pointer;
    }
`
const Logout = styled.button`
    position:absolute;
    right:0;
    top:-5px;
    border:1px solid ${(props) => props.theme.lborder};
    border-radius:20px;
    padding:5px 15px 6px;
    font-weight:600;
    transition:0.3s;
    cursor:pointer;
    color:${(props) => props.theme.text};

    :hover{
        background: #2d2d2d;
        color:white;
    }
`

const Border = styled.div`
    width:100%;
    height:1px;
    background:#eee;
`

const BorderColor = styled.div`
    width:70px;
    background:red;
    height:2px;
    position:absolute;
    left:50%;
    transform:translate(-50%,0);
`

const Account = styled.div`
    display:flex;
    align-items: center;
    flex-direction: column;
    padding:40px 0 0 0;
    width:100%;
    height:100%;

    button{
        border:1px solid #eee;
        cursor: pointer;
    }

    h1, h2{
        font-weight:500;
        font-size:15px;
    }

    h1{
        margin:0 0 20px 0;
    }

`

const ModifyBtn = styled.button`
    border:1px solid #eee;
    padding: 10px 15px;
    border-radius:15px;
    cursor: pointer;
    margin:30px 0 0 0;
`

const Saved = styled.button`
    background:#2d2d2d;
    width:200px;
    color:#fff;
    border-radius:0px;
    font-weight:600;
    padding: 16px 15px;

    :disabled {
        opacity:0.9;
    }
`

const Content = styled.div`
    margin:50px 0;
`

const Img = styled.div`
    height:200px;
    width:200px;
    overflow:hidden;
    display:flex;
    aling-items: center;
    border-radius:50%;

    img{
        object-fit: cover;
        width:100%;
    }
`

