import { useState } from "react";

import SearchBar from "../../contents/SearchBar/SearchBar.jsx";

const MoviesPage = () => {
  
  const [search, setSearch] = useState([]);
  
  console.log(search);
  
  return (
      <>
        <SearchBar setSearch={setSearch} />
      </>
  );
};

export default MoviesPage;
