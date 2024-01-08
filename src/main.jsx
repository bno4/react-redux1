import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/index.scss";

// REDUX
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/index.jsx";
import { getPosts } from "./actions/post.action.jsx";
import { getUser } from "./actions/user.action.jsx";
const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});
store.dispatch(getPosts());
store.dispatch(getUser());

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
