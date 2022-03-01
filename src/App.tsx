import React, { FC } from "react";

import "./App.scss";

import Layout from "layouts/SnowLayout";
import MainPage from "pages/MainPage";
import AppPage from "pages/AppPage";
import NotFoundPage from "pages/NotFoundPage";

import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { store } from "state";
import { Routes as RouteName } from "./constants/routes";
//import ProtectedRoute from "components/ProtectedRoute";

const App: FC = () => {
  return (
    <Provider store={store}>
      <Layout>
        <Router>
          <Routes>
            <Route path={RouteName.Home} element={<MainPage />} />
            <Route path={RouteName.Todo} element={<AppPage />} />
            <Route path={RouteName.Error} element={<NotFoundPage />} />
          </Routes>
        </Router>
      </Layout>
    </Provider>
  );
};

export default App;
