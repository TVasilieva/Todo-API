import React, { FC } from "react";

import "./App.scss";

import Layout from "components/Layout";
import Login from "components/Login";
import MainPage from "pages/MainPage";
import AppPage from "pages/AppPage";
import NotFoundPage from "pages/NotFoundPage";

import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { store } from "state";

const App: FC = () => {
  return (
    <Provider store={store}>
      <Layout>
        <Router>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/todo" element={<AppPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Router>
      </Layout>
    </Provider>
  );
};

export default App;
