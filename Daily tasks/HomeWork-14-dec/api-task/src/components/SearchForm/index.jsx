import React, { useState } from "react";

function SearchForm  ({ filterPokemon }){
  const [value,setValue]=useState('')

  const search = (e) => {
    // let value = e.target.value;
    // filterPokemon(value)
    
    setValue(e.target.value)
  };

  const sendData=()=>{
    filterPokemon(value)
  }

  return (
    <div  
      style={{
       textAlign:'center',
       margin:'20px',
        height: "60px",
      }}
    >
      <form>
        <input
          style={{ height: "45px", width: "200px", margin: "20px" ,textAlign:'center',fontSize:'larger'}}
          name="pokemon"
          value={value}
          onChange={search}
          placeholder="search-in-page"
        />
        <button
          style={{
            color: "white",
            height: "45px",
            margin: "2px",
            borderRadius: "8px",
            width: "90px",
            backgroundColor: "blue",
          }}
          onClick={sendData}
        >
          Search
        </button>
        <button
          style={{
            color: "white",
            height: "45px",
            borderRadius: "8px",
            width: "90px",
            backgroundColor: "cyan",
          }}
        >
          Reset
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
