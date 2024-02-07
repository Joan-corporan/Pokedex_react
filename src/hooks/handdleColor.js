import  { useState } from 'react'

export const handdleColor = () => {
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
  return {
    temaPokemon,
    green,
    red,
    blue,
    yellow,
    black,
    white,
    all,
    purple,
    gray,
    brown,
    pink,
    
  }
}
