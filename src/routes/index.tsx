import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from 'pages/Main';
import NotFound from 'pages/NotFound';
import PublicRoute from 'routes/PublicRoute';
import PrivateRoute from 'routes/PrivateRoute';
import Login from 'pages/Login';
import Layout from 'pages/Layout';

export default function Router() {
  const [auth] = useState(false);

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route
          path="login"
          element={
            <PublicRoute authenticated={auth}>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          index
          element={
            <PrivateRoute authenticated={auth}>
              <Main />
            </PrivateRoute>
          }
        />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
