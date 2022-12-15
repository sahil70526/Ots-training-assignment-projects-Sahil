import "./App.css";
import SearchForm from "./components/SearchForm";
import List from "./components/List";
import { useEffect, useState } from "react";
import axios from "axios";
import { Pagination } from "semantic-ui-react";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [renderPokemon, setRenderPokemon] = useState([]);
  const [paginatedPokemons, setPaginatedPokemons] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  // const [call,setCall]=useState(false);

  const filterPokemon = (searchValue) => {
    const newPokemons = paginatedPokemons.filter((pokemon) =>
      pokemon.name.includes(searchValue.toLowerCase())
    );
    setRenderPokemon(newPokemons);
  };

  let heightValue=(value)=>{
    console.log(value);

  }

  let filterByHeight=(scale)=>{
console.log(scale);
  }

  //calling api
  
  const getPokemons = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/")
      .then(({ data: { results } }) => {
        setPokemons(results);
        setPaginatedPokemons(results.slice(0, 4));
        setRenderPokemon(results.slice(0, 4));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // const deletePokemon = (name) => {};

  // mimicing componentDidMount
  useEffect(() => {
    getPokemons();
  }, []);

  useEffect(() => {
    if (currentPage === 1 ) {
      setPaginatedPokemons(pokemons.slice(0, 4));
      setRenderPokemon(pokemons.slice(0, 4));
    } else if (currentPage === 2 ) {
      setPaginatedPokemons(pokemons.slice(4, 8));
      setRenderPokemon(pokemons.slice(4, 8));
    } else if (currentPage === 3 ) {
      setPaginatedPokemons(pokemons.slice(8, 12));
      setRenderPokemon(pokemons.slice(8, 12));
    } else if (currentPage === 4 ) {
      setPaginatedPokemons(pokemons.slice(12, 16));
      setRenderPokemon(pokemons.slice(12, 16));
    } else if (currentPage === 5 ) {
      setPaginatedPokemons(pokemons.slice(16, 20));
      setRenderPokemon(pokemons.slice(16, 20));
    }
    // setCall(true)
  }, [currentPage]);

  return (
    <div
      style={{
        marginLeft: "20px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <SearchForm filterPokemon={filterPokemon} filterByHeight={filterByHeight} />
        <List pokemons={renderPokemon} heightValue={heightValue} />
      </div>
      <div style={{ textAlign: "center", margin: "20px" }}>
      <Pagination
          boundaryRange={0}
          defaultActivePage={1}
          ellipsisItem={null}
          firstItem={null}
          lastItem={null}
          siblingRange={1}
          totalPages={5}
          onPageChange={(e, value) => {
            setCurrentPage(value.activePage);
            // setCall(false)
          }}

        />
      </div>
    </div>
  );
}

export default App;
