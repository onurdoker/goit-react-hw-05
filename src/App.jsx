import "./App.css";
import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage/HomePage.jsx";
import MoviesPage from "./pages/MoviesPage/MoviesPage.jsx";

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
              path={"*"}
              element={"Not Found"}
          />
        </Routes>
      </>
  );
}

export default App;
