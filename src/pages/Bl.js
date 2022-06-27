import { useEffect } from "react";
import styled from "styled-components";
import BlSlider from "../components/BL/BlSlider";
import { useData } from "../contexts/DataContext";
import { Link } from "react-router-dom";

const Bl = () => {
  const { filterResult, currentItems } = useData();

  useEffect(() => {
    filterResult("BL");
  }, []);
  return (
    <>
      <BlSlider />
      <Container>
        <Wrap>
          {currentItems.map((values, idx) => {
            const { id, title, artist, genre, thumbnail, en } = values;
            return (
              <Slider key={title}>
                <Link to={`/comics/${en}`}>
                  <ImgBox>
                    <img src={thumbnail} alt={title} />
                    <Rank>
                      <h2></h2>
                    </Rank>
                  </ImgBox>
                  <h1>{title}</h1>
                  <span>{artist}</span>
                </Link>
              </Slider>
            );
          })}
        </Wrap>
      </Container>
    </>
  );
};
export default Bl;

const Container = styled.div`
  width: 1320px;
  margin: 0 auto;
  height:auto;
  position: relative;
  padding: 140px 0 0 0;
`;

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 20px 0 0;
`;

const Slider = styled.div`
  width: 16.66%;
  padding: 0 0 0 20px;
  position: relative;
  box-sizing: border-box;
  height: 280px;
  display: inline-block;

  h1 {
    font-weight: 500;
    font-size: 15px;
    margin: 15px 0 0 15px;
  }

  h2 {
    margin: 3px 0 0 0;
    font-weight: 500;
    opacity: 0.8;
    font-size: 13px;
    display: inline-block;
  }

  span {
    display: inline-block;
    font-weight: 500;
    opacity: 0.4;
    font-size: 13px;
    margin: 0 10px 0 15px;
  }
`;

const ImgBox = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  border-radius: 10px;
  position: relative;

  &:hover img {
    transform: scale(1.08);
  }

  img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    transition: 0.3s;
  }
`;

const Rank = styled.div`
  position: absolute;
  bottom: -0;
  left: 0;
  background: linear-gradient(
    to bottom,
    transparent 60%,
    rgba(0, 0, 0, 0.4) 100%
  );
  width: 100%;
  height: 100%;

  h2 {
    z-index: 9999;
    font-size: 70px;
    position: absolute;
    bottom: -18px;
    left: 10px;
    color: white;
  }
`;
