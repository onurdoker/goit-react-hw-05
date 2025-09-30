import styles from "./SearchBar.module.css";

const SearchBar = ({ setSearch }) => {
  
  const handleSubmit = (event) => {
    event.preventDefault();
    setSearch(event.target.search.value);
  };
  
  
  return (
      <div className={styles.container}>
        <form onSubmit={handleSubmit}>
          <input
              className={styles.input}
              name={"search"}
              type={"text"}
              autoComplete={"off"}
              autoFocus
              placeholder={"Search for movies"}
          
          />
          <button className={styles.btn}>Search</button>
        </form>
      
      </div>
  );
  
};

export default SearchBar;