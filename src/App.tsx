import React, { FC } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.scss";

import Layout from "layouts/SnowLayout";
import MainPage from "pages/MainPage";
import AppPage from "pages/AppPage";
import NotFoundPage from "pages/NotFoundPage";
import ProtectedRoute from "components/ProtectedRoute";

import { store } from "state";
import { Routes as RouteName } from "./constants/routes";

const App: FC = () => {
  return (
    <Provider store={store}>
      <Layout>
        <Router>
          <Routes>
            <Route path={RouteName.Home} element={<MainPage />} />
            <Route
              path={RouteName.Todo}
              element={
                <ProtectedRoute>
                  <AppPage />
                </ProtectedRoute>
              }
            />
            <Route path={RouteName.Error} element={<NotFoundPage />} />
          </Routes>
        </Router>
      </Layout>
    </Provider>
  );
};

export default App;
