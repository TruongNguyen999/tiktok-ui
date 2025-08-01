import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import GlobalStyle from "./component/GlobalStyle";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Router basename="/tiktok-ui">
      <GlobalStyle>
        <App />
      </GlobalStyle>
    </Router>
  </Provider>
);
