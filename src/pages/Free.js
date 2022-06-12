import { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { freeslides } from "./FreeData";
import { useData } from "../contexts/DataContext";

const Free = () => {
  const { filterResultFree, currentItems } = useData();

  useEffect(() => {
    filterResultFree('free');
  }, [])

  return (
    <div>
      <span data={freeslides} />
      <Contain>
        {
          currentItems.map((values, idx) => {
            const { id, title, artist, genre, thumbnail, en } = values;
            return (
              <Slider key={title}>
                <Link to={`/comics/${en}`}>
                  <ImgBox>
                    <img src={thumbnail} alt={title} />

                  </ImgBox>
                  <h1>{title}</h1>
                  <span>{artist}</span>
                </Link>
              </Slider>
            )
          })}

      </Contain>
    </div>
  )
}
export default Free;

const Contain = styled.div`
  max-width:1320px;
  margin: 0 auto;
  height:350px;
  position:relative;
  padding:30px 0 0 0;
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
