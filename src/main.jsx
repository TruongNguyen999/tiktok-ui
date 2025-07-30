import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import GlobalStyle from "./component/GlobalStyle";
import { BrowserRouter as Router } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <Router basename="/tiktok-ui">
    <GlobalStyle>
      <App />
    </GlobalStyle>
  </Router>
);
