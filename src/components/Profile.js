import { useEffect, useState,useRef  } from 'react';
import styled from 'styled-components';
import { useAuth } from '../contexts/AuthContext';
import { BsArrowLeftShort } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const { currentUser, upload, logout, signInWithGoogle } = useAuth();
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

    useEffect(() =>{
        console.log(currentUser)
    })



    return (
        <ContainWrap>
            <Header>
                <HeaderBox>
                <HeaderWrap>
                <span onClick={() => navigate(-1)}><BsArrowLeftShort /></span>
                <h1>내 프로필</h1>
                <Logout
                   onClick={async e => {
                     e.preventDefault();
                      logout();
                      navigate('/')  ;                   
                   }}
                   >로그아웃
                   </Logout>
                </HeaderWrap> 
                </HeaderBox>
            </Header>
            <BorderColor />
            <Border />
        <Contain>
            
            <Account>
            <input type="file" style={{ display: "none" }} onChange={handleChange} ref={imageInput}/>
            <Img><img src={photoURL} alt="avatar" /></Img>
            <ModifyBtn onClick={onCickImageUpload}>이미지 편집</ModifyBtn>
            <Content>
           {currentUser && currentUser.email !== null ? (<h1>이름: {currentUser.email.split('@')[0].toUpperCase()}</h1>)  : (<h3>{currentUser.displayName.toUpperCase()}</h3>)}
           {currentUser && currentUser.email ? (<h2>이메일: {currentUser.email}</h2>) : null}
           </Content>
            </Account>
        </Contain>
        <SavedArea>
        <Saved disabled={loading || !photo} onClick={handleClick}>변경 내용 저장</Saved>
        </SavedArea>
        </ContainWrap>
    )
}
export default Profile;

const ContainWrap = styled.div`
    width:100%;
    height:93vh;
    background:${(props) => props.theme.border};
`

const Header = styled.div`
    width:100%;
    height:60px;
    padding:23px 0;
    background:${(props) => props.theme.body};
`

const HeaderBox = styled.div`
    max-width:1320px;
    margin:0 auto;
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
    top:-7px;
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
    background:${(props) => props.theme.lborder};
`

const BorderColor = styled.div`
    width:70px;
    background:red;
    height:2px;
    position:absolute;
    left:50%;
    transform:translate(-50%,0);
`

const Contain = styled.div`
   display:flex;
   align-items: center;
   justify-content:center;
`

const Account = styled.div`
    display:flex;
    align-items: center;
    flex-direction: column;
    padding:40px 0 0 0;
    width:360px;
    height:100%;
    background:${(props) => props.theme.body};
    border:1px solid ${(props) => props.theme.lborder};
    margin:50px 0 0 0;
    border-radius:30px;

    button{
        border:1px solid ${(props) => props.theme.lborder};
        cursor: pointer;
        color: ${(props) => props.theme.text};
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

const SavedArea = styled.div`
    display:flex;
    justify-content: center;
`

const Saved = styled.button`
    background:#2d2d2d;
    width:150px;
    color:#fff;
    border-radius:0px;
    font-weight:600;
    padding: 16px 15px;
    margin:30px 0 0 0;
    border-radius:20px;

    :disabled {
        opacity:0.9;
    }
`


const Content = styled.div`
    padding:35px 0;
    h3{
        font-size:20px;
    }
`

const Img = styled.div`
    height:250px;
    width:250px;
    overflow:hidden;
    display:flex;
    aling-items: center;
    border-radius:50%;
    border:1px solid #eee;

    img{
        object-fit: cover;
        width:100%;
    }
`

