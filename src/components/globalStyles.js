import { createGlobalStyle } from "styled-components";

    
export const GlobalStyles = createGlobalStyle`
@import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@200;300;400;500;600;700;900&display=swap');

    body{
        background:${({ theme }) => theme.body};
        color:${({ theme }) => theme.text}; 
        overflow-x:hidden;
        }
        ul,li{
            list-style:none;
          }
        *{
            padding:0; 
            margin:0;
         
    }
`;

export const lightTheme = {
    body: '#fff',
    text: '#181818'
};

export const darkTheme = {
    body: '#181818',
    text: '#eee'
};