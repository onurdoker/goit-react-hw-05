import { toast } from "react-toastify";
import styles from "./SearchBar.module.css";

const SearchBar = ({ setQuery }) => {
  
  const handleSubmit = (event) => {
    event.preventDefault();
    
    const query = event.target.search.value;
    
    if (query.trim() === "") {
      toast.info("Please enter a search query");
      return;
    }
    
    setQuery(query);
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
              placeholder={"Enter a movie name"}
          
          />
          <button className={styles.btn}>Search</button>
        </form>
      
      </div>
  );
  
};

export default SearchBar;