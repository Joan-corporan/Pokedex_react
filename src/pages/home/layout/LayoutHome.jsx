import { useEffect, useState } from "react";
import css from "./sasLayout.module.scss";
import { Header } from "../header/Header";
import { URL_POKEMON } from "../../../api/apiRest";
import axios from "axios";
import { Card } from "../card/Card";

import { Loading } from "../../../components/Loading";
export const LayoutHome = () => {
  const [carga, setCarga] = useState(true);
  const [arrayPokemon, setPokemon] = useState([]);
  const [temaPokemon, setTema] = useState("");

  
   const green = () => {
     setTema("green");
   };
   const blue = () => {
     setTema("blue");
   };
   const red = () => {
     setTema("red");
   };
   const yellow = () => {
     setTema("yellow");
   };
   const pink = () => {
     setTema("pink");
   };
   const brown = () => {
     setTema("brown");
   };
   const white = () => {
     setTema("white");
   };
   const black = () => {
     setTema("black");
   };
   const all = () => {
     setTema("all");
   };
   const purple = () => {
     setTema("purple");
   };
   const gray = () => {
     setTema("gray");
   };
   //Traer los pokemones de la API
   try {
  useEffect(() => {
    const api = async () => {
      try {
        const data = await axios.get(URL_POKEMON);
        setPokemon(data.data.results);
        setCarga(false);
      } catch (error) {
        console.log(error);
      }
    };
    api();
  }, []);
} catch (error) {
  console.log(error)
}
  
  return (
    <>
    <div className={`${css.layout} bg-${temaPokemon}`}>

      {carga ? 
        <Loading />
         : <>
      <Header />
      {<section>
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Tema
          </button>
          <ul className="dropdown-menu">
            <li>
              <button onClick={() => green()} className="dropdown-item">
                Green
              </button>
            </li>
            <li>
              <button onClick={() => blue()} className="dropdown-item">
                Blue
              </button>
            </li>
            <li>
              <button onClick={() => red()} className="dropdown-item">
                Red
              </button>
            </li>
            <li>
              <button onClick={() => yellow()} className="dropdown-item">
                Yellow
              </button>
            </li>
            <li>
              <button onClick={() => purple()} className="dropdown-item">
                Purple
              </button>
            </li>
            <li>
              <button onClick={() => brown()} className="dropdown-item">
                Brown
              </button>
            </li>
            <li>
              <button onClick={() => black()} className="dropdown-item">
                Black
              </button>
            </li>
            <li>
              <button onClick={() => pink()} className="dropdown-item">
                Pink
              </button>
            </li>
            <li>
              <button onClick={() => gray()} className="dropdown-item">
                Gray
              </button>
            </li>
            <li>
              <button onClick={() => white()} className="dropdown-item">
                White
              </button>
            </li>
            <li>
              <button onClick={() => all()} className="dropdown-item">
                All
              </button>
            </li>
          </ul>
        </div>
      </section>}

        <div className={css.card_content}>
          {arrayPokemon.map((card, index) => (
            <Card key={index} card={card} />
          ))}
        </div>
         </>
      }
    </div>
    </>
    
  );
};
