import Main from './pages/Main';
import styled , { ThemeProvider } from 'styled-components';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Scheduled from './pages/Scheduled';
import Header from './components/Header';
import { useDarkMode } from './components/useDarkMode';
import { GlobalStyles, lightTheme, darkTheme } from './components/globalStyles';


function App() {
  const [ theme, toggleTheme ] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <BrowserRouter>
        <ThemeProvider theme={themeMode}>
        <GlobalStyles />
        <Container>
      <Header theme={theme} toggleTheme={toggleTheme}/>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/scheduled" element={<Scheduled />}></Route>
      </Routes>
      </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;

const Container = styled.div`
  width:100%;
  height: auto;
  font-family: 'Pretendard';
`
