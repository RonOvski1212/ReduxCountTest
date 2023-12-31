import React from "react";
import { createRoot } from "react-dom/client";

import { createStore } from "redux";
import reducer from "./reducer";
import { Provider } from "react-redux";

import App from "./components/App";

const store = createStore(reducer);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
