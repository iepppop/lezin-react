import { createGlobalStyle } from "styled-components";


export const GlobalStyles = createGlobalStyle`

    
    *{
    padding:0; 
    margin:0;
    box-sizing:border-box; 
    }
 
    body{
        width:100%;
        height:100%;
        margin: 0;
        background:${({ theme }) => theme.body};
        color:${({ theme }) => theme.text}; 
        font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
        overflow-y:scroll;
        }

    ul,li{
         list-style:none;
    }

    a{
        text-decoration:none;
        color:${({ theme }) => theme.text}; 
    }

    a:hover{
        color:
    }

    button{
        background:none;
        border:none;
        font-family: 'Pretendard';
    }
`;

export const lightTheme = {
    body: '#fff',
    text: '#181818',
    newBack: "#fbfbfb",
    newOne: '#f6f6f6',
    newTwo: '#181818',
    arrow: 'url(/image/arrow.png);',
    border:'#f8f8f8',
    login:'#f8f8f8',
    lborder:'#eee',
    lback:'#fff',
};

export const darkTheme = {
    body: '#181818',
    text: '#eee',
    newBack: "#262626",
    newOne: '#2d2d2d',
    arrow: 'url(/image/arrowwh.png);',
    border:'#3a3a3a',
    login:'#181818',
    lborder:'#3a3a3a',
    lback:'#3a3a3a',
};