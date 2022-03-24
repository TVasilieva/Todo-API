import { ReactNode } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { store } from "state";

export const wrappedWithRouterAndReduxComponent = (data: ReactNode) => {
  return (
    <Provider store={store}>
      <Router>{data}</Router>
    </Provider>
  );
};

export const wrappedWithReduxComponent = (data: ReactNode) => {
  return <Provider store={store}>{data}</Provider>;
};
