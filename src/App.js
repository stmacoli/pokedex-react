import React, {useEffect, useState} from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import  Pokedex  from "./components/Ppokedex";
import { getPokemons } from "./components/api";



function App() {
  
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  
  const fetchPokemons = async () => {
    try {
      setLoading(true)
      const result = await getPokemons();
      setPokemons(result);
      setLoading(false);
    } catch (error) {
      console.log('fetch poke error', error)
    }
  }

   
  useEffect (() => {
    console.log('carregou')
    fetchPokemons()
 
  }, [])

  return (
    <div>
      <Navbar />
      <Searchbar />
      <Pokedex pokemons={pokemons} loading={loading} />
    </div>
  );
}

export default App;
