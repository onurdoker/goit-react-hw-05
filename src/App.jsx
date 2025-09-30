import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./contents/Home.jsx";
import Movies from "./contents/Movies.jsx";

function App() {
  
  return (
      <>
        <Routes>
          <Route
              path={"/"}
              element={<Home />}
          />
          <Route
              path={"/Movies"}
              element={<Movies />}
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
