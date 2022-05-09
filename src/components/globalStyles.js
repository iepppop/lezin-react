import { createGlobalStyle } from "styled-components";


export const GlobalStyles = createGlobalStyle`
@import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@200;300;400;500;600;700;900&display=swap');
    *{
    padding:0; 
    margin:0;
    box-sizing:border-box; 
    }
 
    body{
        background:${({ theme }) => theme.body};
        color:${({ theme }) => theme.text}; 
  
        }

        ul,li{
            list-style:none;
          }
`;

export const lightTheme = {
    body: '#fff',
    text: '#181818',
    newBack: "#fbfbfb",
    newOne: '#f6f6f6',
    newTwo: '#181818',
    arrow: 'url(/image/arrow.png);'
};

export const darkTheme = {
    body: '#181818',
    text: '#eee',
    newBack: "#262626",
    newOne: '#1d1d1d',
    arrow: 'url(/image/arrowwh.png);'
};