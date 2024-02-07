import React, { useEffect, useState } from "react";
import css from "./card.module.scss";
import axios from "axios";
import { URL_POKEMON, URL_POKEMON_ESPECIES, URL_POKEMON_EVOLUTION } from "../../../api/apiRest";

export const Card = ({ card }) => {
  const [itemsPokemo, setItempoke] = useState({});
  const [especiePokemon, setEspeciepoke] = useState({});
  /*   console.log(itemsPokemo);
   */ try {
    useEffect(() => {
      const dataPokemon = async () => {
        const api = await axios.get(`${URL_POKEMON}/${card.name}`);
        setItempoke(api.data);
      };
      dataPokemon();
    }, [card]);

    useEffect(() => {
      const dataespeciePokemon = async () => {
        const URL = card?.url?.split("/");

        const api = await axios.get(`${URL_POKEMON_ESPECIES}/${URL[6]}`);
        setEspeciepoke({
          url_especie: api?.data?.evolution_chain,
          data: api?.data,
        });
      };
      dataespeciePokemon();
    }, [card]);

    useEffect(() => {
    async  function getPokemonImagen (id)  {
        const response = await axios.get(`${URL_POKEMON}/${id}`);
        return response?.data?.sprites?.other["official-artwork"]?.font_default;
      };

      if (especiePokemon?.url_especie) {

        const obtenerEvoluciones = async () => {
          const arrayEvoluciones = [];
          const URL = especiePokemon?.url_especie?.url.split("/");
          const api = await axios.get(`${URL_POKEMON_EVOLUTION}/${URL[6]}`);
          console.log(api)
         /* const img1 = await getPokemonImagen() */
          
        }; 
        obtenerEvoluciones()
      }
      /* const dataespeciePokemon = async () => {
    const URL = card?.url?.split("/");
    const api = await axios.get(`${URL_POKEMON_ESPECIES}/${URL[6]}`)
    setEspeciepoke({url_especie :api?.data?.evolution_chain, data: api.data});
    };
    dataespeciePokemon(); */
    }, [especiePokemon]);
  } catch (error) {
    /* console.log(error) */
  }

  /* console.log(itemsPokemo); */
  let pokeId = itemsPokemo?.id?.toString();
  if (pokeId?.length === 1) {
    pokeId = "00" + pokeId;
  } else if (pokeId?.length === 2) {
    pokeId = "0" + pokeId;
  }
  return (
    <div className={css.card}>
      <img
        className={css.img_poke}
        src={itemsPokemo?.sprites?.other["official-artwork"].front_default}
        alt="Pokemon"
      />
      <div
        className={`bg-${especiePokemon?.data?.color?.name} ${css.sub_card}`}
      >
        <strong className={css.id_poke}>{pokeId}</strong>
        <strong className={css.name_poke}>{itemsPokemo?.name}</strong>
        <h4 className={css.altura_poke}>Altura: {itemsPokemo.height}0 Cm</h4>
        <h4 className={css.peso_poke}>Peso: {itemsPokemo.weight}Kg</h4>
        <h4 className={css.habitat_poke}>
          Habitad: {especiePokemon?.data?.habitat?.name}
        </h4>

        <div className={css.div_stats}>
          {itemsPokemo?.stats?.map((sta, index) => (
            <h6 key={index} className={css.item_stats}>
              <span className={css.item_name}>{sta.stat.name}</span>
              <progress value={sta.base_stat} max={110}></progress>
              <span className={css.item_numero}>{sta.base_stat}</span>
            </h6>
          ))}
        </div>
        <div className={css.div_type_color}>
          {itemsPokemo?.types?.map((ti, index) => (
            <h6
              key={index}
              className={`color-${ti.type.name} ${css.color_type}`}
            >
              {ti.type.name}
            </h6>
          ))}
        </div>
      </div>
    </div>
  );
};
