import Pages from "../components/romance/Pages";
import Slide from "../components/romance/Slide";
import { romaceslides } from "../components/romance/SlideData";

const Romance = () => {
  return (
    <div>
      <Slide data={romaceslides}/>
      <Pages/>
    </div>
  )
}
export default Romance;