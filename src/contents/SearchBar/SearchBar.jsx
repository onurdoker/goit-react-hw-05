// import { sytles } from "./SearchBar.module.css";

const SearchBar = () => {
  
  const handleSubmit = (event) => {
    event.preventDefault();
    
    const setSearch = event.target.search.value;
    console.log(setSearch);
  };
  
  
  return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
              name={"search"}
              type={"text"}
              autoComplete={"off"}
              autoFocus
              placeholder={"Search for movies"}
          
          />
          <button>Search</button>
        </form>
      
      </div>
  );
  
};

export default SearchBar;