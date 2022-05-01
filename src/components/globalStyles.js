import { createGlobalStyle } from "styled-components";

    
export const GlobalStyles = createGlobalStyle`
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