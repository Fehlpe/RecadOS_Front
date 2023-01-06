import ReactDOM from "react-dom/client";
import "./styles/tailwind.css";
import React from "react";
import AppRoutes from "./routes/Routes";
import { Provider } from "react-redux";
import { persistor, store } from "./store/modules";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <AppRoutes />
    </PersistGate>
  </Provider>
);
