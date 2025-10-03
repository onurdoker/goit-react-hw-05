import { lazy } from "react";
import { Route, Routes } from "react-router";
import ScrollToTop from "react-scroll-to-top";

import Header from "./contents/Header/Header.jsx";

import "./App.css";

const HomePage = lazy(() => import("./pages/HomePage/HomePage.jsx"));
const Movies = lazy(() => import("./pages/MoviesPage/Movies.jsx"));
const MovieDetailPage = lazy(() => import("./pages/MovieDetailPage/MovieDetailPage.jsx"));
const Cast = lazy(() => import("./pages/CastPage/CastPage.jsx"));
// const Reviews = lazy(() => import("./pages/ReviewsPage/ReviewsPage.jsx"));
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
              element={<Movies />}
          />
          
          <Route
              path={"/movie/:id"}
              element={<MovieDetailPage />}
          >
            <Route
                path={"cast"}
                element={<Cast />}
            />
            {/*<Route*/}
            {/*    path={"reviews"}*/}
            {/*    element={<Reviews />}*/}
            {/*/>*/}
          
          
          </Route>
          
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
