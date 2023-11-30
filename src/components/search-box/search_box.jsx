import "./search_box.css"


const SearchBox =({className,onChangeHandler,placeholder}) =>{
    return (
      <input
        className='search-box'
        type="search"
        onChange={onChangeHandler}
        placeholder={placeholder}
      />
    );
}
    


export default SearchBox;


