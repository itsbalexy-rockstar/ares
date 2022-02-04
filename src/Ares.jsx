import React from "react";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import { store } from "./store/store";

const Ares = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};

export default Ares;
