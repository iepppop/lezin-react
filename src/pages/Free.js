import styled from "styled-components";
import FreeSlide from "../components/free/FreeSlide";
import { freeslides } from "../components/romance/FreeData";

const Free = () => {
  return (
    <div>
      <FreeSlide data={freeslides }/>
    </div>
  )
}
export default Free;