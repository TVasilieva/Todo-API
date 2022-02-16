import React, { FC, useState } from "react";

import "./App.scss";

import Layout from "./components/Layout";
import Login from "./components/Login";
import MainPage from "./pages/MainPage";
import AppPage from "./pages/AppPage";
import NotFoundPage from "./pages/NotFoundPage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App: FC = () => {
  const [completed, setCompleted] = useState<boolean>(false);

  return (
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
  );
};

export default App;
