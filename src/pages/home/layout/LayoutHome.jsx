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

  const colores = ['#FF5733', '#33FF57', '#3357FF', '#F333FF', '#33FFF3','#b11212','#ffef12','#876006','#f7f6f5','#000000','#900fdb','#c9c7ca'];
   const green = () => {
     setTema(colores[1]);
   };
   const blue = () => {
     setTema(colores[2]);
   };
   const red = () => {
     setTema(colores[5]);
   };
   const yellow = () => {
     setTema(colores[6]);
   };
   const pink = () => {
     setTema(colores[3]);
   };
   const brown = () => {
     setTema(colores[7]);
   };
   const white = () => {
     setTema(colores[8]);
   };
   const black = () => {
     setTema(colores[9]);
   };
   const all = () => {
     setTema(colores[4]);
   };
   const purple = () => {
     setTema(colores[10]);
   };
   const gray = () => {
     setTema(colores[11]);
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
    <div className={`${css.layout} ` }style={{ backgroundColor: temaPokemon }}>

      {carga ? 
        <Loading />
         : <>
      <Header />
      {<section>
        <div className="dropdown" style={{
          width: "35%", display:"inline-block", marginLeft: "2%"
        }}>
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{
              fontSize: "25px",
              marginBottom:"3%",
              fontWeight: "bold",
            }}
          >
            Cambiar color de tema
          </button>
          <ul className="dropdown-menu" style={{
          width: "50%",  textAlign: "center",
          fontSize:"20px"
        }}>
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
