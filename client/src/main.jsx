import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import {
  CSSReset,
  theme,
  ChakraProvider,
  ColorModeProvider,
  ThemeProvider,
} from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";

const serverLocal = "https://urlshortener-n47w.onrender.com";
const serverBaseUrl = "https://urlshortener-n47w.onrender.com";
axios.defaults.baseURL = serverBaseUrl;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <ColorModeProvider>
            <CSSReset />
            <App />
          </ColorModeProvider>
        </ThemeProvider>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
