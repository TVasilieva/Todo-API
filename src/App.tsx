import { FC } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import "./App.scss";

import Layout from "layouts/SnowLayout";
import MainPage from "pages/MainPage";
import AppPage from "pages/AppPage";
import ProfilePage from "pages/ProfilePage";
import NotFoundPage from "pages/NotFoundPage";
import ProtectedRoute from "components/ProtectedRoute";

import { Routes as RouteName } from "./constants/routes";

const App: FC = () => {
  return (
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
          <Route
            path={RouteName.Profile}
            element={
              <ProtectedRoute>
                <ProfilePage data-testid="profile-link" />
              </ProtectedRoute>
            }
          />
          <Route
            path={RouteName.Error}
            element={<NotFoundPage data-testid="error-link" />}
          />
        </Routes>
      </Router>
    </Layout>
  );
};

export default App;
