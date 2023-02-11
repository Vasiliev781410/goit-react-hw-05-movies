
import { useState } from "react";
import css from './SearchForm.module.css';
import PropTypes from 'prop-types';


export const SearchForm = ({onSubmit}) => {
  const [filter,setFilter] = useState("");

  const onChange = (evt) => {      
    setFilter(evt.target.value); 
  }  

  const onSubmitSearchForm = (evt) =>{
      evt.preventDefault();                 
      onSubmit(filter);
      setFilter(""); 
   }
  
  return (      
    <form onSubmit={onSubmitSearchForm} className={css.searchForm}>     
        <input 
          onChange={onChange}                 
          name="searchQuery"
          className={css.searchFormInput}
          value={filter}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="write film name"
        />
        <button type="submit" className={css.searchFormButton}>
            Search
        </button>
    </form>
    
  )     
}

SearchForm.propTypes = {onSubmit: PropTypes.func};