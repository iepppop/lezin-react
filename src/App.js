import Main from './pages/Main';
import styled , { ThemeProvider } from 'styled-components';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Scheduled from './pages/Scheduled';
import Header from './components/Header';
import { useDarkMode } from './components/useDarkMode';
import { GlobalStyles, lightTheme, darkTheme } from './components/globalStyles';
import Login from './components/Login';
import { AuthContextProvider } from './contexts/AuthContext';
import { DataContextProvider } from './contexts/DataContext';
import Register from './components/Register';
import ForgotPassword from './components/ForgotPassword';
import Resetpassword from './components/Resetpassword';
import Romance from './pages/Romance';
import Boys from './pages/Boys';
import dayweb from '../src/components/dayweb.json'
import Drama from './pages/Drama';
import Bl from './pages/Bl';
import Free from './pages/Free';


function App() {
  const [ theme, toggleTheme ] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  const webtoon = dayweb.webtoon;

  return (
    <AuthContextProvider>
      <DataContextProvider>
    <BrowserRouter>
        <ThemeProvider theme={themeMode}>
        <link rel="stylesheet" as="style" crossorigin href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css" />
        <GlobalStyles />
        <Container>
      <Header theme={theme} toggleTheme={toggleTheme}/>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/scheduled" element={<Scheduled webtoon={webtoon}/>}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/forgot-password" element={<ForgotPassword />}></Route>
        <Route path="/reset-password" element={<Resetpassword />}></Route>
        <Route path="/romance" element={<Romance/>}></Route>
        <Route path="/boys" element={<Boys/>}></Route>
        <Route path="/drama" element={<Drama/>}></Route>
        <Route path="/bl" element={<Bl/>}></Route>
        <Route path="/free" element={<Free/>}></Route>
      </Routes>
      </Container>
      </ThemeProvider>
    </BrowserRouter>
    </DataContextProvider>
    </AuthContextProvider>
  );
}

export default App;

const Container = styled.div`
  width:100%;
  height: auto;
  font-family: 'Pretendard';
`
