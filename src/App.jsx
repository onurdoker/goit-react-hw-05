import { lazy } from "react";
import { Route, Routes } from "react-router";
import ScrollToTop from "react-scroll-to-top";

import Header from "./contents/Header/Header.jsx";

import "./App.css";

const HomePage = lazy(() => import("./pages/HomePage/HomePage.jsx"));
const MoviesPage = lazy(() => import("./pages/MoviesPage/MoviesPage.jsx"));
const MovieDetailPage = lazy(() => import("./pages/MovieDetailPage/MovieDetailPage.jsx"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage.jsx"));

function App() {
  
  
  return (
      <div>
        <Header />
        
        <Routes>
          <Route
              path={"/"}
              element={<HomePage />}
          />
          <Route
              path={"/movies"}
              element={<MoviesPage />}
          />
          
          <Route
              path={"/movies/:id"}
              element={<MovieDetailPage />}
          />
          
          <Route
              path={"*"}
              element={<NotFoundPage />}
          />
        
        </Routes>
        
        <ScrollToTop
            smooth={true}
            showunder={200}
            component={"⬆"}
            style={{
              borderRadius: "50%",
              backgroundColor: "#646CFF",
              color: "#FFFFFF",
              position: "fixed",
              zIndex: "1000",
              cursor: "pointer",
              fontSize: "24px",
            }}
        />
      </div>
  );
}

export default App;
