import Main from './pages/Main';
import styled , { ThemeProvider } from 'styled-components';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Scheduled from './pages/Scheduled';
import Header from './components/Header';
import { useDarkMode } from './components/useDarkMode';
import { GlobalStyles, lightTheme, darkTheme } from './components/globalStyles';
import Login from './components/Login';
import { AuthContextProvider } from './contexts/AuthContext';
import Register from './components/Register';
import ForgotPassword from './components/ForgotPassword';


function App() {
  const [ theme, toggleTheme ] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <AuthContextProvider>
    <BrowserRouter>
        <ThemeProvider theme={themeMode}>
        <link rel="stylesheet" as="style" crossorigin href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css" />
        <GlobalStyles />
        <Container>
      <Header theme={theme} toggleTheme={toggleTheme}/>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/scheduled" element={<Scheduled />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/forgot-password" element={<ForgotPassword />}></Route>
      </Routes>
      </Container>
      </ThemeProvider>
    </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;

const Container = styled.div`
  width:100%;
  height: auto;
  font-family: 'Pretendard';
`
