import styled from 'styled-components';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

const Button = ({ direction }) => {
    return (
        <div>
            {direction === 'next' ?
                (<NextButton>
                    <MdKeyboardArrowRight />
                </NextButton>) : (
                    <PrevButton>
                        <MdKeyboardArrowLeft />
                    </PrevButton>
                )

            }
        </div>
    )
}
export default Button;

const NextButton = styled.button`
    position:absolute;
    z-index: 99;
    background:#red;
    right:-32px;
    top:50%;
    transform:translate(0,-50%);
    background:rgba(255,255,255,0.8);
    padding:20px 20px 15px 20px;
    border-radius:50%;
    color:#000;
    border: 1px solid #eee;
    font-size:20px;
    z-index:999;
    cursor: pointer;
`

const PrevButton = styled.button`
    position:absolute;
    z-index: 99;
    left:-32px;
    top:50%;
    transform:translate(0,-50%);
    background:rgba(255,255,255,0.8);
    padding:20px 20px 15px 20px;
    border-radius:50%;
    color:#000;
    border: 1px solid #eee;
    font-size:20px;
    z-index:999;
    cursor: pointer;
`
