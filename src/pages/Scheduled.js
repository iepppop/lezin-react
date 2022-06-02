import Day from "../components/scheduled/Day";
import Slider from "../components/scheduled/Slider";
import styled from 'styled-components';
import Slide from "../components/romance/Slide";
import Big from "../components/scheduled/Big";
import { bigslides } from '../components/scheduled/BigData'

const Scheduled = () => {
  return (
    <Contain>
      <Big data={bigslides} />
    <Day/>
    </Contain>
  )
}
export default Scheduled;

const Contain = styled.div`
 
`