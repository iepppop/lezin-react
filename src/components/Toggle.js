import { BsSun, BsMoonFill } from 'react-icons/bs';


export const Toggle = ({ theme, toggleTheme }) => {
    return(
        <div onClick={toggleTheme}>
           { theme === 'light' ? < BsSun/> : < BsMoonFill/>}
        </div>
    )
}