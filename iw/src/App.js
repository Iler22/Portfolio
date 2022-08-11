import "./App.css";
import React from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import ErrorBoundary from "./components/ErrorBoundary";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: "dark"
  },
});

function App() {
  return (
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
    <ErrorBoundary>
        <Header />
        <Main />
    </ErrorBoundary>
      </ThemeProvider>
  );
}

export default App;
