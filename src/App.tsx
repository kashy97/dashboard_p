import React from "react";
import './App.css';
import { DatePicker, NavBar } from "./components";
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
  
const theme = createMuiTheme({
  typography: {
    fontFamily: [
      "Quicksand", "sans-serif",
    ].join(','),
  },});

function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
      <NavBar />
      <DatePicker />
      <div className="page">
    </div>
    </ThemeProvider>
    </>
  );
}

export default App;
