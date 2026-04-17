import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App.jsx";
import { appStore } from "./app/store";
import { Toaster } from "sonner";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={appStore}>
      {/* <BrowserRouter> */}
        <App />
        <Toaster />
      {/* </BrowserRouter> */}
    </Provider>
  </StrictMode>
);
