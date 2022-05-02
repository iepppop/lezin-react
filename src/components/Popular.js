import styled from 'styled-components';
import { populars } from './PopularData';
import { populars2 } from './Popular2Data';

const Popular = ({ direction }) => {
    return (
        <Container>
            <TopWrap>
                <Title>
                    {direction}
                </Title>
                <Wrapper>
               {direction ==='금주의 화제작' ? (
                   <>
                    {populars2.map((popular, index) => {
                        return (
                            <Slider key={popular.name}>
                                {
                                    index < 3 ? (<Ribbon>{index + 1}위</Ribbon>) : (null)
                                }
                                <img src={popular.img} alt={popular.name} />
                                <h1>{popular.name}</h1>
                                <span>{popular.genre}&nbsp;&nbsp;l</span><h2>{popular.author}</h2>
                            </Slider>
                        )
                    })}
                    </>
               ) : (
                <>
                {populars.map((popular, index) => {
                    return (
                        <Slider key={popular.name}>
                            {
                                index < 3 ? (<Ribbon>{index + 1}위</Ribbon>) : (null)
                            }
                            <img src={popular.img} alt={popular.name} />
                            <h1>{popular.name}</h1>
                            <span>{popular.genre}&nbsp;&nbsp;l</span><h2>{popular.author}</h2>
                        </Slider>
                    )
                })}
                </>
               )}
                </Wrapper>
            </TopWrap>
        </Container>
    )
}
export default Popular;

const Container = styled.div`
    max-width:1280px;
    margin: 0 auto;
    position:relative;
    height:450px;
`

const Title = styled.div`
    font-size:20px;
    font-weight:700;
    margin: 20px 0 20px 0;            
`

const TopWrap = styled.div`
    position: absolute;
    width:100%;
    overflow:hidden;
`

const Wrapper = styled.div`
    display:flex;
    width:100%;
`

const Slider = styled.div`
    min-width: 20%;
    padding:0 20px 0 0;    
    box-sizing:border-box;
    position:relative;

    img{
        width:100%;
        height:300px;
        object-fit: cover;
        border-radius:10px;
    }

    h1{
        font-weight: 500;
        font-size:18px;
        margin:15px 0 0 0;
    }

    h2{
        margin:3px 0 0 0;
        font-weight:500;
        opacity:0.8;
        font-size:14px; 
        display:inline-block;
    }

    span{
        display:inline-block;
        font-weight:500;
        opacity:0.4;
        font-size:14px; 
        margin:0 10px 0 0;

    }

    &:nth-child(5) {
        padding:0 0 0 0;
        }
`

const Ribbon = styled.div`
    position:absolute;
    right:30px;
    top:10px;
    z-index:1;
    color:#fff;
    font-size:13px;
    width:24px;

    :after {
        content: "";
        font-size: 10px;
        position: absolute;
        height:10px;
        border: 1.5em solid #ff0008;
        z-index: -1;
        top: -1em;
        border-top-width: 20px;
        border-bottom-color: transparent;
        right: 0;
    }
`