import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// import { store } from "./new-redux/store/store.jsx";
// import { Store } from "@reduxjs/toolkit";
import store from "./count-redux/store.jsx";
import { Provider } from "react-redux";
// import { store } from "./new-redux/store.jsx";
// import { Store } from "@reduxjs/toolkit";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
