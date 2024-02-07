import React, { createContext, useState } from 'react'

export const Micontexto = createContext()

export const TemaProvider = ({children}) => {
  const [temaPokemon, setTema] = useState();
  
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
  return (
    <Micontexto.Provider value={{temaPokemon,gray, green,pink,purple,black,blue,brown,yellow,red,all,white}} >
      {children}
    </Micontexto.Provider>
  )
}
