import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

const Footer = () => {
  const location = useLocation();
  return (
 <>
 {location.pathname === "/login" 
 ||location.pathname === "/register"
 || location.pathname === "/forgot-password"
 || location.pathname.includes("comics")
 ?null : (
      <Container>
      <Contain>
        <FooterWrap>
          <Firstbox>
            <Image src="https://pds.saramin.co.kr/company/logo/202008/28/qfr3ks_byi4-eii97w_logo.png" width={100} />
            <h5>(주)레진엔터테인먼트</h5>
          </Firstbox>
          <Secondbox>
            <SecondUl>
              <li>회사 소개</li>
              <li>사업자정보확인</li>
              <li>이용약관</li>
              <li>개인정보처리방침</li>
              <li>청소년보호정책</li>
              <li>고객지원/공지사항</li>
            </SecondUl>
            <span>
              레진코믹스의 모든 웹툰들은 저작권법에 의거 보호받고 있습니다. 저작권자 또는 레진코믹스의 승인없이 웹툰의 일부 또는 전체를 복사하여 다른 매체(개인 미디어 포함)에 게재하는 행위는 저작권법에 의거 법적 조치에 처해질 수 있습니다. 언어/국가별로 서비스되는 작품 및 운영 방침이 다르게 적용될 수 있습니다.
            </span>
          </Secondbox>
          <Thirdbox>
            <li><img src="https://cdn.loud.kr/LOUD_IMG/common/ico-sns-youtube-gray.png" width={30} /></li>
            <li><img src="https://cdn.loud.kr/LOUD_IMG/common/ico-sns-instagram-gray.png" width={30} /></li>
            <li><img src="https://cdn.loud.kr/LOUD_IMG/common/ico-sns-facebook-gray.png" width={30} /></li>
            <li><img src="https://cdn.loud.kr/LOUD_IMG/common/ico-sns-blog-gray.png" width={30} /></li>
          </Thirdbox>
        </FooterWrap>
      </Contain>
    </Container>
 )}
 </>
  )
}
export default Footer;

const Container = styled.div`
    width:100%;
    border-top: 1px solid  ${(props) => props.theme.border};
    height:120px;
    margin:40px 0 0 0;
    padding:0 20px;
`

const Contain = styled.div`
    width:1280px;
    margin: 0 auto;
    color: ${(props) => props.theme.text};
    height: 100%;
`

const Image = styled.img`

`

const FooterWrap = styled.div`
  width:100%;
  height:100%;
  display:flex;
  padding:0 0 0 0;
  align-items: center;
`

const Firstbox = styled.div`
  align-items: first;
  width:20%;
  justify-content: first;
  display:flex;
  padding:0 0 0 0;
  align-items: first;
  flex-direction: column;

  
  h5{
    color: ${(props) => props.theme.text};
    font-weight:600;
    font-size:11px;
    margin:5px 0 0 0;
    opacity:0.9;
  }
`

const Secondbox = styled.ul`
  width:60%;
  display:flex;
  padding:0 0 0 0;
  flex-direction: column;
  span{
    color: ${(props) => props.theme.text};
    opacity:0.8;
    display:block;
    font-weight:600;
    font-size:12px;
    margin:10px 0 0 0;
  }
`

const SecondUl = styled.ul`
  color: ${(props) => props.theme.text};
  display:flex;
  font-weight:600;
  font-size:12px;

  li{
    margin: 0 20px 0 0;
  }

  li:last-child{
    margin: 0 0 0 0;
  }
`

const Thirdbox = styled.ul`
  width:20%;
  display:flex;
  justify-content: end;
  align-items: center;
  height:100%;

  li{
    margin: 0 10px 0 0;
  }

  li:last-child{
    margin: 0 0 0 0;
  }
`