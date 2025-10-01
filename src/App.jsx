import "./App.css";
import { lazy } from "react";
import { Route, Routes } from "react-router";

const HomePage = lazy(() => import("./pages/HomePage/HomePage.jsx"));
const MoviesPage = lazy(() => import("./pages/MoviesPage/MoviesPage.jsx"));
const MovieDetailPage = lazy(() => import("./pages/MovieDetailPage/MovieDetailPage.jsx"));

function App() {
  
  return (
      <>
        <Routes>
          <Route
              path={"/"}
              element={<HomePage />}
          />
          <Route
              path={"/MoviesPage"}
              element={<MoviesPage />}
          />
          <Route
              path={"/movie/:id"}
              element={<MovieDetailPage />}
          />
          <Route
              path={"*"}
              element={"Not Found"}
          />
        </Routes>
      </>
  );
}

export default App;
