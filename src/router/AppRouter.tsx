import React from "react";
import { Route, Routes, Navigate } from 'react-router-dom';
import { routes } from "./route";

const AppRouter = () => {

    return (
        <Routes>
        {routes.map(route =>
          <Route
            key={route.path}
            path={route.path}
            element={route.element}
          />
        )}
        <Route
          path="*"
          element={<Navigate to="projects" />}
        />
      </Routes>
    );
}

export default AppRouter;