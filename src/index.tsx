import ReactDOM from "react-dom/client";
import "./styles/tailwind.css";
import React from "react";
import AppRoutes from "./routes/Routes";
import { Provider } from "react-redux";
import store from "./store/modules";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <AppRoutes />
  </Provider>
);
