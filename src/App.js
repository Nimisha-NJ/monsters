import "./App.css";
import { useEffect, useState } from "react";

import SearchBox from "./components/search-box/search_box";
import CardList from "./components/card-list/CardList";

function App() {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  console.log({ searchField });
  console.log(monsters);
  console.log({ setFilteredMonsters });
 console.log({ filteredMonsters });

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  const onSearchChange = (event) => {
    const searchFiledString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFiledString);
  };

  const newFilteredMonster = monsters.filter((v) => {
    return v.name.toLocaleLowerCase().includes(searchField);
  });

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>

      <SearchBox
        className="monsters-search-box"
        onChangeHandler={onSearchChange}
        placeholder="search monsters"
      />
      <CardList monsters={newFilteredMonster} />
    </div>
  );
}

export default App;
