import React from "react";
import reportWebVitals from "./reportWebVitals";

import { createRoot } from "react-dom/client";

// redux
import { Provider } from "react-redux";
import store from "./context/store.js";

import "bootstrap/dist/css/bootstrap.min.css";
import "assets/scss/main.scss";

import BaseLayout from "containers/BaseLayout";
import TablesSection from "containers/TablesSection";

const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <Provider store={store}>
    <BaseLayout>
      <TablesSection />
    </BaseLayout>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
