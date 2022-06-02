import styled from 'styled-components';
import { useData } from '../contexts/DataContext';
import { useEffect } from 'react';
import Slide from '../components/romance/Slide';
import { dramasdata } from './DramaData';

const Drama = () => {
    const { filterResult, currentItems } = useData();

  useEffect(() => {
    filterResult('드라마');
}, [])

  return (
    <Container> 
        <Wrap>
      <Slide data={dramasdata} />
      
      {
      currentItems.map((values, idx) => {
          const { id, title, artist, genre, thumbnail } = values;
          return (
                  <Slider key={title}>
                      <ImgBox>
                          <img src={thumbnail} alt={title} />
                          <Rank><h2></h2></Rank>
                      </ImgBox>
                      <h1>{title}</h1>
                      <span>{artist}</span>

                  </Slider>
          )
      })}
      </Wrap>
      </Container>
  )
}
export default Drama;

const Container = styled.div`
    max-width:1320px;
    margin: 0 auto;
    height:350px;
    position:relative;
`
const Wrap = styled.div`
    width:100%;
    height:100%;
    padding:0 20px 0 0;
`

const Slider = styled.div`
    width:16.66%;
    padding: 0 0 0 20px;
    position:relative;
    box-sizing:border-box;
    height:280px;
    display:inline-block;

    h1{
        font-weight: 500;
        font-size:15px;
        margin:15px 0 0 15px;
    }

    h2{
        margin:3px 0 0 0;
        font-weight:500;
        opacity:0.8;
        font-size:13px; 
        display:inline-block;
    }

    span{
        display:inline-block;
        font-weight:500;
        opacity:0.4;
        font-size:13px; 
        margin:0 10px 0 15px;

    }

`

const ImgBox = styled.div`
    width:100%;
    height:200px;
    overflow:hidden;
    border-radius:10px;
    position:relative;

    &:hover img{
        transform: scale(1.08);
    }

    img{
        width:100%;
        height:250px;
        object-fit: cover;
        transition:0.3s;
    }
`

const Rank = styled.div`
    position:absolute;
    bottom:-0;
    left:0;
    background: linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.4) 100%);
    width:100%;
    height:100%;

    h2{
        z-index:9999;
        font-size:70px;
        position:absolute;
        bottom:-18px;
        left:10px;
        color:white;
    }
`